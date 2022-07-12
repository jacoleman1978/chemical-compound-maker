import domSelectors from "./modules/dom-selectors.js";
import cationOptions from "./modules/cation-options.js";
import anionOptions from "./modules/anion-options.js";
import makeCompound from "./modules/make-compound.js";
import data from "./modules/data.js";

const main = () => {

    domSelectors.cationDropdown.addEventListener("change", (e) => {
        domSelectors.cationDisplay.innerHTML = "";

        domSelectors.displayFormula.innerHTML = "";

        domSelectors.displayName.innerHTML = "";

        domSelectors.cationDisplay.innerHTML = "";

        let formattedIon = data.availableCations[e.target.value].getFormattedIon();
        domSelectors.cationDisplay.append(formattedIon);
    })

    domSelectors.anionDropdown.addEventListener("change", (e) => {
        domSelectors.anionDisplay.innerHTML = "";

        domSelectors.displayFormula.innerHTML = "";

        domSelectors.displayName.innerHTML = "";
        
        domSelectors.anionDisplay.innerHTML = "";

        let formattedIon = data.availableAnions[e.target.value].getFormattedIon();
        domSelectors.anionDisplay.append(formattedIon);
    });

    domSelectors.displayFormulaBtn.addEventListener('click', (e) => {
        e.preventDefault();

        makeCompound();
    })
    
    makeCompound();

    const types = document.querySelectorAll('.types')
    for (let type of types) {
        type.addEventListener('click', () => {
            domSelectors.cationDisplay.innerHTML = "";

            domSelectors.anionDisplay.innerHTML = "";

            domSelectors.displayFormula.innerHTML = "";

            domSelectors.displayName.innerHTML = "";

            data.availableCations = cationOptions();
            data.availableAnions = anionOptions();
        })
    }


}

main();