import domSelectors from "../eventListeners/domSelectors.js";
import data from "../data.js";
import randomIon from "../ions/randomIon.js";
import Compound from "./compound.js";

const randomCompound = (compoundType) => {
    let cation = randomIon('cation');
    let anion = randomIon('anion');

    if (compoundType == 'symbol') {
        data.compoundFromSymbols = new Compound(cation, anion);
        domSelectors.compoundCationSymbol.append(cation.getFormattedIon());
        domSelectors.compoundAnionSymbol.append(anion.getFormattedIon());
    } else if (compoundType == 'name') {
        data.compoundNameFromFormula = new Compound(cation, anion);
        data.compoundNameFromFormula.displayFormula('#name-from-formula');
    }
}

export default randomCompound;