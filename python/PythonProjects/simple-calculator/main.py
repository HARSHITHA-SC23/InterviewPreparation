from calculator import advance_ops, basic_ops, utils

def display_menu():
    print("============================================")
    print("SIMPLE CALCULATOR USING MODULES & PACKAGES!!")
    print("============================================")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")
    print("5. Power")
    print("6. Square Root")
    print("7. Factorial")
    print("8. Logarithm")
    print("9. Exit")

def main():
    while True:
        display_menu()
        choice = input("SELECT ANY ONE FROM THE BELOW OPTIONS: ")

        if choice == '1':
            num1 = utils.getNumber("Enter first number: ")
            num2 = utils.getNumber("Enter second number: ")
            print(f"The sum of two numbers is: {basic_ops.add(num1, num2)}")
        elif choice == '2':
            num1 = utils.getNumber("Enter first number: ")
            num2 = utils.getNumber("Enter second number: ")
            print(f"The difference between two numbers is: {basic_ops.subtract(num1, num2)}")
        elif choice == '3':
            num1 = utils.getNumber("Enter first number: ")
            num2 = utils.getNumber("Enter second number: ")
            print(f"The product of two numbers is: {basic_ops.multiply(num1, num2)}")
        elif choice == '4':
            num1 = utils.getNumber("Enter first number: ")
            num2 = utils.getNumber("Enter second number: ")
            print(f"The quotient of two numbers is: {basic_ops.divide(num1, num2)}")
        elif choice == '5':
            base = utils.getNumber("Enter first number: ")
            exponent = utils.getNumber("Enter second number: ")
            print(f"The exponential value for numbers is: {advance_ops.power(base, exponent)}")
        elif choice == '6':
            num = utils.getNumber("Enter number: ")
            print(f"The square of a numbers is: {advance_ops.square_root(num)}")
        elif choice == '7':
            num = utils.getNumber("Enter number: ")
            print(f"The factorial of two numbers is: {advance_ops.factorial(num)}")
        elif choice == '8':
            num = utils.getNumber("Enter number: ")
            print(f"The Logarithemic value of a numbers is: {advance_ops.logarithm(num)}")
        elif choice == '9':
            print("The calculater is stopped")
            break
        else:
            print("Please enter a valid choice")

if __name__ == '__main__':
    main()
        

