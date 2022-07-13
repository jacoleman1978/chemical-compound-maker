import domSelectors from "./modules/domSelectors.js";
import getCationList from "./modules/getCationList.js";
import getAnionList from "./modules/getAnionList.js";
import makeCompound from "./modules/makeCompound.js";
import data from "./modules/data.js";
import checkCompoundName from "./modules/checkCompoundName.js";
import randomIon from "./modules/randomIon.js";
import checkIonName from "./modules/checkIonName.js";

const main = () => {
    makeCompound('name');

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
            data.nameTheIon = randomIon();
        })
    }

    const ionSymbolRadios = document.querySelectorAll('.ion-symbol-option');
    for (let radioBtn of ionSymbolRadios) {
        if (radioBtn.checked == true) {
            data.ionType = radioBtn.value;
            data.nameTheIon = randomIon();
            domSelectors.ionSymbol.append(data.nameTheIon.getFormattedIon());
        }
    }
    for (let radioBtn of ionSymbolRadios) {
        radioBtn.addEventListener('click', () => {
            if (radioBtn.checked == true) {
                data.ionType = radioBtn.value;
                domSelectors.ionSymbol.innerHTML = "";
                data.nameTheIon = randomIon();
                domSelectors.ionSymbol.append(data.nameTheIon.getFormattedIon());
            }
        })
    }

    domSelectors.checkIonNameBtn.addEventListener('click', (e) => {
        e.preventDefault();
        domSelectors.nameIonAnswer.innerHTML = "";

        checkIonName();
    })
}

main();