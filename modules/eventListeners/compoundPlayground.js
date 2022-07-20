import domSelectors from "../eventListeners/domSelectors.js";
import data from "../displays/data.js";
import resetCompoundPlayground from "../resetSection/resetCompoundPlayground.js";
import makeCompound from "../compounds/makeCompound.js";

// Listen for the cation dropdown list in the 'Compound Playground' section
domSelectors.cationDropdown.addEventListener("change", (e) => {
    domSelectors.cationDisplay.innerHTML = "";

    resetCompoundPlayground();

    let formattedIon = data.cationNames[e.target.value].getFormattedIon();
    domSelectors.cationDisplay.append(formattedIon);
})

// Listen for the anion dropdown list in the 'Compound Playground' section
domSelectors.anionDropdown.addEventListener("change", (e) => {
    domSelectors.anionDisplay.innerHTML = "";

    resetCompoundPlayground();

    let formattedIon = data.anionNames[e.target.value].getFormattedIon();
    domSelectors.anionDisplay.append(formattedIon);
});

// Listen for the 'Check Answer' button in the 'Compound Playground' section
domSelectors.displayPlaygroundFormulaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    domSelectors.displayPlaygroundFormula.innerHTML = "";

    makeCompound();

    data.playgroundCompound.checkCompoundFormula();
})