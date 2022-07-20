import domSelectors from "../eventListeners/domSelectors.js";
import randomCompound from "../compounds/randomCompound.js";

// Clear all displayed data and styling in the 'Compound from Symbols' section
const resetNameCompound = () => {
    domSelectors.compoundCationSymbol.innerHTML = "";
    domSelectors.compoundAnionSymbol.innerHTML = "";
    domSelectors.displayNameCompoundAnswer.innerHTML = "";
    domSelectors.nameCompoundAnswer.style.backgroundColor = "";
    domSelectors.nameCompoundAnswer.value = "";
    domSelectors.displayFormulaCompoundAnswer.innerHTML = "";
    domSelectors.formulaCompoundAnswer.style.backgroundColor = "";
    domSelectors.formulaCompoundAnswer.innerHTML = "";
    randomCompound('symbol');
}

export default resetNameCompound;