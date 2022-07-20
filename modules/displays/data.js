import getAnionList from "../ions/getAnionList.js";
import getCationList from "../ions/getCationList.js";
import molecFirstElementsOptions from "../compounds/molecFirstElements.js";
import molecSecondElementsOptions from "../compounds/molecSecondElements.js";

const data = {
    cationNames: getCationList('name', true),
    anionNames: getAnionList('name', true),
    cationSymbols: getCationList('symbol', false),
    anionSymbols: getAnionList('symbol', false),
    compoundTypeSelected: '',
    compoundName: '',
    nameTheIon: '',
    ionFormula: '',
    playgroundCompound: '',
    compoundFromSymbols: '',
    compoundNameFromFormula: '',
    compoundFormulaFromName: '',
    molecFirstElements: molecFirstElementsOptions,
    molecSecondElements: molecSecondElementsOptions,
    molecFormulaFromName: "",
    molecNameFromFormula: "",
    superscriptFlag: false,
}

export default data;