import Ion from "./ion.js";

// Cation list of Ion class objects for main group ions
const mgCations = [
    ['lithium', 'Li', '+1', false],
    ['sodium', 'Na', '+1', false],
    ['potassium', 'K', '+1', false],
    ['silver', 'Ag', '+1', false],
    ['magnesium', 'Mg', '+2', false],
    ['calcium', 'Ca', '+2', false],
    ['cadmium', 'Cd', '+2', false],
    ['zinc', 'Zn', '+2', false],
    ['aluminum', 'Al', '+3', false]
];

const mgCationsOptions = mgCations.map((cation) => {
    let ion = new Ion(cation[0], cation[1], cation[2], cation[3]);
    
    return ion
});

export default mgCationsOptions;