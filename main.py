def main():
    global pass2
    pass2 = 1
    basic.show_number(pass2)
    serial.write_number(pass2)
    pass2 = 2
    basic.show_number(pass2)
    serial.write_number(pass2)
    for i in range(25000):
        if i <= 1000:
            basic.show_number(i)
            serial.write_number(i)
        else:
            break
pass2 = 0
main()