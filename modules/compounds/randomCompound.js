import domSelectors from "../eventListeners/domSelectors.js";
import data from "../displays/data.js";
import randomIon from "../ions/randomIon.js";
import Compound from "./compound.js";

const randomCompound = (compoundType) => {
    // Generate random cation and anion
    let cation = randomIon('cation');
    let anion = randomIon('anion');
    
    // If 'symbol', generate and store a new compound object and display the ions in the "Compounds from Symbols" display
    if (compoundType == 'symbol') {
        data.compoundFromSymbols = new Compound(cation, anion, domSelectors.displayFormulaCompoundAnswer, domSelectors.formulaCompoundAnswer, domSelectors.displayNameCompoundAnswer, domSelectors.nameCompoundAnswer);
        domSelectors.compoundCationSymbol.append(cation.getFormattedIon());
        domSelectors.compoundAnionSymbol.append(anion.getFormattedIon());

    // If 'name', generate and store a new compound object and display the formula in the "Name from Formula" display
    } else if (compoundType == 'name') {
        data.compoundNameFromFormula = new Compound(cation, anion, "", "",domSelectors.displayNameFromFormulaAnswer, domSelectors.nameFromFormulaAnswer);
        data.compoundNameFromFormula.displayFormula('#name-from-formula');

    // If 'formula', generate and store a new compound object and display the formula in the "Formula from Name" display
    } else if (compoundType == 'formula') {
        data.compoundFormulaFromName = new Compound(cation, anion, domSelectors.displayFormulaFromNameAnswer, domSelectors.formulaFromNameAnswer, "", "");
        let name = data.compoundFormulaFromName.getName();
        domSelectors.formulaFromName.append(name);
    } 
}

export default randomCompound;