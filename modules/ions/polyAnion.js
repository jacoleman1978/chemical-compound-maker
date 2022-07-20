import Ion from "./ion.js";

// Anion list of Ion class objects for polyatomic ions
const polyAnions = [
    ['acetate', 'CH3COO', '-1', true],
    ['cyanide', 'CN', '-1', true],
    ['bicarbonate', 'HCO3', '-1', true],
    ['hypobromite', 'BrO', '-1', true],
    ['bromite', 'BrO2', '-1', true],
    ['bromate', 'BrO3', '-1', true],
    ['perbromate', 'BrO4', '-1', true],
    ['hypochlorite', 'ClO', '-1', true],
    ['chlorite', 'ClO2', '-1', true],
    ['chlorate', 'ClO3', '-1', true],
    ['perchlorate', 'ClO4', '-1', true],
    ['hypoiodite', 'IO', '-1', true],
    ['iodite', 'BrO2', '-1', true],
    ['iodate', 'BrO3', '-1', true],
    ['periodite', 'BrO', '-1', true],
    ['permanganate', 'MnO4', '-1', true],
    ['nitrite', 'NO2', '-1', true],
    ['nitrate', 'NO3', '-1', true],
    ['hydroxide', 'OH', '-1', true],
    ['bisulfite', 'HSO3', '-1', true],
    ['bisulfate', 'HSO4', '-1', true],
    ['thiocyanate', 'SCN', '-1', true],
    ['carbonate', 'CO3', '-2', true],
    ['oxalate', 'C2O4', '-2', true],
    ['chromate', 'CrO4', '-2', true],
    ['dichromate', 'Cr2O7', '-2', true],
    ['selenite', 'SeO3', '-2', true],
    ['selenate', 'SeO4', '-2', true],
    ['sulfite', 'SO3', '-2', true],
    ['sulfate', 'SO4', '-2', true],
    ['persulfate', 'SO5', '-2', true],
    ['hypotellurite', 'TeO2', '-2', true],
    ['tellurite', 'TeO3', '-2', true],
    ['tellurate', 'TeO4', '-2', true],
    ['hypoarsenite', 'AsO2', '-3', true],
    ['aresenite', 'AsO3', '-3', true],
    ['aresenate', 'AsO4', '-3', true],
    ['phosphite', 'PO3', '-3', true],
    ['phosphate', 'PO4', '-3', true],
];

const polyAnionOptions = polyAnions.map((anion) => {
    let ion = new Ion(anion[0], anion[1], anion[2], anion[3]);
    
    return ion
});

export default polyAnionOptions;