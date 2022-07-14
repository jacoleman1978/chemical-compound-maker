import data from "../data.js";
import domSelectors from "../eventListeners/domSelectors.js";

const checkNameFromFormula = () => {
    let answer = data.compoundNameFromFormula.getName();

    domSelectors.displayNameFromFormulaAnswer.innerHTML = "";
    domSelectors.displayNameFromFormulaAnswer.append(answer);

    let userAnswer = domSelectors.nameFromFormulaAnswer.value.trim();

    if (userAnswer === answer) {
        domSelectors.nameFromFormulaAnswer.style.backgroundColor = 'lightgreen';
        domSelectors.displayNameFromFormulaAnswer.style.color = 'green';
    } else {
        domSelectors.nameFromFormulaAnswer.style.backgroundColor = 'yellow';
        domSelectors.displayNameFromFormulaAnswer.style.color = 'red';
    }
}

export default checkNameFromFormula;