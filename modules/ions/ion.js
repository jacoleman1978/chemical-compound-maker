export default class Ion {
    constructor(name, symbol, charge, isPolyatomic) {
        this.name = name;
        this.symbol = symbol;
        this.charge = charge;
        this.chargeMagnitude = Math.abs(parseInt(charge));
        this.isPolyatomic = isPolyatomic;
    }
    getName() {
        return this.name
    }

    getSymbol() {
        return this.symbol
    }
    
    getCharge() {
        return this.charge
    }

    getChargeMagnitude() {
        return this.chargeMagnitude
    }

    getFormattedIon() {
        let ionDiv = document.createElement('div');
        ionDiv.append(this.symbol);
        let chargeDisplay = document.createElement('sup');
        chargeDisplay.textContent = this.charge;
        ionDiv.append(chargeDisplay);
        return ionDiv
    }

    getPlainFormula() {
        return `${this.symbol}^${this.charge}`
    }

    polyIonConversion() {
        let ionDiv = document.createElement('div');

        for (let char of symbol) {
            if (Number.isInteger(parseInt(char)) == false) {
                ionDiv.append(char);
            } else {
                let subscript = document.createElement('sub');
                subscript.textContent = char;
                ionDiv.append(subscript)
            }
        }

        return ionDiv
    }
}