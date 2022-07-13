import data from "./data.js";
import domSelectors from "./domSelectors.js";

const checkCompoundFormula = () => {
    let userAnswer = domSelectors.formulaAnswer.value.trim();
    domSelectors.displayFormula.append(data.playgroundCompound.getPlainFormula());

    if (userAnswer === data.playgroundCompound.getPlainFormula()) {
        domSelectors.formulaAnswer.style.backgroundColor = 'lightgreen';
        domSelectors.displayFormula.style.color = 'green';
    } else {
        domSelectors.formulaAnswer.style.backgroundColor = 'yellow';
        domSelectors.displayFormula.style.color = 'red';
    }
}

export default checkCompoundFormula;