import domSelectors from "../eventListeners/domSelectors.js";

const resetCompoundPlayground = (ionType) => {
    domSelectors.formulaAnswer.innerHTML = "";
    domSelectors.displayFormula.innerHTML = "";
    domSelectors.formulaAnswer.style.backgroundColor = "";
    domSelectors.formulaAnswer.value = "";
}

export default resetCompoundPlayground;