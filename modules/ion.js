export default class Ion {
    constructor(name, symbol, charge) {
        this.name = name;
        this.symbol = symbol;
        this.charge = charge;
        this.chargeMagnitude = Math.abs(parseInt(charge));
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

    displayIon(htmlId) {
        let ionDiv = document.createElement('div');
        ionDiv.append(this.symbol);
        let chargeDisplay = document.createElement('sup');
        chargeDisplay.textContent = this.charge;
        ionDiv.append(chargeDisplay);
        let ionContainer = document.querySelector(htmlId);
        ionContainer.append(ionDiv);
    }
}