import domSelectors from "../eventListeners/domSelectors.js";
import data from "../displays/data.js";
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
    } else if (compoundType == 'formula') {
        data.compoundFormulaFromName = new Compound(cation, anion);
        let name = data.compoundFormulaFromName.getName();
        domSelectors.formulaFromName.append(name);
    } 
}

export default randomCompound;