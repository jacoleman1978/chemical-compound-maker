import domSelectors from "./modules/eventListeners/domSelectors.js";
import data from "./modules/data.js";
import "./modules/eventListeners/eventListeners.js";
import randomIon from "./modules/ions/randomIon.js";


const main = () => {
    data.nameTheIon = randomIon('both');
    domSelectors.ionSymbol.append(data.nameTheIon.getFormattedIon());

    data.ionFormula = randomIon('both');
    domSelectors.ionName.append(data.ionFormula.getName());
}

main();