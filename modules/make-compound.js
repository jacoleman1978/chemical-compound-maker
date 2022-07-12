import Compound from "./compound.js";
import domSelectors from "./dom-selectors.js";
import data from "./data.js";

const makeCompound = () => {
    if (typeof data.availableCations[domSelectors.cationDropdown.value] !== 'undefined' && typeof data.availableAnions[domSelectors.anionDropdown.value] !== 'undefined') {
        const cation = data.availableCations[domSelectors.cationDropdown.value];
        const anion = data.availableAnions[domSelectors.anionDropdown.value];
        const compound = new Compound(cation, anion);
        compound.displayFormula("#display-formula");
        compound.displayName("#display-name");
    }
}

export default makeCompound