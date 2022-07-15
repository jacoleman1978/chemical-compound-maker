import domSelectors from "../eventListeners/domSelectors.js";
import randomCompound from "../compounds/randomCompound.js";
import randomMolecular from "../compounds/randomMolecular.js";

const resetNameFromFormula = () => {
    domSelectors.nameFromFormula.innerHTML = "";
    domSelectors.displayNameFromFormulaAnswer.innerHTML = "";
    domSelectors.nameFromFormulaAnswer.style.backgroundColor = "";
    domSelectors.nameFromFormulaAnswer.value = "";

    if (domSelectors.includeMolecular.checked == true) {
        randomMolecular('name');
    } else {
        randomCompound('name');
    }
}

export default resetNameFromFormula;