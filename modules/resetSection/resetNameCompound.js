import domSelectors from "../eventListeners/domSelectors.js";
import randomCompound from "../compounds/randomCompound.js";

const resetNameCompound = () => {
    domSelectors.compoundCationSymbol.innerHTML = "";
    domSelectors.compoundAnionSymbol.innerHTML = "";
    domSelectors.displayNameCompoundAnswer.innerHTML = "";
    domSelectors.nameCompoundAnswer.style.backgroundColor = "";
    domSelectors.nameCompoundAnswer.value = "";
    domSelectors.displayFormulaCompoundAnswer.innerHTML = "";
    domSelectors.formulaCompoundAnswer.style.backgroundColor = "";
    domSelectors.formulaCompoundAnswer.value = "";
    randomCompound('symbol');
}

export default resetNameCompound;