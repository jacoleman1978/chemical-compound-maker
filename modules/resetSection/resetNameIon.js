import domSelectors from "../eventListeners/domSelectors.js";
import data from "../displays/data.js";
import randomIon from "../ions/randomIon.js";

// Clear all displayed data and styling in the 'Ion Name' section
const resetNameIon = (ionType) => {
    domSelectors.ionSymbol.innerHTML = "";
    domSelectors.displayNameIonAnswer.innerHTML = "";
    domSelectors.nameIonAnswer.style.backgroundColor = "";
    domSelectors.nameIonAnswer.value = "";
    data.nameTheIon = randomIon(ionType);
    domSelectors.ionSymbol.append(data.nameTheIon.getFormattedIon());
}

export default resetNameIon;