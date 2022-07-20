import domSelectors from "../eventListeners/domSelectors.js";
import mgCationsOptions from "./mgCation.js";
import tsCationsOptions from "./tmCations.js";
import polyCationOptions from "./polyCation.js";
import Ion from "./ion.js";

// Makes the cation list based on which included ion types are checked and which compound types are selected
const getCationList = (displayType, isDropdownList) => {
    let isIonicChecked = domSelectors.includeIonic.checked;
    let isAcidChecked = domSelectors.includeAcids.checked;

    let cationOptions = [];
    
    // Default: If ionic types radio button is selected, use check box selection to generate cation list
    if (isIonicChecked == true) {
        // Main group ions checkbox
        if (domSelectors.mgIons.checked == true) {
            cationOptions = [...mgCationsOptions]
        }
    
        // Transition metal ions checkbox
        if (domSelectors.tsIons.checked == true) {
            cationOptions = [...cationOptions, ...tsCationsOptions]
        }
    
        // Polyatomic ions checkbox
        if (domSelectors.polyIons.checked == true) {
            cationOptions = [...cationOptions, ...polyCationOptions];
        }

    // If the Acid radio button for compound types is selected, only H^+ cation is included
    } else if (isAcidChecked == true) {
        cationOptions = [new Ion("hydrogen", "H", "+1", false)]
    }

    // If the isDropdownList flag is true, create the cation dropdown list for the 'Compound Playground'
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