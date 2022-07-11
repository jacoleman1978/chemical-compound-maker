import Ion from "../modules/ion.js";

const cations = [
    ['lithium', 'Li', '+1'],
    ['sodium', 'Na', '+1'],
    ['potassium', 'K', '+1'],
    ['magnesium', 'Mg', '+2'],
    ['calcium', 'Ca', '+2'],
    ['aluminum', 'Al', '+3']
];

const mgCations = cations.map((cation) => {
    let ion = new Ion(cation[0], cation[1], cation[2], '#mg-cation')
    
    return ion
});

export default mgCations;