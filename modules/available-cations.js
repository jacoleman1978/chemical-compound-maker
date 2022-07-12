import mgCationsOptions from "./monatomic-ions/mg-cation.js";
import tsCationsOptions from "./transition-metal-ions/tm-cations.js";

const cationOptions = () => {
    let availableCations = [];
    
    let mgSelector = document.querySelector('#main-group-ions');
    
    if (mgSelector.checked == true) {
        availableCations = [...mgCationsOptions]
    }
    
    let tsSelector = document.querySelector('#transition-metal-ions');
    
    if (tsSelector.checked == true) {
        availableCations = [...availableCations, ...tsCationsOptions]
    }
    
    let cationSelector = document.querySelector('#cation-selector');
    let option = document.createElement('option');
    option.value = "none";
    option.textContent = "Select an Cation"
    option.setAttribute("selected", true);
    option.setAttribute("disabled", true);
    option.setAttribute("hidden", true);
    cationSelector.append(option);
    
    availableCations.forEach((cation, i) => {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = cation.getName();
        cationSelector.append(option);
    })
    
    cationSelector.addEventListener("change", () => {
        let cationDisplay = document.querySelector('#mg-cation');
        cationDisplay.innerHTML = "";
        availableCations[cationSelector.value].displayIon('#mg-cation');
    })

    return availableCations
}

export default cationOptions;