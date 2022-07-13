import domSelectors from "./modules/domSelectors.js";
import getCationList from "./modules/getCationList.js";
import getAnionList from "./modules/getAnionList.js";
import makeCompound from "./modules/makeCompound.js";
import data from "./modules/data.js";
import checkCompoundName from "./modules/checkCompoundName.js";
import randomIon from "./modules/randomIon.js";
import checkIonName from "./modules/checkIonName.js";
import resetNameIon from "./modules/resetNameIon.js";
import checkIonFormula from "./modules/checkIonFormula.js";
import resetFormulaIon from "./modules/resetFormulaIon.js";

const main = () => {
    data.nameTheIon = randomIon('both');
    domSelectors.ionSymbol.append(data.nameTheIon.getFormattedIon());

    data.ionFormula = randomIon('both');
    domSelectors.ionName.append(data.ionFormula.getName());

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
    
    const types = document.querySelectorAll('.types')
    for (let type of types) {
        type.addEventListener('click', () => {
            domSelectors.cationDisplay.innerHTML = "";

            domSelectors.anionDisplay.innerHTML = "";

            domSelectors.displayFormula.innerHTML = "";

            domSelectors.displayName.innerHTML = "";

            data.cationNames = getCationList('name', true);
            data.anionNames = getAnionList('name', true);
            data.cationSymbols = getCationList('symbol', false);
            data.anionSymbols = getAnionList('symbol', false);
        })
    }

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
        domSelectors.nameIonAnswer.innerHTML = "";
        checkIonName();
    })

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
        domSelectors.nameIonAnswer.innerHTML = "";
        checkIonFormula();
    })
}

main();