// Used to make individual objects of available elements for molecular compounds
export default class MolecularElement {
    constructor(elementName, ionName, symbol, priority) {
        this.elementName = elementName;
        this.ionName = ionName;
        this.symbol = symbol;
        this.priority = priority;
    }

    getElementName() {
        return this.elementName
    }

    getIonName() {
        return this.ionName
    }

    getSymbol() {
        return this.symbol
    }

    getPriority() {
        return this.priority
    }
}