import editableDiv from "../displays/editableDiv.js";
import domSelectors from "./domSelectors.js";

domSelectors.formulaAnswer.addEventListener('keyup', (e) => {
    editableDiv(e, '#formula-answer');
})