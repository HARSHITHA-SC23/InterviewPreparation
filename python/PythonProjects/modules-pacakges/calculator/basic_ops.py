def add(*args):
    sum=0
    for num in args:
        sum += num
    return sum

def subtract(a,b):
    return a-b

def multiply(*args):
    mul = 0
    for num in args:
        mul *=num
    return mul

def divide(a,b):
    if b==0:
        return "Divider is Zero"
    else:
        return a/b