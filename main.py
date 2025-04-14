def __init__():
    name = "taco"

    test_list = ["taco", "fussy", "sparkle", "mika"]

    print(type(test_list))

    if name:
        return name
    else:
        return null

print(__init__())

def test():
    value = "test"

    match value:
        case 400:
            print("Success")
        case 600:
            print("Failed")
        case _:
            print("Faulty value.")




test()
