import data from "../displays/data.js";
import randomMolecElement from "./randomMolecElement.js";
import MolecularCompound from "./molecularCompound.js";

const randomMolecular = (molecularType) => {
    // Generate random elements from an object list for a molecular compound
    let firstElement = randomMolecElement('first');
    let secondElement = randomMolecElement('second');

    // If the first and element are the same, keep picking until they are different
    while (firstElement.getSymbol() == secondElement.getSymbol()) {
        secondElement = randomMolecElement('second');
    }

    let firstSubscript = 1;
    let secondSubscript = 1;

    // Randomly pick the first subscript based on a weighted range
    let firstRandom = Math.random();

    if (firstRandom > 0.95) {
        firstSubscript = 4;
    } else if (firstRandom > 0.85) {
        firstSubscript = 3;
    } else if (firstRandom > 0.6) {
        firstSubscript = 2;
    }

    // Use the priorities from the element object to randomly generate the subscript of the second element, adjusting the first subscript as needed
    let firstPriority = firstElement.getPriority();
    let secondPriority = secondElement.getPriority();
    let secondRandom = Math.random();
    let thirdRandom = Math.random();

    if (firstPriority > 10) {
        if (secondRandom > 0.94) {
            secondSubscript = 9;

            if (thirdRandom > 0.7) {
                firstSubscript = 4;
            } else {
                firstSubscript = 3;
            }
        } else if (secondRandom > 0.91) {
            secondSubscript = 8;

            if (thirdRandom > 0.7) {
                firstSubscript = 4;
            } else {
                firstSubscript = 3;
            }
        } else if (secondRandom > 0.86) {
            secondSubscript = 7;

            if (thirdRandom > 0.7) {
                firstSubscript = 4;
            } else {
                firstSubscript = 3;
            }
        } else if (secondRandom > 0.80) {
            secondSubscript = 6;

            if (thirdRandom > 0.7) {
                firstSubscript = 3;
            } else {
                firstSubscript = 2;
            }
        } else if (secondRandom > 0.72) {
            secondSubscript = 5;

            if (thirdRandom > 0.8) {
                firstSubscript = 3;
            } else {
                firstSubscript = 2;
            }
        } else if (secondRandom > 0.55) {
            secondSubscript = 4;
        } else if (secondRandom > 0.40) {
            secondSubscript = 3;
        } else if (secondRandom > 0.15) {
            secondSubscript = 2;
        }
        
    } else if (firstPriority == 4) {
        if (firstSubscript > 2) {
            firstSubscript = 2;
        }

        if (secondPriority == 1) {
            secondSubscript = 4;

            if (firstSubscript > 1) {
                secondSubscript = 2 * secondSubscript - 2;
            }

        } else if (secondPriority == 2) {
            if (secondRandom > 0.25) {
                secondSubscript = 2;
            }

            if (firstSubscript > 1) {
                secondSubscript = 3;
            }
        } 

    } else if (firstPriority == 3) {
        if (firstSubscript > 3) {
            firstSubscript = 3;
        }

        if (secondPriority == 1) {
            secondSubscript = 3;

            if (firstSubscript > 1) {
                secondSubscript = 2 + firstSubscript;
            }

        } else if (secondPriority == 2) {
            if (secondRandom > 0.25) {
                secondSubscript = 2;
            }

            if (firstSubscript > 1) {
                secondSubscript *= firstSubscript;
            }
        } 

    } else if (firstPriority == 2) {
        firstSubscript = 1;

        if (secondPriority == 1) {
            secondSubscript = 2;

        } else if (secondPriority == 2) {
            secondSubscript = 1;
        }
    }

    // Generate the molecular compound and store in the data object to be used with the 'Formula from Name' display
    if (molecularType == 'formula') {
        data.molecFormulaFromName = new MolecularCompound(firstElement, firstSubscript, secondElement, secondSubscript);
        data.molecFormulaFromName.displayName('#formula-from-name');

    // Generate the molecular compound and store in the data object to be used with the 'Name from Formula' display
    } else if (molecularType == 'name') {
        data.molecNameFromFormula = new MolecularCompound(firstElement, firstSubscript, secondElement, secondSubscript);
        data.molecNameFromFormula.displayFormula('#name-from-formula');
    }

}

export default randomMolecular;