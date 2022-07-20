import data from "../displays/data.js";
import domSelectors from "./domSelectors.js";
import resetNameCompound from "../resetSection/resetNameCompound.js";

// Listen for the 'New' button for the 'Compound from Symbols' section
domSelectors.newCompoundFormulaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetNameCompound();
})

// Listen for the 'Check Answer' button for the 'Compound from Symbols' section
domSelectors.checkCompoundFromSymbolsBtn.addEventListener('click', (e) => {
    e.preventDefault();

    data.compoundFromSymbols.checkCompoundName();
    data.compoundFromSymbols.checkCompoundFormula();
})