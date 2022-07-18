import domSelectors from "../eventListeners/domSelectors.js";
import randomCompound from "../compounds/randomCompound.js";
import randomMolecular from "../compounds/randomMolecular.js";

const resetFormulaFromName = () => {
    domSelectors.formulaFromName.innerHTML = "";
    domSelectors.displayFormulaFromNameAnswer.innerHTML = "";
    domSelectors.formulaFromNameAnswer.innerHTML = "";
    domSelectors.formulaFromNameAnswer.style.backgroundColor = "";
    domSelectors.formulaFromNameAnswer.value = "";

    if (domSelectors.includeMolecular.checked == true) {
        randomMolecular('formula');
    } else {
        randomCompound('formula');
    }
}

export default resetFormulaFromName;