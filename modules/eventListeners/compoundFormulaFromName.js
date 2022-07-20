import data from "../displays/data.js";
import domSelectors from "./domSelectors.js";
import resetFormulaFromName from "../resetSection/resetFormulaFromName.js";
import checkCompoundFormula from "../checkAnswers/checkCompoundFormula.js";


domSelectors.newFormulaFromNameBtn.addEventListener('click', (e) => {
    e.preventDefault();

    resetFormulaFromName();
})

domSelectors.checkFormulaFromNameBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //checkCompoundFormula(data.compoundFormulaFromName.displayFormula(""), domSelectors.displayFormulaFromNameAnswer, domSelectors.formulaFromNameAnswer);
    if (domSelectors.includeMolecular.checked == true) {
        data.molecFormulaFromName.checkCompoundFormula();
    } else {
        data.compoundFormulaFromName.checkCompoundFormula();
    }
})