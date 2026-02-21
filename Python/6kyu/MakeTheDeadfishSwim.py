# Create a parser to interpret and execute the Deadfish language.

# Deadfish operates on a single value in memory, which is initially set to 0.

# It uses four single-character commands:

# i: Increment the value
# d: Decrement the value
# s: Square the value
# o: Output the value to a result array
# All other instructions are no-ops and have no effect.

# Examples
# Program "iiisdoso" should return numbers [8, 64].
# Program "iiisdosodddddiso" should return numbers [8, 64, 3600].


def parse(data):
    trackValue = 0
    resultArr = []
    
    
    for ch in data:
        if ch == "i":
            trackValue += 1
        elif ch == "d":
            trackValue -= 1
        elif ch == "s":
            trackValue = trackValue**2
        elif ch == "o":
            resultArr.append(trackValue)
        else:
            continue
    return resultArr