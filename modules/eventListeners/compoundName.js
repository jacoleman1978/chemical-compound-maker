import domSelectors from "./domSelectors.js";
import resetNameCompound from "../resetSection/resetNameCompound.js";
import checkNameFromSymbols from "../checkAnswers/checkNameFromSymbols.js";


domSelectors.newCompoundFormulaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetNameCompound();
})

domSelectors.checkCompoundFromSymbolsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    domSelectors.nameCompoundAnswer.innerHTML = "";
    checkNameFromSymbols();
})