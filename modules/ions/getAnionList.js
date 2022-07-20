import domSelectors from "../eventListeners/domSelectors.js";
import mgAnionsOptions from "./mgAnion.js";
import polyAnionOptions from "./polyAnion.js";
import mgAcidAnionsOptions from "./mgAcidAnion.js"
import polyAcidAnionOptions from "./polyAcidAnion.js"

// Makes the anion list based on which included ion types are checked and which compound types are selected
const getAnionList = (displayType, isDropdownList) => {
    let isIonicChecked = domSelectors.includeIonic.checked;
    let isAcidChecked = domSelectors.includeAcids.checked;
    
    let anionOptions = [];

    // Default: If ionic types radio button is selected, use check box selection to generate anion list
    if (isIonicChecked == true) {
        // Main group ions checkbox
        if (domSelectors.mgIons.checked == true) {
            anionOptions = [...mgAnionsOptions];
        }
    
        // Transition metal ions checkbox...no additional transition metals included
        if (domSelectors.tsIons.checked == true) {
            anionOptions = [...mgAnionsOptions];
        }

        // Polyatomic ions checkbox
        if (domSelectors.polyIons.checked == true) {
            anionOptions = [...anionOptions, ...polyAnionOptions];
        }
    }

    //If acid types radio button is selected, use check box selection to generate anion list
    if (isAcidChecked == true) {
        // Main group ion checkbox
        if (domSelectors.mgIons.checked == true) {
            anionOptions = [...mgAcidAnionsOptions];
        }

        // Polyatomic ions checkbox
        if (domSelectors.polyIons.checked == true) {
            anionOptions = [...anionOptions, ...polyAcidAnionOptions];
        }
    }
    
    // If the isDropdownList flag is true, create the anion dropdown list for the 'Compound Playground'
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