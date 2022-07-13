import getAnionList from "./getAnionList.js";
import getCationList from "./getCationList.js";

const data = {
    cationNames: getCationList('name'),
    anionNames: getAnionList('name'),
    cationSymbols: [],
    anionSymbols: [],
    compoundName: ''
}

export default data;