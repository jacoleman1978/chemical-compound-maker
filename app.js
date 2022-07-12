import mgCationsOptions from "./modules/monatomic-ions/mg-cation.js";
import mgAnionsOptions from "./modules/monatomic-ions/mg-anion.js";
import cationOptions from "./modules/available-cations.js";
import Compound from "./modules/compound.js";

const main = () => {
    const availableCations = cationOptions();

    const displayFormulaBtn = document.querySelector("#mg-ions-btn");
    const cationSelector = document.querySelector("#cation-selector");
    const anionSelector = document.querySelector("#anion-selector");

    displayFormulaBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const cation = availableCations[cationSelector.value];
        const anion = mgAnionsOptions[anionSelector.value];
        const compound = new Compound(cation, anion);
        compound.displayFormula("#formula");
        compound.displayName("#name");
    })


}

main();