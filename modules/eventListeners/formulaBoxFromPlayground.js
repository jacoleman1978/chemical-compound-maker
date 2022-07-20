import editableDiv from "../displays/editableDiv.js";
import domSelectors from "./domSelectors.js";

// 'Compound Playground' formula editable div
domSelectors.playgroundFormulaAnswer.addEventListener('keyup', (e) => {
    editableDiv(e, '#playground-formula-answer');
})