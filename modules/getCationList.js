import domSelectors from "./domSelectors.js";
import mgCationsOptions from "./monatomic-ions/mgCation.js";
import tsCationsOptions from "./transition-metal-ions/tmCations.js";

const getCationList = (displayType) => {
    let cationOptions = [];
    
    if (domSelectors.mgIons.checked == true) {
        cationOptions = [...mgCationsOptions]
    }

    if (domSelectors.tsIons.checked == true) {
        cationOptions = [...cationOptions, ...tsCationsOptions]
    }
    
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

    return cationOptions
}

export default getCationList;