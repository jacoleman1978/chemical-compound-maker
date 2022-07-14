import domSelectors from "../eventListeners/domSelectors.js";
import data from "../displays/data.js";
import getCationList from "../ions/getCationList.js";
import getAnionList from "../ions/getAnionList.js";
import displaySections from "../displays/displaySections.js";
import resetNameFromFormula from '../resetSection/resetNameFromFormula.js';
import resetFormulaFromName from '../resetSection/resetFormulaFromName.js';
import resetNameIon from "../resetSection/resetNameIon.js";
import resetFormulaIon from "../resetSection/resetFormulaIon.js";
import ionTypeChecked from "../displays/ionTypeChecked.js";

domSelectors.includeIonic.addEventListener('click', (e) => {
    displaySections(e.target.value);
})

domSelectors.includeAcids.addEventListener('click', (e) => {
    displaySections(e.target.value);
})

domSelectors.includeMolecular.addEventListener('click', () => {
    //TODO
})

// Listen for which ion types were selected
domSelectors.mgIons.addEventListener('click', (e) => {
    ionTypeChecked(e);
})

domSelectors.tsIons.addEventListener('click', (e) => {
    ionTypeChecked(e);
})

domSelectors.polyIons.addEventListener('click', (e) => {
    ionTypeChecked(e);
})
