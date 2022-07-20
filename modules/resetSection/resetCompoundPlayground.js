import domSelectors from "../eventListeners/domSelectors.js";

// Clear all displayed data and styling in the 'Compound Playground' section
const resetCompoundPlayground = () => {
    domSelectors.playgroundFormulaAnswer.innerHTML = "";
    domSelectors.displayPlaygroundFormula.innerHTML = "";
    domSelectors.playgroundFormulaAnswer.style.backgroundColor = "";
    domSelectors.playgroundFormulaAnswer.value = "";
}

export default resetCompoundPlayground;