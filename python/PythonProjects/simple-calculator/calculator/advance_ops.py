import math

def power(base,exponent):
    return base ** exponent

def square_root(number):
    if number < 0:
        return "Cannot compute square root of negative number"
    else:
        return math.sqrt(number)
    
def factorial(number):
    if number < 0:
        return "Cannot compute factorial of negative number"
    else:
        return math.factorial(number)

def logarithm(number):
    if number < 0:
        return "Cannot compute log for negative number"
    else:
        return math.log(number)