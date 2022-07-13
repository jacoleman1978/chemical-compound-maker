import data from "./data.js";
import domSelectors from "./domSelectors.js";

const checkIonFormula = () => {
    let answer = data.ionFormula.getPlainFormula();
    let userAnswer = domSelectors.formulaIonAnswer.value.trim();
    domSelectors.displayFormulaIonAnswer.innerHTML = "";
    domSelectors.displayFormulaIonAnswer.append(answer);

    if (userAnswer == answer) {
        domSelectors.formulaIonAnswer.style.backgroundColor = 'lightgreen';
    } else {
        domSelectors.formulaIonAnswer.style.backgroundColor = 'yellow';
    }
}

export default checkIonFormula;