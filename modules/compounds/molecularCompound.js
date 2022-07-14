import molecNumbers from "./molecNumbers.js";

export default class MolecularCompound {
    constructor(firstElement, firstSubscript, secondElement, secondSubscript) {
        this.firstElement = firstElement;
        this.firstSubscript = firstSubscript;
        this.secondElement = secondElement;
        this.secondSubscript = secondSubscript;
    }

    getName() {
        let name = "";

        if (this.firstSubscript > 1) {
            name += molecNumbers(this.firstSubscript);
        }

        name += `${this.firstElement.getElementName()} ${molecNumbers(this.secondSubscript)}${this.secondElement.getIonName()}`;

        return name
    }

    displayName(htmlId) {
        let name = document.querySelector(htmlId);
        name.append(this.getName());
    }

    getPlainFormula() {
        let formula = this.firstElement;

        if (this.firstSubscript > 1) {
            formula += `/${this.firstSubscript}`;
        }

        formula += ` ${this.secondElement}`;

        if (this.secondSubscript > 1) {
            formula +=`/${this.secondSubscript}`
        }

        return formula
    }

    displayFormula(htmlId) {
        let formula = document.querySelector(htmlId);

        formula.append(this.firstElement);

        if (this.firstSubscript > 1) {
            let subscript = document.createElement('sub');
            subscript.textContent = this.firstSubscript;
            formula.append(subscript);
        }

        formula.append(this.secondElement);

        if (this.secondSubscript > 1) {
            let subscript = document.createElement('sub');
            subscript.textContent = this.secondSubscript;
            formula.append(subscript);
        }
    }
}