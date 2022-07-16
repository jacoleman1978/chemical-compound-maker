import editableDiv from "../displays/editableDiv.js";
import domSelectors from "./domSelectors.js";

domSelectors.formulaCompoundAnswer.addEventListener('keyup', (e) => {
    editableDiv(e, '#formula-compound-answer');
})