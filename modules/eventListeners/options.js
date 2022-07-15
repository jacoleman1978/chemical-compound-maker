import domSelectors from "../eventListeners/domSelectors.js";
import displaySections from "../displays/displaySections.js";
import ionTypeChecked from "../displays/ionTypeChecked.js";
import randomMolecular from "../compounds/randomMolecular.js";

domSelectors.includeIonic.addEventListener('click', (e) => {
    displaySections(e.target.value);
})

domSelectors.includeAcids.addEventListener('click', (e) => {
    displaySections(e.target.value);
})

domSelectors.includeMolecular.addEventListener('click', (e) => {
    displaySections(e.target.value);
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
