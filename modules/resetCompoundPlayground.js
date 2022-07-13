import domSelectors from "./domSelectors.js";
import data from "./data.js";
import randomIon from "./randomIon.js";

const resetCompoundPlayground = (ionType) => {
    domSelectors.formulaAnswer.innerHTML = "";
    domSelectors.displayFormula.innerHTML = "";
    domSelectors.formulaAnswer.style.backgroundColor = "";
    domSelectors.formulaAnswer.value = "";
}

export default resetCompoundPlayground;