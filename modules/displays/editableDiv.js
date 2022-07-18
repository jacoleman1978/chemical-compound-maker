import data from "./data.js";

const editableDiv = (event, htmlId) => {
    let editableArea = document.querySelector(htmlId);
    let formula = editableArea.innerHTML;
    let newFormula = '';
    let lastChar = event.key;

    if (lastChar.length <= 1) {
        editableArea.innerHTML = formula.slice(0, -1);

        if (data.superscriptFlag == true) {
            data.superscriptFlag = false;

            if (formula.length == 1 && (Number.isInteger(parseInt(lastChar)) == true)) {
                editableArea.append(lastChar);
            }

            let validate = editableArea.innerHTML;
            let supPosition = validate.search("<sup>");

            while (supPosition != -1) {
                newFormula += validate.slice(0, supPosition + 7);
                validate = validate.slice(supPosition + 7, validate.length);

                if ((/[a-zA-Z\(\)]/).test(validate[0]) == true) {
                    newFormula += validate.slice(1, 7);
                    validate = validate.slice(7, validate.length);
                }

                if (validate.length == 0) {
                    newFormula += lastChar;
                }

                if (validate.search("<sup>") == -1) {
                    newFormula += validate;
                }

                editableArea.innerHTML = newFormula;
                supPosition = validate.search("<sup>");
            }
        } else {
            if ((/[\+\-]/).test(lastChar) == true) {
                let superscript = document.createElement('sup');
                superscript.textContent = lastChar;
                editableArea.append(superscript);
                data.superscriptFlag = true;

            } else if (Number.isInteger(parseInt(lastChar)) == true) {
                let subscript = document.createElement('sub');
                subscript.textContent = lastChar;
                editableArea.append(subscript);

            } else if ((/[a-zA-Z\(\)]/).test(lastChar) == true) {
                if (formula.length == 1) {
                    editableArea.append(lastChar.toUpperCase())
                } else {
                    editableArea.append(lastChar);
                }
    
                let validate = editableArea.innerHTML;
                let subPosition = validate.search("<sub>");
    
                while (subPosition != -1) {
                    newFormula += validate.slice(0, subPosition + 6);
                    validate = validate.slice(subPosition + 6, validate.length);
    
                    if ((/[a-zA-Z\(\)]/).test(validate[0]) == true) {
                        newFormula += validate.slice(1, 7);
                        validate = validate.slice(7, validate.length);
                    }
    
                    if (validate.search("<sub>") == -1) {
                        newFormula += validate;
                    }
    
                    editableArea.innerHTML = newFormula;
                    subPosition = validate.search("<sub>");
                }
            } 
        }
    
        let range = document.createRange();
        range.selectNodeContents(editableArea);
        range.collapse(false);
        let selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

export default editableDiv;