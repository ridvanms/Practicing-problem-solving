def accum(st):
    result = []
    for i, ch in enumerate(st):
        result.append(ch.upper() + ch.lower() * i)
    return "-".join(result)    