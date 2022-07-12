import domSelectors from "./dom-selectors.js";
import mgAnionsOptions from "./monatomic-ions/mg-anion.js";

const anionOptions = () => {
    let availableAnions = [];
    
    if (domSelectors.mgIons.checked == true) {
        availableAnions = [...mgAnionsOptions]
    }
    
    domSelectors.anionDropdown.innerHTML = "";
    let option = document.createElement('option');
    option.value = "none";
    option.textContent = "Select an Anion"
    option.setAttribute("selected", true);
    option.setAttribute("disabled", true);
    option.setAttribute("hidden", true);
    domSelectors.anionDropdown.append(option);
    
    availableAnions.forEach((anion, i) => {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = anion.getName();
        domSelectors.anionDropdown.append(option);
    })

    return availableAnions
}

export default anionOptions;