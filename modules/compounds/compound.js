import domSelectors from "../eventListeners/domSelectors.js";

export default class Compound {
    constructor(cation, anion, displayAnswerSelector, userAnswerSelector) {
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
        this.displayAnswerSelector = displayAnswerSelector;
        this.userAnswerSelector = userAnswerSelector;
    }

    getCationObject() {
        return this.cation
    }

    getAnionObject() {
        return this.anion
    }

    getName() {
        if (domSelectors.includeAcids.checked == true) {
            let anionSuffix = this.anName.slice(-3);
            let anionRoot = this.anName.slice(0, -3);

            if (anionRoot == 'sulf') {
                anionRoot = 'sulfur';

            } else if (anionRoot == 'phosph') {
                anionRoot = 'phosphor';
            }

            if (anionSuffix == 'ate') {
                return `${anionRoot}ic acid`

            } else if (anionSuffix == 'ite') {
                return `${anionRoot}ous acid`

            } else if (anionSuffix == 'ide') {
                return `hydro${anionRoot}ic acid`
            }

        } else {
            return `${this.catName} ${this.anName}`
        }
        
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

    displayFormula(htmlId = "") {
        this.findSubscripts();
        let formula = ""

        if (htmlId == "") {
            formula = document.createElement('div');
        } else {
            formula = document.querySelector(htmlId);
        }

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

        return formula
    }

    displayName(htmlId) {
        let name = document.querySelector(htmlId);
        name.append(this.getName());
    }

    checkCompoundFormula() {
        // Display the answer to the user
        this.displayAnswerSelector.innerHTML = "";
        this.displayAnswerSelector.append(this.displayFormula(""));

        // Get the user's formula from the input
        let userAnswer = this.userAnswerSelector.innerHTML;

        //Check the user's answer and change styles based on correctness
        if (userAnswer == this.displayFormula("").innerHTML) {
            this.userAnswerSelector.style.backgroundColor = 'lightgreen';
            this.displayAnswerSelector.style.color = 'green';
        } else {
            this.userAnswerSelector.style.backgroundColor = 'yellow';
            this.displayAnswerSelector.style.color = 'red';
        }
    }

    // getPlainFormula() {
    //     this.findSubscripts();

    //     let plainFormula = "";

    //     if (this.catIsPoly == true && this.cationSubscript > 1) {
    //         plainFormula += '(';
    //     }

    //     for (let char of this.catSymbol) {
    //         if (Number.isInteger(parseInt(char)) == false) {
    //             plainFormula += char;
    //         } else {
    //             plainFormula += `/${char}`
    //         }
    //     }

    //     if (this.catIsPoly == true && this.cationSubscript > 1) {
    //         plainFormula += ')';
    //     }

    //     if (this.cationSubscript > 1) {
    //         plainFormula += `/${this.cationSubscript}`;
    //     }

    //     if (this.anIsPoly == true && this.anionSubscript > 1) {
    //         plainFormula += '(';
    //     }

    //     for (let char of this.anSymbol) {
    //         if (Number.isInteger(parseInt(char)) == false) {
    //             plainFormula += char;
    //         } else {
    //             plainFormula += `/${char}`
    //         }
    //     }

    //     if (this.anIsPoly == true && this.anionSubscript > 1) {
    //         plainFormula += ')';
    //     }

    //     if (this.anionSubscript > 1) {
    //         plainFormula += `/${this.anionSubscript}`;
    //     }

    //     return plainFormula
    // }

    

    // polyIonConversion() {
    //     let ionDiv = document.createElement('div');

    //     if (isPoly == true) {
    //         ionDiv.append('(');
    //     }

    //     for (let char of symbol) {
    //         if (Number.isInteger(parseInt(char)) == false) {
    //             ionDiv.append(char);
    //         } else {
    //             let subscript = document.createElement('sub');
    //             subscript.textContent = char;
    //             ionDiv.append(subscript)
    //         }
    //     }
    //      if (isPoly == true) {
    //         ionDiv.append(')');
    //      }

    //     return ionDiv
    // }
}