import data from "../data.js";
import domSelectors from "../eventListeners/domSelectors.js";

const checkNameFromSymbols = () => {
    let userAnswer = domSelectors.nameCompoundAnswer.value.trim();

    if (userAnswer === data.compoundFromSymbols.getName()) {
        domSelectors.nameCompoundAnswer.style.backgroundColor = 'lightgreen';
        domSelectors.displayNameCompoundAnswer.style.color = 'green';
    } else {
        domSelectors.nameCompoundAnswer.style.backgroundColor = 'yellow';
        domSelectors.displayNameCompoundAnswer.style.color = 'red';
    }
}

export default checkNameFromSymbols;