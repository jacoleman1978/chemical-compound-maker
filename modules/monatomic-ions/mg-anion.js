import Ion from "../ion.js";

const mgAnions = [
    ['fluoride', 'F', '-1', 1],
    ['chloride', 'Cl', '-1', 1],
    ['bromide', 'Br', '-1', 1],
    ['iodide', 'I', '-1', 1],
    ['oxide', 'O', '-2', 2],
    ['sulfide', 'S', '-2', 2],
    ['nitride', 'N', '-3', 3],
    ['phosphide', 'P', '-3', 3],
    ['carbide', 'C', '-4', 4]
];

let anionSelector = document.querySelector('#anion-selector');
let option = document.createElement('option');
option.value = "none";
option.textContent = "Select an Anion"
option.setAttribute("selected", true);
option.setAttribute("disabled", true);
option.setAttribute("hidden", true);
anionSelector.append(option);

const mgAnionsOptions = mgAnions.map((anion, i) => {
    let ion = new Ion(anion[0], anion[1], anion[2])

    let option = document.createElement('option');
    option.value = i;
    option.textContent = anion[0];
    anionSelector.append(option);
    
    return ion
});

anionSelector.addEventListener("change", () => {
    let anionDisplay = document.querySelector('#mg-anion');
    anionDisplay.innerHTML = "";
    mgAnionsOptions[anionSelector.value].displayIon('#mg-anion');
});

export default mgAnionsOptions