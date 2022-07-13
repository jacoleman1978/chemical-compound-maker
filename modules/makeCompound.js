import Compound from "./compound.js";
import domSelectors from "./domSelectors.js";
import data from "./data.js";

const makeCompound = (displayType) => {
    if (displayType === 'name') {
        if (typeof data.cationNames[domSelectors.cationDropdown.value] !== 'undefined' && typeof data.anionNames[domSelectors.anionDropdown.value] !== 'undefined') {
            const cation = data.cationNames[domSelectors.cationDropdown.value];
            const anion = data.anionNames[domSelectors.anionDropdown.value];
            data.compoundName = new Compound(cation, anion);
            data.compoundName.displayFormula("#display-formula");
            data.compoundName.displayName("#display-name");
        }
    } else if (displayType === 'symbol') {
        if (typeof data.cationSymbols[domSelectors.cationDropdown.value] !== 'undefined' && typeof data.anionSymbols[domSelectors.anionDropdown.value] !== 'undefined') {
            const cation = data.cationSymbols[domSelectors.cationDropdown.value];
            const anion = data.anionSymbols[domSelectors.anionDropdown.value];
            const compound = new Compound(cation, anion);
            domSelectors.displayFormula.innerHTML = '';
            domSelectors.displayName = '';
        }
    }
}

export default makeCompound