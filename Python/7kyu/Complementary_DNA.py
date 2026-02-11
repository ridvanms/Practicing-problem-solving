def DNA_strand(dna):
    comp = {
        "A":"T",
        "T":"A",
        "C":"G",
        "G":"C"
    }
    return "".join(comp[ch] for ch in dna)