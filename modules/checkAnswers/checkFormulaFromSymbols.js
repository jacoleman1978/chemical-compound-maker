import data from "../data.js";
import domSelectors from "../eventListeners/domSelectors.js";

const checkFormulaFromSymbols = () => {
    let plainAnswer = data.compoundFromSymbols.getPlainFormula();

    domSelectors.displayFormulaCompoundAnswer.innerHTML = "";
    domSelectors.displayFormulaCompoundAnswer.append(plainAnswer);
    
    let userAnswer = domSelectors.formulaCompoundAnswer.value.trim();


    if (userAnswer === plainAnswer) {
        domSelectors.formulaCompoundAnswer.style.backgroundColor = 'lightgreen';
        domSelectors.displayFormulaCompoundAnswer.style.color = 'green';
    } else {
        domSelectors.formulaCompoundAnswer.style.backgroundColor = 'yellow';
        domSelectors.displayFormulaCompoundAnswer.style.color = 'red';
    }
}

export default checkFormulaFromSymbols;