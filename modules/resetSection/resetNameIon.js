import domSelectors from "../eventListeners/domSelectors.js";
import data from "../data.js";
import randomIon from "../ions/randomIon.js";

const resetNameIon = (ionType) => {
    domSelectors.ionSymbol.innerHTML = "";
    domSelectors.displayNameIonAnswer.innerHTML = "";
    domSelectors.nameIonAnswer.style.backgroundColor = "";
    domSelectors.nameIonAnswer.value = "";
    data.nameTheIon = randomIon(ionType);
    domSelectors.ionSymbol.append(data.nameTheIon.getFormattedIon());
}

export default resetNameIon;