# This document covers important Python topics from beginner to advanced levels.

## Important topics

### Basic Functions

- Functions are the resuable block of code that allows us to encapsulate code in a callable block of code.
- Functions can be used multiple times simply by calling the function.
- A function can be defined using `def` keyword followed by the function name and the parenthesis containing parameters.
    ```py
        def function_name(params):{}

        # ~Note:~ `def` keyword tells the python compiler that this  line is creating a new function.
    ```
- A function can be called by using their name and passing arguments if there is any inside the parameters.
    ```py
        function_name(arguments)

        # ~Note:~ arguments are also known as actual parameters.
    ```
- A function can return a value using `return` keyword.
- The different types of arguments that can be passed in the functions are:
    - default arguments:
        - default arguments are the values that are provided while defining a functions.
        - An `=` operator is used to assign the default value to the argument.
        - The default value of an argument can be overridden if we pass the value to that parameter during the function call.
        - A function can have many default arguments, The default value should follow the non-default arguments.
    - keyword arguments:
        - Functions can also be called using keyword arguments of the form `kwarg=value`.
        - If we don't want to follow the order of the parameters in the function definition while passing an argument then this can be achieved using keyword argument.
        - The keyword argument should match the parameters in the function definition.
    - positional arguments:
        - Positional arguments are passed to the function call should be in the order of the parameters in the function definition.
    - Difference between `positional` vs `keyword` vs `default`
        ![alt text](image.png)
        - Important points to remember:
            - `default argument` should follow `non-default argument`.
            - `keyword argument` should follow `non-keyword argument`.
            - All the `keyword argument` should match the one of the parameter accepted by the function and their order doesn't matter.
            - Arguments should not be assigned with the multiple value.
            - `default arguments` are optional, we can pass if we want to override the value.
    - Variable length arguments: Variable length arguments are also known as arbitrary arguments. The arbitrary argument are useful in the situation where we don't know the number of arguments required in advance.
        - arbitrary positional arguments:
            - The `arbitrary positional` arguments is represented by `*args`.
            - The * before the parameter name allows the function to accept any number of positional arguments, which will be wrapped up into tuple.
            - Any name can be choosen for parameter it no need to `args` untill and unless it follows *.
            - Syntax:
                ```py
                    def function_name(*args):
                        # some lines of code

                    function_name(1,2,3,4) #arguments that are passed as tuples into the function
                ``` 
        - arbitrary keyword arguments
            - The `arbitrary keyword` arguments is represented by `**kwargs`.
            - The ** before the parameter name allows the function to take any number of keyword arguments, which will be wrapped up into dictionary.
            - Any name can be choosen for parameter it no need to `kwargs` untill and unless it is followed by **.
            - Syntax:
                ```py
                    def function_name(**kwargs):
                        # some lines of code
                    
                    function_name(s1=1,s2=2,s3=3,s4=4) # arguments that are passed as a dictionary into the function
                ```
- return values:
    - To return a value from the function we use `return()` method
    - The statements after the return are not executed, and they cannot be used outside the function.
    - If the return statment doesn't have any expression then NONE value is returned.
    - Multiple values can be returned from the function simply by returning comma seperated values.

### Modules and Packages ([Demo Project](#PythonProjects\simple-calculator))

#### Modules
- Modules are used to organize code in the managaeble, reusable components.
- The ways for defining a module in python are:
    - A module can be written in python itself
    - A module can be written in C and loaded dynamically at run-time like `re (regular expression)` module.
    - A built-in modules like `itertools`.
<!-- Note: focusing on the modules written in python only -->
- Creating a module:
    - A module is simple a file written that contains legitimate python code with a `.py` extension.
    - Defining functions, classes, variables is just any other python script no special syntax
- Importing a module in some other file:
    - We can import a module using `import` statement
    - To import specific attribute like function, classes, or variables from a module is `from module_name import attr1,attr2`.
    - Renaming a imported module can be done using `as` keyword.
- Module search path:
    - When trying to import module in python, the intrepreter looks for sequence of locations. This sequence of locations is know as module search path.
    - sys: it is a built-in module that contains parameter specific to the system i.e. it contains variables and methods that interact with the interpreter.
        - sys.path: It is a buil-in variable within the sys module that contains list of strings that specifies the search path/directories that the inrepreter will search in for the required module.
        - Initialization of sys.path: It can be done in three ways
            - DEFAULT: The python interpreter looks for a module within the current directory. To make the interpreter search in some other directory we simply need to change the current directory.
            - THROUGH ENVIRONMENT VARIABLES: Environment variables can be set to add additional directories to the search path. Multiple paths are seperated by `: (colon) in unix` and `, on the windows`.
            - APPENDING PATH: append() is a built-in function of sys module, that can be used with `path` variable to add specific path for the interpreter search. 
        - The first string in the sys.path is always `'' empty string` that indicates the interpreter to look in the current directory.
