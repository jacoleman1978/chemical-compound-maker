import domSelectors from "../eventListeners/domSelectors.js";

const resetCompoundPlayground = () => {
    domSelectors.playgroundFormulaAnswer.innerHTML = "";
    domSelectors.displayPlaygroundFormula.innerHTML = "";
    domSelectors.playgroundFormulaAnswer.style.backgroundColor = "";
    domSelectors.playgroundFormulaAnswer.value = "";
}

export default resetCompoundPlayground;