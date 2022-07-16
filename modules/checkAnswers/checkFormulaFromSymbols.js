import data from "../displays/data.js";
import domSelectors from "../eventListeners/domSelectors.js";

const checkFormulaFromSymbols = () => {
    //let plainAnswer = data.compoundFromSymbols.getPlainFormula();
    let plainAnswer = data.compoundFromSymbols.displayFormula("");

    domSelectors.displayFormulaCompoundAnswer.innerHTML = "";
    domSelectors.displayFormulaCompoundAnswer.append(plainAnswer);
    
    //let userAnswer = domSelectors.formulaCompoundAnswer.value.trim();
    let userAnswer = domSelectors.formulaCompoundAnswer.innerHTML;

    if (userAnswer === plainAnswer.innerHTML) {
        domSelectors.formulaCompoundAnswer.style.backgroundColor = 'lightgreen';
        domSelectors.displayFormulaCompoundAnswer.style.color = 'green';
    } else {
        domSelectors.formulaCompoundAnswer.style.backgroundColor = 'yellow';
        domSelectors.displayFormulaCompoundAnswer.style.color = 'red';
    }
}

export default checkFormulaFromSymbols;