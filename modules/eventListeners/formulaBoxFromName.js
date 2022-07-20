import editableDiv from "../displays/editableDiv.js";
import domSelectors from "./domSelectors.js";

// 'Formula from name' formula editable div
domSelectors.formulaFromNameAnswer.addEventListener('keyup', (e) => {
    editableDiv(e, '#formula-from-name-answer');
})