import domSelectors from "./domSelectors.js";
import resetNameFromFormula from "../resetSection/resetNameFromFormula.js";
import checkNameFromFormula from "../checkAnswers/checkNameFromFormula.js";


domSelectors.newNameFromFormulaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetNameFromFormula();
})

domSelectors.checkNameFromFormulaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    domSelectors.nameFromFormulaAnswer.innerHTML = "";
    checkNameFromFormula();
})