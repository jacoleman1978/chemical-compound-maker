import domSelectors from "../eventListeners/domSelectors.js";
import resetNameIon from "../resetSection/resetNameIon.js";
import data from "../displays/data.js";

// 'New Cation' btn in the 'Name Ion' section
domSelectors.newCationSymbol.addEventListener('click', (e) => {
    e.preventDefault();
    resetNameIon('cation');
})

// 'New Anion' btn in the 'Name Ion' section
domSelectors.newAnionSymbol.addEventListener('click', (e) => {
    e.preventDefault();
    resetNameIon('anion');
})

// 'New Random Ion' btn in the 'Name Ion' section
domSelectors.newRandomIonSymbol.addEventListener('click', (e) => {
    e.preventDefault();
    resetNameIon('both');
})

// 'Check Answer' btn in the 'Name Ion' section
domSelectors.checkIonNameBtn.addEventListener('click', (e) => {
    e.preventDefault();

    data.nameTheIon.checkIonName();
})