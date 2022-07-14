import domSelectors from "../eventListeners/domSelectors.js";
import data from "../data.js";
import getCationList from "../ions/getCationList.js";
import getAnionList from "../ions/getAnionList.js";

const types = document.querySelectorAll('.types')
for (let type of types) {
    type.addEventListener('click', () => {
        domSelectors.cationDisplay.innerHTML = "";

        domSelectors.anionDisplay.innerHTML = "";

        domSelectors.displayFormula.innerHTML = "";

        data.cationNames = getCationList('name', true);
        data.anionNames = getAnionList('name', true);
        data.cationSymbols = getCationList('symbol', false);
        data.anionSymbols = getAnionList('symbol', false);
    })
}