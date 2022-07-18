import editableDiv from "../displays/editableDiv.js";
import domSelectors from "./domSelectors.js";

domSelectors.formulaFromNameAnswer.addEventListener('keyup', (e) => {
    editableDiv(e, '#formula-from-name-answer');
})