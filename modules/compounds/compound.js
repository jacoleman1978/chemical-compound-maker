import domSelectors from "../eventListeners/domSelectors.js";

// Used for ionic and acidic compounds
// cation and anion are Ion class objects
export default class Compound {
    constructor(cation, anion, formulaDisplayAnswerSelector, formulaUserAnswerSelector, nameDisplayAnswerSelector, nameUserAnswerSelector) {
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
        this.formulaDisplayAnswerSelector = formulaDisplayAnswerSelector;
        this.formulaUserAnswerSelector = formulaUserAnswerSelector;
        this.nameDisplayAnswerSelector = nameDisplayAnswerSelector;
        this.nameUserAnswerSelector = nameUserAnswerSelector;
    }

    getCationObject() {
        return this.cation
    }

    getAnionObject() {
        return this.anion
    }

    getName() {
        // If an acid, convert ion names to acid names
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
        // Determine the max and min magnitudes of charges of cation and anion
        let catCharge = this.catChargeMagnitude;
        let anCharge = this.anChargeMagnitude;
        let min = Math.min(catCharge, anCharge);
        let max = Math.max(catCharge, anCharge);

        // If the bigger charge is evenly divisiby by the smaller charge, the subscripts are one and a multiple of the smaller charge that equals the larger charge
        if (max % min == 0) {
            this.cationSubscript = max / catCharge;
            this.anionSubscript = max / anCharge;

        // Increment the smaller charge by 1, continuing to do so until the tempMin and tempMax are equal. This finds the least common multiple.
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

            // The subscripts are the tempMax (aka lowest common multiple) divided by the respective charges
            this.cationSubscript = tempMax / catCharge;
            this.anionSubscript = tempMax / anCharge;
        }
    }

    displayFormula(htmlId = "") {
        // Run the find subscripts algorithm first
        this.findSubscripts();
        let formula = ""

        // If an htmlId is given use that to select an eletment, otherwise create an empty div
        if (htmlId == "") {
            formula = document.createElement('div');
        } else {
            formula = document.querySelector(htmlId);
        }

        // If the cation is polyatomic with a subscript greater than one, put the cation in parentheses
        if (this.cationSubscript > 1 && this.catIsPoly) {
            formula.append('(');
        }

        // Go through each character of the cation...only applies to polyatomic cations, appending alpha characters or creating sub elements with numbers and appending
        for (let char of this.catSymbol) {
            if (Number.isInteger(parseInt(char)) == false) {
                formula.append(char);
            } else {
                let subscript = document.createElement('sub');
                subscript.textContent = char;
                formula.append(subscript);
            }
        }

        // Close parenthesis around cation if needed
        if (this.cationSubscript > 1 && this.catIsPoly) {
            formula.append(')');
        }
        
        // Append a subscript for numbers greater than 1
        if (this.cationSubscript > 1) {
            let cationSubElement = document.createElement('sub');
            cationSubElement.innerHTML = this.cationSubscript;
            formula.append(cationSubElement);
        }

        // If the anion is polyatomic with a subscript greater than one, put the anion in parentheses
        if (this.anionSubscript > 1 && this.anIsPoly == true) {
            formula.append('(');
        }

        // Go through each character of the anion...only applies to polyatomic anions, appending alpha characters or creating sub elements with numbers and appending
        for (let char of this.anSymbol) {
            if (Number.isInteger(parseInt(char)) == false) {
                formula.append(char);
            } else {
                let subscript = document.createElement('sub');
                subscript.textContent = char;
                formula.append(subscript);
            }
        }

        // Close parenthesis around anion if needed
        if (this.anionSubscript > 1 && this.anIsPoly == true) {
            formula.append(')');
        }

        // Append a subscript for numbers greater than 1
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

    getPlainFormula() {
        // Run the find subscripts algorithm first
        this.findSubscripts();
        let formula = ""

        // If the cation is polyatomic with a subscript greater than one, put the cation in parentheses
        if (this.cationSubscript > 1 && this.catIsPoly) {
            formula += '(';
        }

        // Go through each character of the cation...only applies to polyatomic cations, appending alpha characters or creating sub elements with numbers and appending
        for (let char of this.catSymbol) {
            if (Number.isInteger(parseInt(char)) == false) {
                formula += char;
            } else {
                formula += `/${subscript}`;
            }
        }

        // Close parenthesis around cation if needed
        if (this.cationSubscript > 1 && this.catIsPoly) {
            formula += ')';
        }
        
        // Append a subscript for numbers greater than 1
        if (this.cationSubscript > 1) {
            formula += `/${cationSubElement}`;
        }

        // If the anion is polyatomic with a subscript greater than one, put the anion in parentheses
        if (this.anionSubscript > 1 && this.anIsPoly == true) {
            formula += '(';
        }

        // Go through each character of the anion...only applies to polyatomic anions, appending alpha characters or creating sub elements with numbers and appending
        for (let char of this.anSymbol) {
            if (Number.isInteger(parseInt(char)) == false) {
                formula += char ;
            } else {
                formula += `/${subscript}`;
            }
        }

        // Close parenthesis around anion if needed
        if (this.anionSubscript > 1 && this.anIsPoly == true) {
            formula += ')';
        }

        // Append a subscript for numbers greater than 1
        if (this.anionSubscript > 1) {
            formula += `/${anionSubElement}`;
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
        if (userAnswer == this.displayFormula("").innerHTML) {
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

        // Remove whitespace
        let userAnswer = this.nameUserAnswerSelector.value.trim();

        // Convert first letters that are uppercase to lowercase
        let spacePos = userAnswer.search(" ");

        userAnswer = userAnswer.slice(0,1).toLowerCase() + userAnswer.slice(1, spacePos + 1) + userAnswer.slice(spacePos + 1, spacePos + 2).toLowerCase() + userAnswer.slice(spacePos + 2);
        console.log(userAnswer)

        // Check the user's answer and change styles based on correctness
        if (userAnswer === answer || userAnswer === this.getPlainFormula()) {
            this.nameUserAnswerSelector.style.backgroundColor = 'lightgreen';
            this.nameDisplayAnswerSelector.style.color = 'green';
        } else {
            this.nameUserAnswerSelector.style.backgroundColor = 'yellow';
            this.nameDisplayAnswerSelector.style.color = 'red';
        }
    }
}