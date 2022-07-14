import domSelectors from "../eventListeners/domSelectors.js";
import data from "../data.js";
import resetCompoundPlayground from "../resetSection/resetCompoundPlayground.js";
import makeCompound from "../compounds/makeCompound.js";
import checkCompoundFormula from "../checkAnswers/checkCompoundFormula.js";

domSelectors.cationDropdown.addEventListener("change", (e) => {
    domSelectors.cationDisplay.innerHTML = "";

    resetCompoundPlayground();

    let formattedIon = data.cationNames[e.target.value].getFormattedIon();
    domSelectors.cationDisplay.append(formattedIon);
})

domSelectors.anionDropdown.addEventListener("change", (e) => {
    domSelectors.anionDisplay.innerHTML = "";

    resetCompoundPlayground();

    let formattedIon = data.anionNames[e.target.value].getFormattedIon();
    domSelectors.anionDisplay.append(formattedIon);
});

domSelectors.displayFormulaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    domSelectors.displayFormula.innerHTML = "";

    makeCompound('name');

    checkCompoundFormula();
})