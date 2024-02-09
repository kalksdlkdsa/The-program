function main() {
    
    pass2 = 1
    basic.showNumber(pass2)
    serial.writeNumber(pass2)
    pass2 = 2
    basic.showNumber(pass2)
    serial.writeNumber(pass2)
    for (let i = 0; i < 25000; i++) {
        if (i <= 1000) {
            basic.showNumber(i)
            serial.writeNumber(i)
        } else {
            break
        }
        
    }
}

let pass2 = 0
main()
