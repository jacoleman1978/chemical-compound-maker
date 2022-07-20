import domSelectors from "../eventListeners/domSelectors.js";
import data from "./data.js";
import getCationList from "../ions/getCationList.js";
import getAnionList from "../ions/getAnionList.js";
import resetNameFromFormula from "../resetSection/resetNameFromFormula.js";
import resetFormulaFromName from "../resetSection/resetFormulaFromName.js";

const displaySections = (compoundType) => {
    // The 'ionic' radio button is selected by default.
    // The 'Name from Formula' and 'Formula from Name' sections are always visible
    if (compoundType == 'ionic') {
        // Make all sections visible
        domSelectors.ionicTypesDisplay.style.display = 'block';
        domSelectors.nameIonDisplay.style.display = 'block';
        domSelectors.formulaIonDisplay.style.display = 'block';
        domSelectors.compoundFromSymbolsDisplay.style.display = 'block';
        domSelectors.compoundPlaygroundDisplay.style.display = 'block';
        domSelectors.transitionMetalDisplay.style.display = 'block';

        // Generate ion lists for the ionic type and regenerate the 'Name from Formula' and 'Formula from Name' sections
        data.cationNames = getCationList('name', true);
        data.anionNames = getAnionList('name', true);
        data.cationSymbols = getCationList('symbol', false);
        data.anionSymbols = getAnionList('symbol', false);

        resetNameFromFormula();
        resetFormulaFromName();

    } else if (compoundType == 'acids') {
        // Hide the transition metals option from the 'Ionic Types Display' section
        // Hide all sections containing ions
        domSelectors.ionicTypesDisplay.style.display = 'block';
        domSelectors.transitionMetalDisplay.style.display = 'none';
        domSelectors.nameIonDisplay.style.display = 'none';
        domSelectors.formulaIonDisplay.style.display = 'none';
        domSelectors.compoundFromSymbolsDisplay.style.display = 'none';
        domSelectors.compoundPlaygroundDisplay.style.display = 'none';

        // Generate ion lists for acid type and regenerate the 'Name from Formula' and 'Formula from Name' sections
        data.cationSymbols = getCationList('symbol', false);
        data.anionSymbols = getAnionList('symbol', false);
        resetNameFromFormula();
        resetFormulaFromName();

    } else if (compoundType == 'molecular') {
        // Hide the 'Ionic Types Display' section
        // Hide all sections containing ions
        domSelectors.ionicTypesDisplay.style.display = 'none';
        domSelectors.nameIonDisplay.style.display = 'none';
        domSelectors.formulaIonDisplay.style.display = 'none';
        domSelectors.compoundFromSymbolsDisplay.style.display = 'none';
        domSelectors.compoundPlaygroundDisplay.style.display = 'none';

        // Regenerate the 'Name from Formula' and 'Formula from Name' sections
        resetNameFromFormula();
        resetFormulaFromName();
    }
}

export default displaySections