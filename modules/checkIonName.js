import data from "./data.js";
import domSelectors from "./domSelectors.js";

const checkIonName = () => {
    let userAnswer = domSelectors.nameIonAnswer.value.trim().toLowerCase();

    if (userAnswer === data.nameTheIon.getName()) {
        domSelectors.nameIonAnswer.style.backgroundColor = 'lightgreen';
    } else {
        domSelectors.nameIonAnswer.style.backgroundColor = 'yellow';
    }
}

export default checkIonName;