function main () {
    pass = 1
    basic.showNumber(pass)
    serial.writeNumber(pass)
    pass = 2
    basic.showNumber(pass)
    serial.writeNumber(pass)
    for (let i = 0; i <= 24999; i++) {
        if (i <= 1000) {
            basic.showNumber(i)
        } else {
            break;
        }
    }
}
let pass = 0
main()
