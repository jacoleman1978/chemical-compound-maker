import domSelectors from "../eventListeners/domSelectors.js";
import data from "../displays/data.js";
import randomIon from "../ions/randomIon.js";

const resetFormulaIon = (ionType) => {
    domSelectors.ionName.innerHTML = "";
    domSelectors.displayFormulaIonAnswer.innerHTML = "";
    domSelectors.formulaIonAnswer.style.backgroundColor = "";
    domSelectors.formulaIonAnswer.value = "";
    data.ionFormula = randomIon(ionType);
    domSelectors.ionName.append(data.ionFormula.getName());
}

export default resetFormulaIon;