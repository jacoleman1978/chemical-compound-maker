import molecNumbers from "./molecNumbers.js";
import domSelectors from "../eventListeners/domSelectors.js";

// Used to make molecular compounds
// firstElement and secondElement are MolecularCompound class objects
export default class MolecularCompound {
    constructor(firstElement, firstSubscript, secondElement, secondSubscript) {
        this.firstElement = firstElement;
        this.firstSubscript = firstSubscript;
        this.secondElement = secondElement;
        this.secondSubscript = secondSubscript;        
        this.formulaDisplayAnswerSelector = domSelectors.displayFormulaFromNameAnswer;
        this.formulaUserAnswerSelector = domSelectors.formulaFromNameAnswer;
        this.nameDisplayAnswerSelector = domSelectors.displayNameFromFormulaAnswer;
        this.nameUserAnswerSelector = domSelectors.nameFromFormulaAnswer;
    }

    getName() {
        let name = "";

        // Greek prefixes only used on the first element if the subscript is greater than 1
        if (this.firstSubscript > 1) {
            name += molecNumbers(this.firstSubscript);
        }

        // Greak prefix is always used on the second element to indicate the subscript
        name += `${this.firstElement.getElementName()} ${molecNumbers(this.secondSubscript)}${this.secondElement.getIonName()}`;

        return name
    }

    displayName(htmlId = "") {
        let name = "";

        // If an htmlId is given, use it to retrieve the element, otherwise create an empty div
        if (htmlId == "") {
            name = document.createElement('div');
        } else {
            name = document.querySelector(htmlId);
        }
        
        name.append(this.getName());

        return name
    }

    displayFormula(htmlId = "") {
        let formula = "";
        
        // If an htmlId is given, use it to retrieve the element, otherwise create an empty div
        if (htmlId == "") {
            formula = document.createElement('div');
        } else {
            formula = document.querySelector(htmlId);
        }

        // Add the symbol and subscripts greater than one for the first element
        formula.append(this.firstElement.getSymbol());

        if (this.firstSubscript > 1) {
            let subscript = document.createElement('sub');
            subscript.textContent = this.firstSubscript;
            formula.append(subscript);
        }

        // Add the symbol and subscripts greater than one for the second element
        formula.append(this.secondElement.getSymbol());

        if (this.secondSubscript > 1) {
            let subscript = document.createElement('sub');
            subscript.textContent = this.secondSubscript;
            formula.append(subscript);
        }

        return formula
    }

    getPlainFormula() {
        let formula = "";

        // Add the symbol and subscripts greater than one for the first element
        formula += this.firstElement.getSymbol();

        if (this.firstSubscript > 1) {
            formula += `/${this.firstSubscript}`;
        }

        // Add the symbol and subscripts greater than one for the second element
        formula += this.secondElement.getSymbol();

        if (this.secondSubscript > 1) {
            formula += `/${this.secondSubscript}`;
        }

        return formula
    }

    checkCompoundFormula() {
        // Display the answer to the user
        this.formulaDisplayAnswerSelector.innerHTML = "";
        this.formulaDisplayAnswerSelector.append(this.displayFormula(""));

        // Get the user's formula from the input
        let userAnswer = this.formulaUserAnswerSelector.innerHTML;

        //Check the user's answer and change styles based on correctness
        if (userAnswer == this.displayFormula("").innerHTML || userAnswer == this.getPlainFormula()) {
            this.formulaUserAnswerSelector.style.backgroundColor = 'lightgreen';
            this.formulaDisplayAnswerSelector.style.color = 'green';
        } else {
            this.formulaUserAnswerSelector.style.backgroundColor = 'yellow';
            this.formulaDisplayAnswerSelector.style.color = 'red';
        }
    }

    checkCompoundName() {
        // Generate the name of the compound
        let answer = this.getName();

        // Display the answer to the user
        this.nameDisplayAnswerSelector.innerHTML = "";
        this.nameDisplayAnswerSelector.append(answer);

        // Remove whitespace and convert input compound name to lower case
        let userAnswer = this.nameUserAnswerSelector.value.trim().toLowerCase();

        // Check the user's answer and change styles based on correctness
        if (userAnswer === answer) {
            this.nameUserAnswerSelector.style.backgroundColor = 'lightgreen';
            this.nameDisplayAnswerSelector.style.color = 'green';
        } else {
            this.nameUserAnswerSelector.style.backgroundColor = 'yellow';
            this.nameDisplayAnswerSelector.style.color = 'red';
        }
    }
}