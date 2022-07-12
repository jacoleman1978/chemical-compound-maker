import Ion from "../modules/ion.js";

const cations = [
    ['lithium', 'Li', '+1'],
    ['sodium', 'Na', '+1'],
    ['potassium', 'K', '+1'],
    ['magnesium', 'Mg', '+2'],
    ['calcium', 'Ca', '+2'],
    ['aluminum', 'Al', '+3']
];

let cationSelector = document.querySelector('#cation-selector');
let option = document.createElement('option');
option.value = "none";
option.textContent = "Select an Cation"
option.setAttribute("selected", true);
option.setAttribute("disabled", true);
option.setAttribute("hidden", true);
cationSelector.append(option);

const mgCations = cations.map((cation, i) => {
    let ion = new Ion(cation[0], cation[1], cation[2], '#mg-cation')

    let option = document.createElement('option');
    option.value = i;
    option.textContent = cation[0];
    cationSelector.append(option);
    
    return ion
});

cationSelector.addEventListener("change", () => {
    let cationDisplay = document.querySelector('#mg-cation');
    cationDisplay.innerHTML = "";
    mgCations[cationSelector.value].displayIon();
})

export default mgCations;