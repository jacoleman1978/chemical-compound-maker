import data from "../displays/data.js";
import domSelectors from "../eventListeners/domSelectors.js";

const checkCompoundFormula = () => {
    //let userAnswer = domSelectors.formulaAnswer.value.trim();
    let answer = data.playgroundCompound.displayFormula("");

    domSelectors.displayFormula.innerHTML = "";
    domSelectors.displayFormula.append(answer);

    let userAnswer = domSelectors.formulaAnswer.innerHTML;

    if (userAnswer === answer.innerHTML) {
        domSelectors.formulaAnswer.style.backgroundColor = 'lightgreen';
        domSelectors.displayFormula.style.color = 'green';
    } else {
        domSelectors.formulaAnswer.style.backgroundColor = 'yellow';
        domSelectors.displayFormula.style.color = 'red';
    }
}

export default checkCompoundFormula;