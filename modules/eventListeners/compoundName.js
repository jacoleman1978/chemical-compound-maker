import domSelectors from "./domSelectors.js";
import resetNameCompound from "../resetSection/resetNameCompound.js";
import checkNameFromSymbols from "../checkAnswers/checkNameFromSymbols.js";
import checkFormulaFromSymbols from "../checkAnswers/checkFormulaFromSymbols.js";


domSelectors.newCompoundFormulaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetNameCompound();
})

domSelectors.checkCompoundFromSymbolsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    domSelectors.nameCompoundAnswer.innerHTML = "";
    domSelectors.formulaCompoundAnswer.innerHTML = "";
    checkNameFromSymbols();
    checkFormulaFromSymbols();
})