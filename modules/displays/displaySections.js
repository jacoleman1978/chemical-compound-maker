import domSelectors from "../eventListeners/domSelectors.js";
import data from "./data.js";
import getCationList from "../ions/getCationList.js";
import getAnionList from "../ions/getAnionList.js";
import resetNameFromFormula from "../resetSection/resetNameFromFormula.js";
import resetFormulaFromName from "../resetSection/resetFormulaFromName.js";

const displaySections = (compoundType) => {
    if (compoundType == 'ionic') {
        domSelectors.ionicTypesDisplay.style.display = 'block';
        domSelectors.nameIonDisplay.style.display = 'block';
        domSelectors.formulaIonDisplay.style.display = 'block';
        domSelectors.compoundFromSymbolsDisplay.style.display = 'block';
        domSelectors.compoundPlaygroundDisplay.style.display = 'block';
        domSelectors.transitionMetalDisplay.style.display = 'block';

        data.cationNames = getCationList('name', true);
        data.anionNames = getAnionList('name', true);
        data.cationSymbols = getCationList('symbol', false);
        data.anionSymbols = getAnionList('symbol', false);

        resetNameFromFormula();
        resetFormulaFromName();

    } else if (compoundType == 'acids') {
        domSelectors.ionicTypesDisplay.style.display = 'block';
        domSelectors.transitionMetalDisplay.style.display = 'none';
        domSelectors.nameIonDisplay.style.display = 'none';
        domSelectors.formulaIonDisplay.style.display = 'none';
        domSelectors.compoundFromSymbolsDisplay.style.display = 'none';
        domSelectors.compoundPlaygroundDisplay.style.display = 'none';

        data.cationSymbols = getCationList('symbol', false);
        data.anionSymbols = getAnionList('symbol', false);
        resetNameFromFormula();
        resetFormulaFromName();

    } else if (compoundType == 'molecular') {
        domSelectors.ionicTypesDisplay.style.display = 'none';
        domSelectors.nameIonDisplay.style.display = 'none';
        domSelectors.formulaIonDisplay.style.display = 'none';
        domSelectors.compoundFromSymbolsDisplay.style.display = 'none';
        domSelectors.compoundPlaygroundDisplay.style.display = 'none';
        resetNameFromFormula();
        resetFormulaFromName();
    }
}

export default displaySections