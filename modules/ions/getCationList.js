import domSelectors from "../eventListeners/domSelectors.js";
import mgCationsOptions from "./mgCation.js";
import tsCationsOptions from "./tmCations.js";
import polyCationOptions from "./polyCation.js";
import Ion from "./ion.js";

const getCationList = (displayType, isDropdownList) => {
    let isIonicChecked = domSelectors.includeIonic.checked;
    let isAcidChecked = domSelectors.includeAcids.checked;

    let cationOptions = [];
    
    if (isIonicChecked == true) {
        if (domSelectors.mgIons.checked == true) {
            cationOptions = [...mgCationsOptions]
        }
    
        if (domSelectors.tsIons.checked == true) {
            cationOptions = [...cationOptions, ...tsCationsOptions]
        }
    
        if (domSelectors.polyIons.checked == true) {
            cationOptions = [...cationOptions, ...polyCationOptions];
        }
    } else if (isAcidChecked == true) {
        cationOptions = [new Ion("hydrogen", "H", "+1", false)]
    }

    if (isDropdownList == true) {
        domSelectors.cationDropdown.innerHTML = "";
        let option = document.createElement('option');
        option.value = "none";
        option.textContent = "Select a Cation"
        option.setAttribute("selected", true);
        option.setAttribute("disabled", true);
        option.setAttribute("hidden", true);
        domSelectors.cationDropdown.append(option);
        
        cationOptions.forEach((cation, i) => {
            let option = document.createElement('option');
            option.value = i;
            if (displayType === 'name') {
                option.textContent = cation.getName();
            } else if (displayType === 'symbol') {
                option.textContent = cation.getFormattedIon();
            }
            domSelectors.cationDropdown.append(option);
        })
    }


    return cationOptions
}

export default getCationList;