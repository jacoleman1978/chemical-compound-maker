import domSelectors from "../eventListeners/domSelectors.js";

export default class Ion {
    constructor(name, symbol, charge, isPolyatomic) {
        this.name = name;
        this.symbol = symbol;
        this.charge = charge;
        this.chargeMagnitude = Math.abs(parseInt(charge));
        this.isPolyatomic = isPolyatomic;
        this.formulaDisplayAnswerSelector = domSelectors.displayFormulaIonAnswer;
        this.formulaUserAnswerSelector = domSelectors.formulaIonAnswer;
        this.nameDisplayAnswerSelector = domSelectors.displayNameIonAnswer;
        this.nameUserAnswerSelector = domSelectors.nameIonAnswer;
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

    isPoly() {
        return this.isPolyatomic
    }

    getFormattedIon() {
        let ionDiv = document.createElement('div');
        
        if (this.isPolyatomic == true) {
            for (let char of this.symbol) {
                if (Number.isInteger(parseInt(char)) == false) {
                    ionDiv.append(char);
                } else {
                    let subscript = document.createElement('sub');
                    subscript.textContent = char;
                    ionDiv.append(subscript)
                }
            }
        } else {
            ionDiv.append(this.symbol);

        }

        let chargeDisplay = document.createElement('sup');
        chargeDisplay.textContent = this.charge;
        ionDiv.append(chargeDisplay);

        return ionDiv    
    }

    checkIonFormula() {
        // Display the answer to the user
        this.formulaDisplayAnswerSelector.innerHTML = "";
        this.formulaDisplayAnswerSelector.append(this.getFormattedIon());

        // Get the user's formula from the input
        let userAnswer = this.formulaUserAnswerSelector.innerHTML;

        //Check the user's answer and change styles based on correctness
        if (userAnswer == this.getFormattedIon().innerHTML) {
            this.formulaUserAnswerSelector.style.backgroundColor = 'lightgreen';
            this.formulaDisplayAnswerSelector.style.color = 'green';
        } else {
            this.formulaUserAnswerSelector.style.backgroundColor = 'yellow';
            this.formulaDisplayAnswerSelector.style.color = 'red';
        }
    }

    checkIonName() {
        // Generate the name of the ion
        let answer = this.getName();

        // Display the answer to the user
        this.nameDisplayAnswerSelector.innerHTML = "";
        this.nameDisplayAnswerSelector.append(answer);

        // Remove whitespace and convert input ion name to lower case
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

    // getPlainFormula() {
    //     if (this.isPolyatomic == true) {
    //         let plainFormula = "";
    //         for (let char of this.symbol) {
    //             if (Number.isInteger(parseInt(char)) == false) {
    //                 plainFormula += char;
    //             } else {
    //                 plainFormula += `/${char}`
    //             }
    //         }
    //         return `${plainFormula}^${this.charge}`
    //     } else {
    //         return `${this.symbol}^${this.charge}`
    //     }
    // }
}