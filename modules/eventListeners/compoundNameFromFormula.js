import domSelectors from "./domSelectors.js";
import resetNameFromFormula from "../resetSection/resetNameFromFormula.js";
import data from "../displays/data.js";


domSelectors.newNameFromFormulaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetNameFromFormula();
})

domSelectors.checkNameFromFormulaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //domSelectors.nameFromFormulaAnswer.innerHTML = "";
    //checkNameFromFormula();

    if (domSelectors.includeMolecular.checked == true) {
        data.molecNameFromFormula.checkCompoundName();
    } else {
        data.compoundNameFromFormula.checkCompoundName();
    }
})