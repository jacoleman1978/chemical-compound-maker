import Ion from "../modules/ion.js";

const anions = [
    ['carbide', 'C', '-4', 4],
    ['nitride', 'N', '-3', 3],
    ['phosphide', 'P', '-3', 3],
    ['oxide', 'O', '-2', 2],
    ['sulfide', 'S', '-2', 2],
    ['fluoride', 'F', '-1', 1],
    ['chloride', 'Cl', '-1', 1],
    ['bromide', 'Br', '-1', 1],
    ['iodide', 'I', '-1', 1]
];

const mgAnions = anions.map((anion) => {
    let ion = new Ion(anion[0], anion[1], anion[2], '#mg-anion')
    
    return ion
});

export default mgAnions