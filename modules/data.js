import getAnionList from "./getAnionList.js";
import getCationList from "./getCationList.js";
import randomIon from "./randomIon.js";

const data = {
    cationNames: getCationList('name', true),
    anionNames: getAnionList('name', true),
    cationSymbols: getCationList('symbol', false),
    anionSymbols: getAnionList('symbol', false),
    compoundName: '',
    nameTheIon: ''
}

export default data;