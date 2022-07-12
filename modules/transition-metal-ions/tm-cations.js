import Ion from "../ion.js";

const tsCations = [
    ['copper(I)', 'Cu', '+1'],
    ['gold(I)', 'Au', '+1'],
    ['copper(II)', 'Cu', '+2'],
    ['cobalt(II)', 'Co', '+2'],
    ['iron(II)', 'Fe', '+2'],
    ['lead(II)', 'Pb', '+2'],
    ['mercury(II)', 'Hg', '+2'],
    ['nickel(II)', 'Ni', '+2'],
    ['platinum(II)', 'Pt', '+2'],
    ['tin(II)', 'Sn', '+2'],
    ['chromium(III)', 'Cr', '+3'],
    ['cobalt(III)', 'Co', '+3'],
    ['gold(III)', 'Au', '+3'],
    ['iron(III)', 'Fe', '+3'],
    ['lead(IV)', 'Pb', '+4'],
    ['tin(IV)', 'Sn', '+4'],
    ['vanadium(V)', 'V', '+5'],
    ['chromium(VI)', 'Cr', '+6'],
    ['manganese(VII)', 'Mn', '+7'],
    ['osmium(VIII)', 'Os', '+8'],
];

const tsCationsOptions = tsCations.map((cation) => {
    let ion = new Ion(cation[0], cation[1], cation[2])
    
    return ion
});

export default tsCationsOptions;