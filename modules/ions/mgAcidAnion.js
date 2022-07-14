import Ion from "./ion.js";

const mgAcidAnions = [
    ['fluoride', 'F', '-1', false],
    ['chloride', 'Cl', '-1', false],
    ['bromide', 'Br', '-1', false],
    ['iodide', 'I', '-1', false],
];

const mgAcidAnionsOptions = mgAcidAnions.map((anion) => {
    let ion = new Ion(anion[0], anion[1], anion[2], anion[3]);
    
    return ion
});

export default mgAcidAnionsOptions