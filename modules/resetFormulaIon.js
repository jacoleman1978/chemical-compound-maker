import domSelectors from "./domSelectors.js";
import data from "./data.js";
import randomIon from "./randomIon.js";

const resetFormulaIon = (ionType) => {
    domSelectors.ionName.innerHTML = "";
    domSelectors.displayFormulaIonAnswer.innerHTML = "";
    domSelectors.formulaIonAnswer.style.backgroundColor = "";
    domSelectors.formulaIonAnswer.value = "";
    data.ionFormula = randomIon(ionType);
    domSelectors.ionName.append(data.ionFormula.getName());
}

export default resetFormulaIon;