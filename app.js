import domSelectors from "./modules/eventListeners/domSelectors.js";
import data from "./modules/displays/data.js";
import "./modules/eventListeners/eventListeners.js";
import randomIon from "./modules/ions/randomIon.js";
import randomCompound from "./modules/compounds/randomCompound.js";
import randomMolecular from "./modules/compounds/randomMolecular.js";


const main = () => {
    let editableArea = document.querySelector('#practice-edit-area');
    editableArea.addEventListener('keyup', (e) => {
        let formula = editableArea.innerHTML;
        let newFormula = '';
        let lastChar = e.key;

        if (lastChar.length <= 1) {
            editableArea.innerHTML = formula.slice(0, -1);

            if (Number.isInteger(parseInt(lastChar)) == true) {
                let subscript = document.createElement('sub');
                subscript.textContent = lastChar;
                editableArea.append(subscript);

            } else if ((/[a-zA-Z]/).test(lastChar)) {
                editableArea.append(lastChar);

                let validate = editableArea.innerHTML;
                let subPosition = validate.search("<sub>");

                while (subPosition != -1) {
                    newFormula += validate.slice(0, subPosition + 6);
                    validate = validate.slice(subPosition + 6, validate.length);

                    if (validate[0] != "<") {
                        newFormula += validate.slice(1, 7);
                        validate = validate.slice(7, validate.length);

                        if (validate.search("<sub>") == -1) {
                            newFormula += validate;
                        }
                    }
                    editableArea.innerHTML = newFormula;
                    subPosition = validate.search("<sub>");
                }
            }
        
            let range = document.createRange();
            range.selectNodeContents(editableArea);
            range.collapse(false);
            let selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        }
 
    })


    data.nameTheIon = randomIon('both');
    domSelectors.ionSymbol.append(data.nameTheIon.getFormattedIon());

    data.ionFormula = randomIon('both');
    domSelectors.ionName.append(data.ionFormula.getName());

    randomCompound('symbol');
    randomCompound('name');
    randomCompound('formula');
}

main();