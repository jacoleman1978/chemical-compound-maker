import MolecularElement from './molecularElement.js';

const molecFirstElements = [
    ['carbon', 'carbide', 'C', 4],
    ['nitrogen', 'nitride', 'N', 3],
    ['oxygen', 'oxide', 'O', 2],
    ['phosphorus', 'phosphide', 'P', 13],
    ['sulfur', 'sulfide', 'S', 12],
    ['germanium', 'germanide', 'Ge', 14],
    ['arsenic', 'arsenide', 'As', 13],
    ['selenium', 'selenide', 'Se', 12],
    ['tellurium', 'telluride', 'Te', 12],
]

const molecFirstElementsOptions = molecFirstElements.map((element) => {
    let component = new MolecularElement(element[0], element[1], element[2], element[3]);
    
    return component
});

export default molecFirstElementsOptions;