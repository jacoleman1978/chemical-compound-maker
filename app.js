import domSelectors from "./modules/domSelectors.js";
import getCationList from "./modules/getCationList.js";
import getAnionList from "./modules/getAnionList.js";
import makeCompound from "./modules/makeCompound.js";
import data from "./modules/data.js";
import checkCompoundName from "./modules/checkCompoundName.js";

const main = () => {

    domSelectors.cationDropdown.addEventListener("change", (e) => {
        domSelectors.cationDisplay.innerHTML = "";

        domSelectors.displayFormula.innerHTML = "";

        domSelectors.displayName.innerHTML = "";

        domSelectors.cationDisplay.innerHTML = "";

        let formattedIon = data.cationNames[e.target.value].getFormattedIon();
        domSelectors.cationDisplay.append(formattedIon);
    })

    domSelectors.anionDropdown.addEventListener("change", (e) => {
        domSelectors.anionDisplay.innerHTML = "";

        domSelectors.displayFormula.innerHTML = "";

        domSelectors.displayName.innerHTML = "";
        
        domSelectors.anionDisplay.innerHTML = "";

        let formattedIon = data.anionNames[e.target.value].getFormattedIon();
        domSelectors.anionDisplay.append(formattedIon);
    });

    domSelectors.displayFormulaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        domSelectors.displayFormula.innerHTML = "";
        domSelectors.displayName.innerHTML = "";

        makeCompound('name');

        checkCompoundName();
    })
    
    makeCompound('name');

    const types = document.querySelectorAll('.types')
    for (let type of types) {
        type.addEventListener('click', () => {
            domSelectors.cationDisplay.innerHTML = "";

            domSelectors.anionDisplay.innerHTML = "";

            domSelectors.displayFormula.innerHTML = "";

            domSelectors.displayName.innerHTML = "";

            data.cationNames = getCationList('name');
            data.anionNames = getAnionList('name');
        })
    }
}

main();