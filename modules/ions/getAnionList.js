import domSelectors from "../eventListeners/domSelectors.js";
import mgAnionsOptions from "./mgAnion.js";
import polyAnionOptions from "./polyAnion.js";
import mgAcidAnionsOptions from "./mgAcidAnion.js"
import polyAcidAnionOptions from "./polyAcidAnion.js"

const getAnionList = (displayType, isDropdownList) => {
    let isIonicChecked = domSelectors.includeIonic.checked;
    let isAcidChecked = domSelectors.includeAcids.checked;
    
    let anionOptions = [];

    if (isIonicChecked == true) {
        if (domSelectors.mgIons.checked == true) {
            anionOptions = [...mgAnionsOptions];
        }
    
        if (domSelectors.tsIons.checked == true) {
            anionOptions = [...mgAnionsOptions];
        }

        if (domSelectors.polyIons.checked == true) {
            anionOptions = [...anionOptions, ...polyAnionOptions];
        }
    }

    if (isAcidChecked == true) {
        if (domSelectors.mgIons.checked == true) {
            anionOptions = [...mgAcidAnionsOptions];
        }

        if (domSelectors.polyIons.checked == true) {
            anionOptions = [...anionOptions, ...polyAcidAnionOptions];
        }
    }
    

    
    

    
    if (isDropdownList == true) {
        domSelectors.anionDropdown.innerHTML = "";
        let option = document.createElement('option');
        option.value = "none";
        option.textContent = "Select an Anion"
        option.setAttribute("selected", true);
        option.setAttribute("disabled", true);
        option.setAttribute("hidden", true);
        domSelectors.anionDropdown.append(option);

        anionOptions.forEach((anion, i) => {
            let option = document.createElement('option');
            option.value = i;
            if (displayType === 'name') {
                option.innerHTML = anion.getName();
            } else if (displayType === 'symbol') {
                option.textContent = anion.getFormattedIon();
            }
            
            domSelectors.anionDropdown.append(option);
        })
    }
    
    return anionOptions
}

export default getAnionList;