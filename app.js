import domSelectors from "./modules/eventListeners/domSelectors.js";
import data from "./modules/displays/data.js";
import "./modules/eventListeners/eventListeners.js";
import randomIon from "./modules/ions/randomIon.js";
import randomCompound from "./modules/compounds/randomCompound.js";

const main = () => {
    // Initialize each section
    data.nameTheIon = randomIon('both');
    domSelectors.ionSymbol.append(data.nameTheIon.getFormattedIon());

    data.ionFormula = randomIon('both');
    domSelectors.ionName.append(data.ionFormula.getName());

    randomCompound('symbol');
    randomCompound('name');
    randomCompound('formula');
}

main();