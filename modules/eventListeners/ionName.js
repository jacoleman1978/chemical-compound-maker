import domSelectors from "../eventListeners/domSelectors.js";
import resetNameIon from "../resetSection/resetNameIon.js";
import checkIonName from "../checkAnswers/checkIonName.js";
import data from "../displays/data.js";

domSelectors.newCationSymbol.addEventListener('click', (e) => {
    e.preventDefault();
    resetNameIon('cation');
})

domSelectors.newAnionSymbol.addEventListener('click', (e) => {
    e.preventDefault();
    resetNameIon('anion');
})

domSelectors.newRandomIonSymbol.addEventListener('click', (e) => {
    e.preventDefault();
    resetNameIon('both');
})

domSelectors.checkIonNameBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //domSelectors.nameIonAnswer.innerHTML = "";
    //checkIonName();
    data.nameTheIon.checkIonName();
})