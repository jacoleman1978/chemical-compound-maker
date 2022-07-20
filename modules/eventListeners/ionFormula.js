import domSelectors from "../eventListeners/domSelectors.js";
import resetFormulaIon from "../resetSection/resetFormulaIon.js";
import data from "../displays/data.js";

// 'New Cation' btn in the 'Ion Formula' section
domSelectors.newCationName.addEventListener('click', (e) => {
    e.preventDefault();
    resetFormulaIon('cation');
})

// 'New Anion' btn in the 'Ion Formula' section
domSelectors.newAnionName.addEventListener('click', (e) => {
    e.preventDefault();
    resetFormulaIon('anion');
})

// 'New Random Ion' btn in the 'Ion Formula' section
domSelectors.newRandomIonName.addEventListener('click', (e) => {
    e.preventDefault();
    resetFormulaIon('both');
})

// 'Check Answer' button in the 'Ion Formula' section
domSelectors.checkIonFormulaBtn.addEventListener('click', (e) => {
    e.preventDefault();

    data.ionFormula.checkIonFormula();
})