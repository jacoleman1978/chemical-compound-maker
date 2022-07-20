import data from "../displays/data.js";
import domSelectors from "./domSelectors.js";
import resetFormulaFromName from "../resetSection/resetFormulaFromName.js";

// Listen for the 'New' button for the 'Formula from Name' section
domSelectors.newFormulaFromNameBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetFormulaFromName();
})

// Listen for the 'Check Answer' button for the 'Formula from Name' section
domSelectors.checkFormulaFromNameBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Check if the section is being used for ionic or molecular compounds
    if (domSelectors.includeMolecular.checked == true) {
        data.molecFormulaFromName.checkCompoundFormula();
    } else {
        data.compoundFormulaFromName.checkCompoundFormula();
    }
})