import domSelectors from "./domSelectors.js";
import mgAnionsOptions from "./monatomic-ions/mgAnion.js";

const getAnionList = (displayType, isDropdownList) => {
    let anionOptions = [];
    
    if (domSelectors.mgIons.checked == true) {
        anionOptions = [...mgAnionsOptions];
    }

    if (domSelectors.tsIons.checked == true) {
        anionOptions = [...mgAnionsOptions];
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