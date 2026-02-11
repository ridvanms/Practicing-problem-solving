def square_digits(num):
    result = ""
    for x in str(num):
        result += str(int(x)**2)
    return int(result)