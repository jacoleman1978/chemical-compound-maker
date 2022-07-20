import editableDiv from "../displays/editableDiv.js";
import domSelectors from "./domSelectors.js";

// 'Compound from Symbols' formula editable div
domSelectors.formulaCompoundAnswer.addEventListener('keyup', (e) => {
    editableDiv(e, '#formula-compound-answer');
})