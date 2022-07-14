import Ion from "./ion.js";

const polyCations = [
    ['ammonium', 'NH4', '+1', true],
];

const polyCationOptions = polyCations.map((cation) => {
    let ion = new Ion(cation[0], cation[1], cation[2], cation[3]);
    
    return ion
});

export default polyCationOptions;