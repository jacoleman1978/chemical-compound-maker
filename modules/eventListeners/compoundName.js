import data from "../displays/data.js";
import domSelectors from "./domSelectors.js";
import resetNameCompound from "../resetSection/resetNameCompound.js";

domSelectors.newCompoundFormulaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetNameCompound();
})

domSelectors.checkCompoundFromSymbolsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //domSelectors.nameCompoundAnswer.innerHTML = "";

    //checkNameFromSymbols();
    data.compoundFromSymbols.checkCompoundName();
    //checkCompoundFormula(data.compoundFromSymbols.displayFormula(""), domSelectors.displayFormulaCompoundAnswer, domSelectors.formulaCompoundAnswer);
    data.compoundFromSymbols.checkCompoundFormula();
})