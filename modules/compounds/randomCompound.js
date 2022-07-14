import domSelectors from "../eventListeners/domSelectors.js";
import data from "../data.js";
import randomIon from "../ions/randomIon.js";
import Compound from "./compound.js";

const randomCompound = (compoundType) => {
    let cation = randomIon('cation');
    let anion = randomIon('anion');
    data.compoundFromSymbols = new Compound(cation, anion);

    if (compoundType == 'symbol') {
        domSelectors.compoundCationSymbol.append(cation.getFormattedIon());
        domSelectors.compoundAnionSymbol.append(anion.getFormattedIon());
    }
}

export default randomCompound;