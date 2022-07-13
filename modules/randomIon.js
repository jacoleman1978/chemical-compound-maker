import data from "./data.js";

const randomIon = () => {
    let ionType = data.ionType || 'both';

    if (ionType === 'both') {
        if (Math.random() > 0.49) {
            ionType = 'anion';
        } else {
            ionType = 'cation';
        }
    } 
    
    if (ionType === 'anion') {
        let index = Math.floor(data.anionSymbols.length * Math.random());
        return data.anionSymbols[index];

    } else if (ionType === 'cation') {
        let index = Math.floor(data.cationSymbols.length * Math.random());
        return data.cationSymbols[index];
    }
}

export default randomIon