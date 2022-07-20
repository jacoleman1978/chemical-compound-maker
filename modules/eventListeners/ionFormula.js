import domSelectors from "../eventListeners/domSelectors.js";
import resetFormulaIon from "../resetSection/resetFormulaIon.js";
import data from "../displays/data.js";

domSelectors.newCationName.addEventListener('click', (e) => {
    e.preventDefault();
    resetFormulaIon('cation');
})

domSelectors.newAnionName.addEventListener('click', (e) => {
    e.preventDefault();
    resetFormulaIon('anion');
})

domSelectors.newRandomIonName.addEventListener('click', (e) => {
    e.preventDefault();
    resetFormulaIon('both');
})

domSelectors.checkIonFormulaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //domSelectors.nameIonAnswer.innerHTML = "";

    //checkIonFormula();
    data.ionFormula.checkIonFormula();
})