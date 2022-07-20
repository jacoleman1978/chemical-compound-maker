import data from "../displays/data.js";

// Use ionType to randomly select an ion from the appropriate ion list
const randomIon = (ionType) => {
    // If 'both', randomly select anion or cation
    if (ionType === 'both') {
        if (Math.random() > 0.49) {
            ionType = 'anion';
        } else {
            ionType = 'cation';
        }
    } 
    
    // Randomly select an anion Ion object from the anion list
    if (ionType == 'anion') {
        let index = Math.floor(data.anionSymbols.length * Math.random());
        return data.anionSymbols[index];

    // Randomly select a cation Ion object from the cation list
    } else if (ionType == 'cation') {
        let index = Math.floor(data.cationSymbols.length * Math.random());
        return data.cationSymbols[index];
    }
}

export default randomIon