- dir()
    - It is a buil-in function in python which is used to list the names of the atrribute, method of an object. It returns a list of strings that contains attribute and methods name.
    - It is used by the python developers when we need to inspect the attribute, methods, modules, or class. It is particularly useful for debugging, exploring unfamiliar object or to understand the structure of a new library.
    - dir() is used in:
        - Interactive Python session (REPL or Jupyter notebooks)
        - Scripts and programms.
        - Documentation generation tools.
        - Situation where ispection of object needed.
    - Scenarios where dir() can be used:
        - Using with module: When used without arguments, dir() returns the list of names in the current local scope, else when module name is passed as an argument we get the list of all the attributes and methods in that module
        - Using with class: It lists all the class attributes and methods, including the inherited ones.
        - Using with instance: lists all the instance attributes and methods, including those that are inherited from the class.
- `__name__ ` variable in python:
    - The `__name__` variable is a special built-in variable that specifies how the module is being used. It can have two different values `__main__` or the module name where it has been imported.
    - It is used to execute the python code directly as well as imported as a module
- Reload a module:
    - Restart the interpreter
    - Use a function called reload() from importlib

#### Packages
- A package is a python way of organizing related modules into a directory hierarchy
- A package allows hierarchial structuring of the modules namespace using dot notation.
- Creating a package:
    - A package is essentially a directory containing an `__init.py__` file along with the other module files.
    - The `__init.py__` file can be empty but it signifies that the directory should be treated as a package.
- Importing from a package
    - modules can be imported from package using dot notation.
    - from <package_name> import <module_name>
- Using `__init__.py__` file:
    - It is a special python file that is used to mark a directory as a pacakge. Without this file python doesn't recognize directory as a package and won't be able to import modules from that directory.
    - The `__all__` variable in a pacakage's `init.py` file contains the list of string that specifies which modules can be imported when `from <package_name> import *`  is used.
- Packages can contain sub packages, allowing deeper hierarchial structure.


### Iterate over list
  
  - ***using for loop:***
    - In python there is no C style 'for' loop, i.e., `for(int i=0;i<n;i++)`
    - Python for loop is used for sequential traversal, to iterate over an iterable like string, tuple, list, set, or dictionary
    - Syntax:
        ```py
            for var in iterable:
                statement 1
                statement 2
                .
                .
                statement n
        ```
  - ***Using for loop and range():***
    - The range() function return sequence of numbers in a given range.
    - Syntax:
        ```py
            '''
            Syntax for: range(start, stop, step):
                1. start [optional]: start value of the sequence
                2. stop: next value after the end value of the sequence
                3. step [optional]: denoting the difference between any two numbers in a sequence
            '''
            for i in range(number):
                statement 1
                statement 2
                .
                .
                statement n
        ```
  - ***Using for loop with zip():***
    - The zip() function is used to iterate over two lists in parallel.
    - Syntax:
        ```py
            for array1_item, array2_item in zip(array1, array2):
                statement 1
                statement 2
                .
                .
                statement n
        ```
  - ***Using nested for loops:***
    - Syntax:
        ```py
            for var1 in sequence1:
                for var2 in sequence2:
                    statement 1
                    statement 2
                    .
                    .
                    statement n
                statement 1
                .
                .
                statement n
        ```
  - ***Using enumerate() method:***
    - The enumerate() method adds a counter to an iterable and returns it in the form of an enumerating object.
    - The enumerated object can then be directly used in 'for loops' or convert it into list of tuples using list().
    - Syntax: 
        ```py
            enumerate(iterable, start = 0)
            '''
                iterable: any object that supports iteration
                start: the index value from which the counter is to be started, by default it is 0
            '''
        ```
  - ***Using while loop:***
    - Python while loop is executed a block statement repeatedly until a given con dition is satisfied.
    - When the condition becomes false the line immediately after the while loop is executed.
    - While loop falls under the category of *indefinite iteration*, it means number of times the loops should be executed is not specified explicitly.
    - While loop is used when the number of itereation is unknown or else for loop should be used.
    - Syntax:
        ```py
            while expression:
                statement 1
                statement 2
                .
                .
                statement n
        ```
  - ***Using list comprehension:***
    - List comprehension consists of bracket containing the expression.
    - It will translate traditional iterating approach to simpler expression.
    - Syntax:
        ```py
            newList = [expression(element) for element in oldList if condition]
        ```
  - ***Using the map() function:***
    - Map() function is used to get the map object as a result of applying the function to each item of a given iterable.
    - The map object can be converted to a list using list() method.
    - Syntax:
        ```py
            map(function, iterable)
            '''
                function: it is a function to which the map passes each element of the given iterable.
                iterable: such as list, tuple, dict, etc.
                
                imp: check the example below
            '''
            # Return double of n
            def addition(n):
                return n + n
            
            # We double all numbers using map()
            numbers = (1, 2, 3, 4)
            result = map(addition, numbers)
            print(list(result)) #returns [2, 4, 6, 8]
        ```
