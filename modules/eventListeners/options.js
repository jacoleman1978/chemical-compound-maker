import domSelectors from "../eventListeners/domSelectors.js";
import displaySections from "../displays/displaySections.js";
import ionTypeChecked from "../displays/ionTypeChecked.js";

// 'Ionic' radio btn in the 'Included Compound Types' section
domSelectors.includeIonic.addEventListener('click', (e) => {
    displaySections(e.target.value);
})

// 'Acids' radio btn in the 'Included Compound Types' section
domSelectors.includeAcids.addEventListener('click', (e) => {
    displaySections(e.target.value);
})

// 'Molecular' radio btn in the 'Included Compound Types' section
domSelectors.includeMolecular.addEventListener('click', (e) => {
    displaySections(e.target.value);
})

// 'Main group' checkbox in the 'Included Ion Types' section
domSelectors.mgIons.addEventListener('click', (e) => {
    ionTypeChecked(e);
})

// 'Transition Metals' checkbox in the 'Included Ion Types' section
domSelectors.tsIons.addEventListener('click', (e) => {
    ionTypeChecked(e);
})

// 'Polyatomic' checkbox in the 'Included Ion Types' section
domSelectors.polyIons.addEventListener('click', (e) => {
    ionTypeChecked(e);
})
