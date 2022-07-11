export default class Ion {
    constructor(name, symbol, charge, htmlId) {
        this.name = name;
        this.symbol = symbol;
        this.charge = charge;
        this.chargeMagnitude = Math.abs(parseInt(charge));
        this.htmlId = '#' + htmlId;
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

    displayIon() {
        let ionDiv = document.createElement('div');
        ionDiv.append(this.symbol);
        let chargeDisplay = document.createElement('sub');
        chargeDisplay.textContent = this.charge;
        ionDiv.append(chargeDisplay);
        let ion = document.querySelector(this.html);
        ion.append(ionDiv);
    }
}