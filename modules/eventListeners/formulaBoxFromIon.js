import editableDiv from "../displays/editableDiv.js";
import domSelectors from "./domSelectors.js";

domSelectors.formulaIonAnswer.addEventListener('keyup', (e) => {
    editableDiv(e, '#formula-ion-answer');
})