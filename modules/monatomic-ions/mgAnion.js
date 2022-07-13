import Ion from "../ion.js";

const mgAnions = [
    ['fluoride', 'F', '-1', 1],
    ['chloride', 'Cl', '-1', 1],
    ['bromide', 'Br', '-1', 1],
    ['iodide', 'I', '-1', 1],
    ['oxide', 'O', '-2', 2],
    ['sulfide', 'S', '-2', 2],
    ['nitride', 'N', '-3', 3],
    ['phosphide', 'P', '-3', 3],
    ['carbide', 'C', '-4', 4]
];

const mgAnionsOptions = mgAnions.map((anion, i) => {
    let ion = new Ion(anion[0], anion[1], anion[2])
    
    return ion
});

export default mgAnionsOptions