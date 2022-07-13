import Ion from "../ion.js";

const mgCations = [
    ['lithium', 'Li', '+1'],
    ['sodium', 'Na', '+1'],
    ['potassium', 'K', '+1'],
    ['silver', 'Ag', '+1'],
    ['magnesium', 'Mg', '+2'],
    ['calcium', 'Ca', '+2'],
    ['cadium', 'Cd', '+2'],
    ['zinc', 'Zn', '+2'],
    ['aluminum', 'Al', '+3']
];

const mgCationsOptions = mgCations.map((cation) => {
    let ion = new Ion(cation[0], cation[1], cation[2])
    
    return ion
});

export default mgCationsOptions;