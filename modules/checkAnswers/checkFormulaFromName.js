import data from "../data.js";
import domSelectors from "../eventListeners/domSelectors.js";

const checkFormulaFromName = () => {
    let answer = data.compoundFormulaFromName.getPlainFormula();

    domSelectors.displayFormulaFromNameAnswer.innerHTML = "";
    domSelectors.displayFormulaFromNameAnswer.append(answer);

    let userAnswer = domSelectors.formulaFromNameAnswer.value.trim();

    if (userAnswer === answer) {
        domSelectors.formulaFromNameAnswer.style.backgroundColor = 'lightgreen';
        domSelectors.displayFormulaFromNameAnswer.style.color = 'green';
    } else {
        domSelectors.formulaFromNameAnswer.style.backgroundColor = 'yellow';
        domSelectors.displayFormulaFromNameAnswer.style.color = 'red';
    }
}

export default checkFormulaFromName;