def getNumber(prompt):
    while True:
        try:
            value = float(input(prompt))
            return value
        except:
            return "Please enter a number!!"
