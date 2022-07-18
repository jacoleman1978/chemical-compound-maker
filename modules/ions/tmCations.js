import Ion from "./ion.js";

const tsCations = [
    ['copper(I)', 'Cu', '+1', false],
    ['gold(I)', 'Au', '+1', false],
    ['copper(II)', 'Cu', '+2', false],
    ['cobalt(II)', 'Co', '+2', false],
    ['iron(II)', 'Fe', '+2', false],
    ['lead(II)', 'Pb', '+2', false],
    ['mercury(II)', 'Hg', '+2', false],
    ['nickel(II)', 'Ni', '+2', false],
    ['platinum(II)', 'Pt', '+2', false],
    ['tin(II)', 'Sn', '+2', false],
    ['titanium(II)', 'Ti', '+2', false],
    ['chromium(III)', 'Cr', '+3', false],
    ['cobalt(III)', 'Co', '+3', false],
    ['gold(III)', 'Au', '+3', false],
    ['iron(III)', 'Fe', '+3', false],
    ['scandium(III)', 'Sc', '+3', false],
    ['lead(IV)', 'Pb', '+4', false],
    ['palladium(IV)', 'Pd', '+4', false],
    ['tin(IV)', 'Sn', '+4', false],
    ['titanium(IV)', 'Ti', '+4', false],
    ['vanadium(V)', 'V', '+5', false],
    ['manganese(V)', 'Mn', '+5', false],
    ['chromium(VI)', 'Cr', '+6', false],
    ['molybdenum(VI)', 'Mo', '+6', false],
    ['manganese(VII)', 'Mn', '+7', false],
    ['rhenium(VII)', 'Re', '+7', false],
    ['osmium(VIII)', 'Os', '+8', false],
    ['ruthenium(VIII)', 'Ru', '+8', false],
];

const tsCationsOptions = tsCations.map((cation) => {
    let ion = new Ion(cation[0], cation[1], cation[2], cation[3]);
    
    return ion
});

export default tsCationsOptions;