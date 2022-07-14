import data from "../data.js";
import domSelectors from "../eventListeners/domSelectors.js";

const checkIonFormula = () => {
    let answer = data.ionFormula.getPlainFormula();
    let userAnswer = domSelectors.formulaIonAnswer.value.trim();
    domSelectors.displayFormulaIonAnswer.innerHTML = "";
    domSelectors.displayFormulaIonAnswer.append(answer);

    if (userAnswer == answer) {
        domSelectors.formulaIonAnswer.style.backgroundColor = 'lightgreen';
        domSelectors.displayFormulaIonAnswer.style.color = 'green';
    } else {
        domSelectors.formulaIonAnswer.style.backgroundColor = 'yellow';
        domSelectors.displayFormulaIonAnswer.style.color = 'red';
    }
}

export default checkIonFormula;