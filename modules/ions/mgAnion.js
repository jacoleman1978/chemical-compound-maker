import Ion from "./ion.js";

const mgAnions = [
    ['fluoride', 'F', '-1', false],
    ['chloride', 'Cl', '-1', false],
    ['bromide', 'Br', '-1', false],
    ['iodide', 'I', '-1', false],
    ['oxide', 'O', '-2', false],
    ['sulfide', 'S', '-2', false],
    ['nitride', 'N', '-3', false],
    ['phosphide', 'P', '-3', false],
    ['carbide', 'C', '-4', false]
];

const mgAnionsOptions = mgAnions.map((anion, i) => {
    let ion = new Ion(anion[0], anion[1], anion[2], anion[3]);
    
    return ion
});

export default mgAnionsOptions