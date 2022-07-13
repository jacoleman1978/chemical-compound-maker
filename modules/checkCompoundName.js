import data from "./data.js";
import domSelectors from "./domSelectors.js";

const checkCompoundName = () => {
    let userAnswer = domSelectors.nameAnswer.value.trim().toLowerCase();

    if (userAnswer === data.compoundName.getName()) {
        domSelectors.nameAnswer.style.backgroundColor = 'lightgreen';
        domSelectors.displayName.style.color = 'green';
    } else {
        domSelectors.nameAnswer.style.backgroundColor = 'yellow';
        domSelectors.displayName.style.color = 'red';
    }
}

export default checkCompoundName;