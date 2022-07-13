import Compound from "./compound.js";
import domSelectors from "./domSelectors.js";
import data from "./data.js";

const makeCompound = (displayType) => {
    if (displayType === 'name') {
        if (typeof data.cationNames[domSelectors.cationDropdown.value] !== 'undefined' && typeof data.anionNames[domSelectors.anionDropdown.value] !== 'undefined') {
            const cation = data.cationNames[domSelectors.cationDropdown.value];
            const anion = data.anionNames[domSelectors.anionDropdown.value];
            data.playgroundCompound = new Compound(cation, anion);
        }
    } else if (displayType === 'symbol') {
        if (typeof data.cationSymbols[domSelectors.cationDropdown.value] !== 'undefined' && typeof data.anionSymbols[domSelectors.anionDropdown.value] !== 'undefined') {
            const cation = data.cationSymbols[domSelectors.cationDropdown.value];
            const anion = data.anionSymbols[domSelectors.anionDropdown.value];
            data.playgroundCompound = new Compound(cation, anion);
        }
    }
}

export default makeCompound