import data from "../displays/data.js";

const randomMolecElement = (position) => {
    // Use the appropriate array of element objects to randomly pick one for a molecular compound
    if (position == 'first') {
        let index = Math.floor(data.molecFirstElements.length * Math.random());
        return data.molecFirstElements[index];
    } else if (position == 'second') {
        let index = Math.floor(data.molecSecondElements.length * Math.random());
        return data.molecSecondElements[index];
    }
}

export default randomMolecElement