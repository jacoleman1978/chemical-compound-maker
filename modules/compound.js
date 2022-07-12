export default class Compound {
    constructor(cation, anion) {
        this.catSymbol = cation.getSymbol();
        this.catCharge = cation.getCharge();
        this.catName = cation.getName();
        this.catChargeMagnitude = cation.getChargeMagnitude();
        this.cationSubscript = 1;
        this.anSymbol = anion.getSymbol();
        this.anCharge = anion.getCharge();
        this.anName = anion.getName();
        this.anChargeMagnitude = anion.getChargeMagnitude();
        this.anionSubscript = 1;

        this.formula = '';
    }

    getName() {
        return `${this.catName} ${this.anName}`
    }

    findSubscripts() {
        let catCharge = this.catChargeMagnitude;
        let anCharge = this.anChargeMagnitude;
        let min = Math.min(catCharge, anCharge);
        let max = Math.max(catCharge, anCharge);

        if (max % min == 0) {
            this.cationSubscript = max / catCharge;
            this.anionSubscript = max / anCharge;

        } else {
            let tempMin = min;
            let minCount = 1;
            
            let tempMax = max;
            let maxCount = 1;
    
            while (tempMax != tempMin) {
                if (tempMin < tempMax) {
                    minCount += 1;
                    tempMin = minCount * min;
                } else {
                    maxCount += 1;
                    tempMax = maxCount * max;
                }
            }

            this.cationSubscript = tempMax / catCharge;
            this.anionSubscript = tempMax / anCharge;
        }
    }

    displayFormula(htmlId) {
        this.findSubscripts();

        let formula = document.querySelector(htmlId);
        formula.innerHTML = "Formula: ";

        formula.append(this.catSymbol);
        
        if (this.cationSubscript > 1) {
            let cationSubElement = document.createElement('sub');
            cationSubElement.innerHTML = this.cationSubscript;
            formula.append(cationSubElement);
        }

        formula.append(this.anSymbol);

        if (this.anionSubscript > 1) {
            let anionSubElement = document.createElement('sub');
            anionSubElement.innerHTML = this.anionSubscript;
            formula.append(anionSubElement);
        }
    }

    displayName(htmlId) {
        let name = document.querySelector(htmlId);
        name.innerHTML = "Name: ";
        name.append(this.getName());
    }
}