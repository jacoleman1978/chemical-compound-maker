import getAnionList from "./ions/getAnionList.js";
import getCationList from "./ions/getCationList.js";

const data = {
    cationNames: getCationList('name', true),
    anionNames: getAnionList('name', true),
    cationSymbols: getCationList('symbol', false),
    anionSymbols: getAnionList('symbol', false),
    compoundName: '',
    nameTheIon: '',
    ionFormula: '',
    playgroundCompound: "",
    compoundFromSymbols: "",
    compoundNameFromFormula: "",
}

export default data;