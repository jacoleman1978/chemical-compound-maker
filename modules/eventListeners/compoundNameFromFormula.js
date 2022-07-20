import domSelectors from "./domSelectors.js";
import resetNameFromFormula from "../resetSection/resetNameFromFormula.js";
import data from "../displays/data.js";

// Listen for the 'New' button for the 'Name from Formula' section
domSelectors.newNameFromFormulaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetNameFromFormula();
})

// Listen for the 'Check Answer' button for the 'Name from Formula' section
domSelectors.checkNameFromFormulaBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Determine whether to check answer based on ionic or molecular compound rules
    if (domSelectors.includeMolecular.checked == true) {
        data.molecNameFromFormula.checkCompoundName();
    } else {
        data.compoundNameFromFormula.checkCompoundName();
    }
})