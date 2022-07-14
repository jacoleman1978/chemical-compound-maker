import domSelectors from "./domSelectors.js";
import resetFormulaFromName from "../resetSection/resetFormulaFromName.js";
import checkFormulaFromName from "../checkAnswers/checkFormulaFromName.js";


domSelectors.newFormulaFromNameBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetFormulaFromName();
})

domSelectors.checkFormulaFromNameBtn.addEventListener('click', (e) => {
    e.preventDefault();
    domSelectors.formulaFromNameAnswer.innerHTML = "";
    checkFormulaFromName();
})