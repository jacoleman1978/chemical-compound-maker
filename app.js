import mgCations from "./data/mg-cation.js";
import mgAnions from "./data/mg-anion.js";
import Compound from "./modules/compound.js";

const main = () => {
    const displayFormulaBtn = document.querySelector("#mg-ions-btn");
    const cationSelector = document.querySelector("#cation-selector");
    const anionSelector = document.querySelector("#anion-selector");

    displayFormulaBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const cation = mgCations[cationSelector.value];
        const anion = mgAnions[anionSelector.value];
        const compound = new Compound(cation, anion);
        compound.displayFormula("#formula");
        compound.displayName("#name");
    })


}

main();