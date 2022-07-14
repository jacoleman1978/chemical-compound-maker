import domSelectors from "../eventListeners/domSelectors.js";
import randomCompound from "../compounds/randomCompound.js";

const resetFormulaFromName = () => {
    domSelectors.formulaFromName.innerHTML = "";
    domSelectors.displayFormulaFromNameAnswer.innerHTML = "";
    domSelectors.formulaFromNameAnswer.style.backgroundColor = "";
    domSelectors.formulaFromNameAnswer.value = "";
    randomCompound('formula');
}

export default resetFormulaFromName;