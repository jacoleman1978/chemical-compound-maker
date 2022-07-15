import MolecularElement from './molecularElement.js';

const molecSecondElements = [
    ['oxygen', 'oxide', 'O', 2],
    ['fluorine', 'fluoride', 'F', 1],
    ['sulfur', 'sulfide', 'S', 2],
    ['chlorine', 'chloride', 'Cl', 1],
    ['bromine', 'bromide', 'Br', 1],
    ['iodine', 'iodide', 'I', 1]
]

const molecSecondElementsOptions = molecSecondElements.map((element) => {
    let component = new MolecularElement(element[0], element[1], element[2], element[3]);
    
    return component
});

export default molecSecondElementsOptions;