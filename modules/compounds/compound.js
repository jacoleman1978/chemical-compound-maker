export default class Compound {
    constructor(cation, anion) {
        this.cation = cation;
        this.catSymbol = cation.getSymbol();
        this.catCharge = cation.getCharge();
        this.catName = cation.getName();
        this.catChargeMagnitude = cation.getChargeMagnitude();
        this.cationSubscript = 1;
        this.catIsPoly = cation.isPoly();
        this.anion = anion;
        this.anSymbol = anion.getSymbol();
        this.anCharge = anion.getCharge();
        this.anName = anion.getName();
        this.anChargeMagnitude = anion.getChargeMagnitude();
        this.anionSubscript = 1;
        this.anIsPoly = anion.isPoly();
        this.formula = '';
    }

    getCationObject() {
        return this.cation
    }

    getAnionObject() {
        return this.anion
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

        if (this.cationSubscript > 1 && this.catIsPoly) {
            formula.append('(');
        }

        for (let char of this.catSymbol) {
            if (Number.isInteger(parseInt(char)) == false) {
                formula.append(char);
            } else {
                let subscript = document.createElement('sub');
                subscript.textContent = char;
                formula.append(subscript);
            }
        }

        if (this.cationSubscript > 1 && this.catIsPoly) {
            formula.append(')');
        }
        
        if (this.cationSubscript > 1) {
            let cationSubElement = document.createElement('sub');
            cationSubElement.innerHTML = this.cationSubscript;
            formula.append(cationSubElement);
        }

        if (this.anionSubscript > 1 && this.anIsPoly == true) {
            formula.append('(');
        }

        for (let char of this.anSymbol) {
            if (Number.isInteger(parseInt(char)) == false) {
                formula.append(char);
            } else {
                let subscript = document.createElement('sub');
                subscript.textContent = char;
                formula.append(subscript);
            }
        }

        if (this.anionSubscript > 1 && this.anIsPoly == true) {
            formula.append(')');
        }

        if (this.anionSubscript > 1) {
            let anionSubElement = document.createElement('sub');
            anionSubElement.innerHTML = this.anionSubscript;
            formula.append(anionSubElement);
        }
    }

    displayName(htmlId) {
        let name = document.querySelector(htmlId);
        name.append(this.getName());
    }

    getPlainFormula() {
        this.findSubscripts();

        let plainFormula = "";

        if (this.catIsPoly == true && this.cationSubscript > 1) {
            plainFormula += '(';
        }

        for (let char of this.catSymbol) {
            if (Number.isInteger(parseInt(char)) == false) {
                plainFormula += char;
            } else {
                plainFormula += `/${char}`
            }
        }

        if (this.catIsPoly == true && this.cationSubscript > 1) {
            plainFormula += ')';
        }

        if (this.cationSubscript > 1) {
            plainFormula += `/${this.cationSubscript}`;
        }

        if (this.anIsPoly == true && this.anionSubscript > 1) {
            plainFormula += '(';
        }

        for (let char of this.anSymbol) {
            if (Number.isInteger(parseInt(char)) == false) {
                plainFormula += char;
            } else {
                plainFormula += `/${char}`
            }
        }

        if (this.anIsPoly == true && this.anionSubscript > 1) {
            plainFormula += ')';
        }

        if (this.anionSubscript > 1) {
            plainFormula += `/${this.anionSubscript}`;
        }

        return plainFormula
    }

    polyIonConversion() {
        let ionDiv = document.createElement('div');

        if (isPoly == true) {
            ionDiv.append('(');
        }

        for (let char of symbol) {
            if (Number.isInteger(parseInt(char)) == false) {
                ionDiv.append(char);
            } else {
                let subscript = document.createElement('sub');
                subscript.textContent = char;
                ionDiv.append(subscript)
            }
        }
         if (isPoly == true) {
            ionDiv.append(')');
         }

        return ionDiv
    }
}