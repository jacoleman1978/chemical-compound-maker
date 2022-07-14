import Ion from "./ion.js";

const polyAcidAnions = [
    ['acetate', 'CH3COO', '-1', true],
    ['cyanide', 'CN', '-1', true],
    ['hypochlorite', 'ClO', '-1', true],
    ['chlorite', 'ClO2', '-1', true],
    ['chlorate', 'ClO3', '-1', true],
    ['perchlorate', 'ClO4', '-1', true],
    ['permanganate', 'MnO4', '-1', true],
    ['nitrite', 'NO2', '-1', true],
    ['nitrate', 'NO3', '-1', true],
    ['carbonate', 'CO3', '-2', true],
    ['oxalate', 'C2O4', '-2', true],
    ['chromate', 'CrO4', '-2', true],
    ['dichromate', 'Cr2O7', '-2', true],
    ['sulfite', 'SO3', '-2', true],
    ['sulfate', 'SO4', '-2', true],
    ['phosphate', 'PO4', '-3', true],
];

const polyAcidAnionOptions = polyAcidAnions.map((anion) => {
    let ion = new Ion(anion[0], anion[1], anion[2], anion[3]);
    
    return ion
});

export default polyAcidAnionOptions;