import data from "../displays/data.js";
import domSelectors from "../eventListeners/domSelectors.js";

const checkFormulaFromName = () => {
    //let answer = data.compoundFormulaFromName.getPlainFormula();
    let answer = data.compoundFormulaFromName.displayFormula("");

    // if (domSelectors.includeMolecular.checked == true) {
    //     answer = data.molecNameFromFormula.getName();
    // } 

    domSelectors.displayFormulaFromNameAnswer.innerHTML = "";
    domSelectors.displayFormulaFromNameAnswer.append(answer);

    //let userAnswer = domSelectors.formulaFromNameAnswer.value.trim();
    let userAnswer = domSelectors.formulaFromNameAnswer.innerHTML;

    if (userAnswer === answer.innerHTML) {
        domSelectors.formulaFromNameAnswer.style.backgroundColor = 'lightgreen';
        domSelectors.displayFormulaFromNameAnswer.style.color = 'green';
    } else {
        domSelectors.formulaFromNameAnswer.style.backgroundColor = 'yellow';
        domSelectors.displayFormulaFromNameAnswer.style.color = 'red';
    }
}

export default checkFormulaFromName;