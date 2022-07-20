import data from "./data.js";

// Makes editable divs auto format subscripts and superscripts for ions and chemical formulas
const editableDiv = (event, htmlId) => {
    // Retrieve contenteditable div, it's contents and the last key pressed
    let editableArea = document.querySelector(htmlId);
    let formula = editableArea.innerHTML;
    let newFormula = '';
    let lastChar = event.key;

    // Only do something if the key pressed is not named...for example 'SHIFT'
    if (lastChar.length <= 1) {
        // Put everything that was in the div back except the last character
        editableArea.innerHTML = formula.slice(0, -1);

        // Superscripts are identified by having a '+' or a '-'
        // If the superscript flag is set, add the next character to the <sup> element
        if (data.superscriptFlag == true) {
            // Unset the superscript flag
            data.superscriptFlag = false;

            // If the lastChar is an integer, just append it
            if (formula.length == 1 && (Number.isInteger(parseInt(lastChar)) == true)) {
                editableArea.append(lastChar);
            }

            // Validate the formatting, by checking for all <sup> elements
            let validate = editableArea.innerHTML;
            let supPosition = validate.search("<sup>");

            // Check for a <sup> element and verify correct formatting for chemical formulas
            while (supPosition != -1) {
                // While there is a <sup> element, slice up to the first charge and number, adding it to newFormula.
                // Put the remainder of the innerHTML into a new validate variable.
                newFormula += validate.slice(0, supPosition + 7);
                validate = validate.slice(supPosition + 7, validate.length);

                // If the first character in the new validate is alpha or a parentheses, 
                // remove the character then add </sup> and the next character after the closing tag
                if ((/[a-zA-Z\(\)]/).test(validate[0]) == true) {
                    newFormula += validate.slice(1, 7);
                    validate = validate.slice(7, validate.length);
                }

                // If there is no more to validate, add the last character to the newFormula
                if (validate.length == 0) {
                    newFormula += lastChar;
                }

                // If there are no more <sup> elements, add the remainder of validate to the newFormula
                if (validate.search("<sup>") == -1) {
                    newFormula += validate;
                }

                // Put the validated formula back into the editable div
                editableArea.innerHTML = newFormula;
                supPosition = validate.search("<sup>");
            }
        // If the superscriptFlag is false, check if it needs to be set, a <sub> used or no additional formatting
        } else {
            // If the last character is a '+' or '-', create a <sup> element with the charge inside
            // Set the superscriptFlag
            if ((/[\+\-]/).test(lastChar) == true) {
                // If there is also a subscript validate the subscript for chemical formulas
                let validate = editableArea.innerHTML;
                let subPosition = validate.search('</sub>')

                if (subPosition != -1) {
                    newFormula = validate.slice(0, subPosition - 1);
                    newFormula += validate.slice(subPosition);
                    editableArea.innerHTML = newFormula;
                }
                

                let superscript = document.createElement('sup');
                superscript.textContent = lastChar;
                editableArea.append(superscript)

                data.superscriptFlag = true;

            // If the lastChar is a number, create a <sub> element with the number inside
            } else if (Number.isInteger(parseInt(lastChar)) == true) {
                let subscript = document.createElement('sub');
                subscript.textContent = lastChar;
                editableArea.append(subscript);

            // If the lastChar is an alpha, parentheses, '+' or '-' validate the formatting of existing <sub> elements
            } else if ((/[a-zA-Z\(\)\+\-]/).test(lastChar) == true) {
                if (formula.length == 1) {
                    editableArea.append(lastChar.toUpperCase())
                } else {
                    editableArea.append(lastChar);
                }
    
                // Determine if there are any <sub> elements
                let validate = editableArea.innerHTML;
                let subPosition = validate.search("<sub>");
    
                // Validate each <sub> element, checking for correct formatting for chemical formulas
                while (subPosition != -1) {
                    // Add the first part, up to the first digit of a subscript, to newFormula
                    // Slice the remainder into a new validate
                    newFormula += validate.slice(0, subPosition + 6);
                    validate = validate.slice(subPosition + 6, validate.length);
    
                    // If the first character of the new validate is alpha, parentheses, '+' or '-', remove that character.
                    // Add the remainder to a new validate.
                    if ((/[a-zA-Z\(\)\+\-]/).test(validate[0]) == true) {
                        newFormula += validate.slice(1, 7);
                        validate = validate.slice(7, validate.length);
                    }
    
                    // If no <sub> elements remain in validate, add validate to newFormula
                    if (validate.search("<sub>") == -1) {
                        newFormula += validate;
                    }
    
                    // Put newFormula back into the editable div
                    editableArea.innerHTML = newFormula;
                    subPosition = validate.search("<sub>");
                }
            } 
        }
    
        // Keep the cursor in place at the end of what was typed in the editable div
        let range = document.createRange();
        range.selectNodeContents(editableArea);
        range.collapse(false);
        let selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

export default editableDiv;