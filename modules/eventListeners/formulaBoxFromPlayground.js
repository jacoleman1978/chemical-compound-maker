import editableDiv from "../displays/editableDiv.js";
import domSelectors from "./domSelectors.js";

domSelectors.playgroundFormulaAnswer.addEventListener('keyup', (e) => {
    editableDiv(e, '#playground-formula-answer');
})