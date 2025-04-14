names = ['taco', 'amber', 'brett', 'amy']
print(names)

list_test = []


def reverse_list(list_input):
    for name_input in list_input:
        list_test.append(name_input[::-1])

    reversed_list = list(reversed(list_test))
    
    print(reversed_list)

reverse_list(names)


