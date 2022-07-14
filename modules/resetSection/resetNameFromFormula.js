import domSelectors from "../eventListeners/domSelectors.js";
import randomCompound from "../compounds/randomCompound.js";

const resetNameFromFormula = () => {
    domSelectors.nameFromFormula.innerHTML = "";
    domSelectors.displayNameFromFormulaAnswer.innerHTML = "";
    domSelectors.nameFromFormulaAnswer.style.backgroundColor = "";
    domSelectors.nameFromFormulaAnswer.value = "";
    randomCompound('name');
}

export default resetNameFromFormula;