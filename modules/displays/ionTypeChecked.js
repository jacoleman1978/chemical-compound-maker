import data from "./data.js";
import getCationList from "../ions/getCationList.js";
import getAnionList from "../ions/getAnionList.js";
import resetNameFromFormula from "../resetSection/resetNameFromFormula.js";
import resetFormulaFromName from "../resetSection/resetFormulaFromName.js";
import resetNameIon from "../resetSection/resetNameIon.js";
import resetFormulaIon from "../resetSection/resetFormulaIon.js";
import domSelectors from "../eventListeners/domSelectors.js";
import resetNameCompound from "../resetSection/resetNameCompound.js";

const ionTypeChecked = (event) => {
    let isMGIonsChecked = domSelectors.mgIons.checked;
    let isTMIonsChecked = domSelectors.tsIons.checked;
    let isPolyIonsChecked = domSelectors.polyIons.checked;

    // If any of the boxes are checked for 'Ion Types', regenerate the ion lists and reset each of the sections
    if (isMGIonsChecked == true || isTMIonsChecked == true || isPolyIonsChecked == true) {
        data.cationNames = getCationList('name', true);
        data.anionNames = getAnionList('name', true);
        data.cationSymbols = getCationList('symbol', false);
        data.anionSymbols = getAnionList('symbol', false);
    
        resetNameFromFormula();
        resetFormulaFromName();
        resetNameIon('both');
        resetFormulaIon('both');
        resetNameCompound();

    // At least one of the boxes must be checked
    } else {
        event.preventDefault();
        let htmlId = event.target.value;

        if (htmlId == 'main-group-ions') {
            domSelectors.mgIons.setAttribute('checked', true);
        } else if (htmlId == 'transition-metal-ions') {
            domSelectors.tsIons.setAttribute('checked', true);
        } else if (htmlId == 'polyatomic-ions') {
            domSelectors.polyIons.setAttribute('checked', true);
        }
    }
}

export default ionTypeChecked;