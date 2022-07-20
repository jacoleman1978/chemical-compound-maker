import Compound from "./compound.js";
import domSelectors from "../eventListeners/domSelectors.js";
import data from "../displays/data.js";

const makeCompound = () => {
    // If the type of selected ions in the compound playground are defined (not undefined), use the selected ions to make a new Compound object and store it in the data object
    if (typeof data.cationNames[domSelectors.cationDropdown.value] !== 'undefined' && typeof data.anionNames[domSelectors.anionDropdown.value] !== 'undefined') {
        const cation = data.cationNames[domSelectors.cationDropdown.value];
        const anion = data.anionNames[domSelectors.anionDropdown.value];
        data.playgroundCompound = new Compound(cation, anion, domSelectors.displayPlaygroundFormula, domSelectors.playgroundFormulaAnswer);
    }
}

export default makeCompound