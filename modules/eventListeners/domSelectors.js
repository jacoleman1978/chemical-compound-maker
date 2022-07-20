const domSelectors = {
    // Naming rules radio buttons
    includeIonic: document.querySelector('#ionic'),
    includeAcids: document.querySelector('#acids'),
    includeMolecular: document.querySelector('#molecular'),

    // Section containers
    ionicTypesDisplay: document.querySelector('#ion-types'),
    transitionMetalDisplay: document.querySelector('#transition-metals-option'),
    nameIonDisplay: document.querySelector('#name-ion-section'),
    formulaIonDisplay: document.querySelector('#formula-ion-section'),
    compoundFromSymbolsDisplay: document.querySelector('#compound-from-symbols-display'),
    compoundPlaygroundDisplay: document.querySelector('#compound-formula-playground'),

    // Ion types to include checkboxes
    mgIons: document.querySelector('#main-group-ions'),
    tsIons: document.querySelector('#transition-metal-ions'),
    polyIons: document.querySelector('#polyatomic-ions'),

    // 'Compound Playground' ion dropdown and displays
    cationDropdown: document.querySelector('#cation-dropdown'),
    anionDropdown: document.querySelector('#anion-dropdown'),
    cationDisplay: document.querySelector('#cation-display'),
    anionDisplay: document.querySelector('#anion-display'),

    // 'Compound Playground' user answer, display answer and button
    playgroundFormulaAnswer: document.querySelector('#playground-formula-answer'),
    displayPlaygroundFormulaBtn: document.querySelector('#display-playground-formula-btn'),
    displayPlaygroundFormula: document.querySelector('#display-playground-formula'),

    // 'Ion Name' section
    newCationSymbol: document.querySelector('#new-cation-symbol'),
    newAnionSymbol: document.querySelector('#new-anion-symbol'),
    newRandomIonSymbol: document.querySelector('#new-random-ion-symbol'),
    ionSymbol: document.querySelector('#ion-symbol'),
    nameIonAnswer: document.querySelector('#name-ion-answer'),
    checkIonNameBtn: document.querySelector('#check-ion-name'),
    displayNameIonAnswer: document.querySelector('#display-name-ion-answer'),
    
    // 'Ion Formula' section
    newCationName: document.querySelector('#new-cation-name'),
    newAnionName: document.querySelector('#new-anion-name'),
    newRandomIonName: document.querySelector('#new-random-ion-name'),
    ionName: document.querySelector('#ion-name'),
    checkIonFormulaBtn: document.querySelector('#check-ion-formula'),
    formulaIonAnswer: document.querySelector('#formula-ion-answer'),
    displayFormulaIonAnswer: document.querySelector('#display-formula-ion-answer'),

    // 'Compound from Symbols' section
    newCompoundFormulaBtn: document.querySelector('#new-compound-formula-btn'),
    compoundCationSymbol: document.querySelector('#compound-cation-symbol'),
    compoundAnionSymbol: document.querySelector('#compound-anion-symbol'),
    nameCompoundAnswer: document.querySelector('#name-compound-answer'),
    displayNameCompoundAnswer: document.querySelector('#display-name-compound-answer'),
    formulaCompoundAnswer: document.querySelector('#formula-compound-answer'),
    displayFormulaCompoundAnswer: document.querySelector('#display-formula-compound-answer'),
    checkCompoundFromSymbolsBtn: document.querySelector('#check-compound-from-symbols-btn'),

    // 'Name from Formula' section
    newNameFromFormulaBtn: document.querySelector('#new-name-from-formula-btn'),
    nameFromFormula: document.querySelector('#name-from-formula'),
    nameFromFormulaAnswer: document.querySelector('#name-from-formula-answer'),
    displayNameFromFormulaAnswer: document.querySelector('#display-name-from-formula-answer'),
    checkNameFromFormulaBtn: document.querySelector('#check-name-from-formula-btn'),

    // 'Formula from Name' section
    newFormulaFromNameBtn: document.querySelector('#new-formula-from-name-btn'),
    formulaFromName: document.querySelector('#formula-from-name'),
    formulaFromNameAnswer: document.querySelector('#formula-from-name-answer'),
    displayFormulaFromNameAnswer: document.querySelector('#display-formula-from-name-answer'),
    checkFormulaFromNameBtn: document.querySelector('#check-formula-from-name-btn'),
}

export default domSelectors;