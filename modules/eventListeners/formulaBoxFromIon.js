import editableDiv from "../displays/editableDiv.js";
import domSelectors from "./domSelectors.js";

// 'Ion Formula' formula editable div
domSelectors.formulaIonAnswer.addEventListener('keyup', (e) => {
    editableDiv(e, '#formula-ion-answer');
})