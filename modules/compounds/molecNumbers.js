// Used for naming and formulas of molecular compounds. Greek prefixes are used for names.
const molecNumbers = (number) => {
    if (typeof number == 'string') {
        switch(number) {
            case 'mono':
                return 1
            case 'di':
                return 2
            case 'tri':
                return 3
            case 'tetra':
                return 4
            case 'penta':
                return 5
            case 'hexa':
                return 6
            case 'hepta':
                return 7
            case 'octa':
                return 8
            case 'nona':
                return 9
            case 'deca':
                return 10
            default:
                return 0
        }
    } else if (typeof number == 'number') {
        switch(number) {
            case 1:
                return 'mono'
            case 2:
                return 'di'
            case 3:
                return 'tri'
            case 4:
                return 'tetra'
            case 5:
                return 'penta'
            case 6:
                return 'hexa'
            case 7:
                return 'hepta'
            case 8:
                return 'octa'
            case 9:
                return 'nona'
            case 10:
                return 'deca'
            default:
                return ''
        }
    }
}

export default molecNumbers;