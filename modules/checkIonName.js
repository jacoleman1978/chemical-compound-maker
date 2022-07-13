import data from "./data.js";
import domSelectors from "./domSelectors.js";

const checkIonName = () => {
    let answer = data.nameTheIon.getName();
    let userAnswer = domSelectors.nameIonAnswer.value.trim();
    domSelectors.displayNameIonAnswer.innerHTML = "";
    domSelectors.displayNameIonAnswer.append(answer);

    if (userAnswer == answer) {
        domSelectors.nameIonAnswer.style.backgroundColor = 'lightgreen';
    } else {
        domSelectors.nameIonAnswer.style.backgroundColor = 'yellow';
    }
}

export default checkIonName;