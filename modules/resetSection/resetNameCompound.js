import domSelectors from "../eventListeners/domSelectors.js";
import randomCompound from "../compounds/randomCompound.js";

const resetNameCompound = () => {
    domSelectors.compoundCationSymbol.innerHTML = "";
    domSelectors.compoundAnionSymbol.innerHTML = "";
    domSelectors.displayNameCompoundAnswer.innerHTML = "";
    domSelectors.nameCompoundAnswer.style.backgroundColor = "";
    domSelectors.nameCompoundAnswer.value = "";
    randomCompound('symbol');
}

export default resetNameCompound;