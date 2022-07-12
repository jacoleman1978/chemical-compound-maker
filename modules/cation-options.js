import domSelectors from "./dom-selectors.js";
import mgCationsOptions from "./monatomic-ions/mg-cation.js";
import tsCationsOptions from "./transition-metal-ions/tm-cations.js";

const cationOptions = () => {
    let availableCations = [];
    
    if (domSelectors.mgIons.checked == true) {
        availableCations = [...mgCationsOptions]
    }

    if (domSelectors.tsIons.checked == true) {
        availableCations = [...availableCations, ...tsCationsOptions]
    }
    
    domSelectors.cationDropdown.innerHTML = "";
    let option = document.createElement('option');
    option.value = "none";
    option.textContent = "Select a Cation"
    option.setAttribute("selected", true);
    option.setAttribute("disabled", true);
    option.setAttribute("hidden", true);
    domSelectors.cationDropdown.append(option);
    
    availableCations.forEach((cation, i) => {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = cation.getName();
        domSelectors.cationDropdown.append(option);
    })

    return availableCations
}

export default cationOptions;