import data from "./data.js";
import domSelectors from "./domSelectors.js";

const checkIonName = () => {
    let answer = data.nameTheIon.getName();
    let userAnswer = domSelectors.nameIonAnswer.value.trim();
    domSelectors.displayNameIonAnswer.innerHTML = "";
    domSelectors.displayNameIonAnswer.append(answer);

    if (userAnswer == answer) {
        domSelectors.nameIonAnswer.style.backgroundColor = 'lightgreen';
        domSelectors.displayNameIonAnswer.style.color = 'green';
    } else {
        domSelectors.nameIonAnswer.style.backgroundColor = 'yellow';
        domSelectors.displayNameIonAnswer.style.color = 'red';
    }
}

export default checkIonName;