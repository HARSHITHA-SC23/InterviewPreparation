# This document covers JavaScript from beginner to advanced levels.

## JavaScript Introduction

<b> Definition: </b> 
- JavaScript is a scriptimg language. It is a high level, Object-oriented, multi-paradigm, programming language. 
- JavaScript is called multi-paradigm because the language is very dynamic in nature and it can solve problem using different programming styles such as OOP, procedural, functional etc.

<b> Role of JavaScript: </b>
- JavaScript is responsible for for adding dynamic and interactive effect in the webpages.
- JavaScript can be used on both client-side and server-side.
- On top of JavaScript many frameworks were built such as
    - <u>Frontend</u>: React JS, Next JS etc.,
    - <u>Backend</u>: Express JS, Node JS, Nest JS etc.,
    - <u>Mobile</u>: React-nativd etc.,
    - <u>Desktop</u>: ion etc.,

<b> History of JavaScript: </b>
- The first version of JavaScript was invented in the year 1995 by Brendan Eich and it was called Mocha.
- In 1996 Mocha changed to LiveScript and later changed to JavaScript.
- JavaScript has nothing to do with Java. It was named liked that just to attract Java Developers.
- With a need to standardize the language, ECMA releases ECMAScript (ES1), The first official JavaScript (ECMAScript is the standard, JavaScript the language in practice).
- In 2009 ES5 is released with lots of great new features.
- In 2015 ES6 was released and it was the biggest update to the language ever!

## JavaScript Basics - Part 1

<b>Conventions for naming a Variable: </b>
- We need to follow camelcase for naming (ex: namingVariables).
- Variable name should not start with number or any special character.
- Variable name can only contain alphabets, numbers, underscore and dollar sign.
- Reserved keywords cannot be used to  name the variable.
- Const variable which do not change its value will be written with all uppercase letters.

<b>Data Types: </b>
- Everything in JavaScript is either object, array or primitive type.
- Since JavaScript has dynamic typing data types of the value declared are determined automatically.
- In JavaScript value has a type not the variable.
- Different types of datatypes are:
    - Number: JavaScript are always floating point numbers.
    - String: Sequence of characters.
    - Boolean: Logical type that can take only true or false.
    - undefined: Value taken by a variable that is not yet defined or Empty value.
    - Null: Also means empty value
    - Symbol (ES2015): Value that is unique and cannot be changed.
    - BigInt (ES2020): Larger integers that number type can hold.
- Null vs Undefined:

    | Null | Undefined |
    |----------|----------|
    | The primitive datatype null indicates the intentional absence of a value | The primitive datatype undefined automatically assigned by the JavaScript indicating unintentional absense of a value |
    | The null value can be assigned to a variable in all cases where the undefined value would be assigned but is not needed.| JavaScript assigns undefined<br>&bull; when the variable is declared but not initialized<br>&bull; to a non-existent property of an object<br>&bull; to a return without any explicit return value<br>&bull; to a parameter when a function is called without providing an argument for that parameter.<br>&bull;when you try to access an index in an array that does not exist.|
    |In numeric context null is evaluated as 0| In numeric context undefined is evaluated as NaN|
    |The type of null is object (Because of historical error)| The type of undefined is undefined|

<b>Let, Const, and Var: </b>
- Let:
    - The let keyword was introduced in ES6(2015).
    - The let keyword is block scoped, which means it can only be accessed within the block in which they are declared.
    - The let variable must be declared before use as it is not hoisted.
    - The let variable cannot be redeclared in the same scope.
- Const:
    - The const keyword was introduced in ES6(2015).
    - The keyword is block scoped, which means it can only be accessed within the block in which they are declared.
    - The const variable must be declared before use as it is not hoisted.
    - The const variable immutable hence it cannot be redelared, reassigned, or modify in the same scope.
- var:
    - The variables are used till 2015 before let and const. It is recommended to use var to support old browsers only.
    - The var keyword is function scoped, which means it can be accessed inside the function in which they are declared  allowing them to leak outside the block{}.
    - The var variable can be redeclared.
    - The var variable are hoisted.

<b>Operators: </b>JavaScript operators are the symbols that are used to perform operations on the operands. The different types of operators are:
- Arithmetic Operators:
    | Operator | Description           | Example              |
    |----------|-----------------------|----------------------|
    | +        | Addition              | &bull;10 + 20 = 30<br>&bull;       a+b = ab(concatenate in terms of string)      |
    | -        | Subtraction           | 20 - 10 = 10         |
    | *        | Multiplication        | 10 * 20 = 200        |
    | **       | Exponential           | 2**3 => 2 to the power of 3 = 8|
    | /        | Division              | 20 / 10 = 2          |
    | %        | Modulus (Remainder)   | 20 % 10 = 0          |
    | ++       | Increment             | var a = 10; a++; Now a = 11 |
    | --       | Decrement             | var a = 10; a--; Now a = 9  |
- Comparision Operators:
    | Operator | Description                 | Example            |
    |----------|-----------------------------|--------------------|
    | ==       | Is equal to                 | &bull;10=='10' = true<br>&bull;10 == 20 = false   |
    | ===      | strict equality/Identical (equal and of same type) | &bull;10=='10' = false<br>&bull;10 == 20 = false  |
    | !=       | Not equal to                | 10 != 20 = true    |
    | !==      | Not Identical               | 20 !== 20 = false  |
    | >        | Greater than                | 20 > 10 = true     |
    | >=       | Greater than or equal to    | 20 >= 10 = true    |
    | <        | Less than                   | 20 < 10 = false    |
    | <=       | Less than or equal to       | 20 <= 10 = false   |
- Logical Operators:
    | Operator | Description   | Example                   |
    |----------|---------------|---------------------------|
    | &&       | Logical AND   | (10 == 20 && 20 == 33) = false |
    | \|\|     | Logical OR    | (10 == 20 \|\| 20 == 33) = false |
    | !        | Logical Not   | !(10 == 20) = true         |
- Assignment Operators:
    | Operator | Description         | Example                  |
    |----------|---------------------|--------------------------|
    | =        | Assign              | 10 + 10 = 20             |
    | +=       | Add and assign      | var a = 10; a += 20; Now a = 30 |
    | -=       | Subtract and assign | var a = 20; a -= 10; Now a = 10 |
    | *=       | Multiply and assign | var a = 10; a *= 20; Now a = 200 |
    | /=       | Divide and assign   | var a = 10; a /= 2; Now a = 5 |
    | %=       | Modulus and assign  | var a = 10; a %= 2; Now a = 0 |
- Special Operators:
    | Operator | Description                                                                                                     |
    |----------|-----------------------------------------------------------------------------------------------------------------|
    | ?:       | Conditional Operator returns value based on the condition. It is like if-else.                                |
    | ,        | Comma Operator allows multiple expressions to be evaluated as single statement.                                |
    | delete   | Delete Operator deletes a property from the object.                                                            |
    | in       | In Operator checks if object has the given property.                                                          |
    | instanceof | Checks if the object is an instance of given type.                                                            |
    | new      | Creates an instance (object).                                                                                 |
    | typeof   | Checks the type of object.                                                                                    |
    | void     | It discards the expression's return value.           |
- [Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table)

<b>Template Literals: </b>
- In template literals strings are denoted using backticks(``).
- They are also used hold the placeholders, that are indicated by '\$' and {} (${placeholder_variable_name}).
- Template literals helps to avoid the use of escape sequence \n and \t.
- Combination of expression and string becomes easier.

<b>Type Conversion and Type Coercion</b>
- Type Coercion:
    - It refers to automatic conversion of values from one data type to another data type.
    - It typically occurs when we attempt operations or comparisons on values that are of different data types.
    - Type coercion occurs in the following situation:
        - Number to string coercion.
        - String to number coercion.
        - Comparision corecion. 
- Type conversion:
    - It is also called as type casting, it refers to explicit transformation of value from one data type to another.
    - It involves intentional changing of data types of values using built in functions.
    - Type conversion can be observed in the following situation:
        - Converting string to a number using built-in function.
        - Converting number to a string using built-in function.
        - Converting boolean to a string/number using built-in function.

<b> Truthy vs Falsy values and Strict equality(=== or !==) vs Loose equality (== or !=): </b>
- Falsy values:
    - These are values that are not inherently false but evaluate to false when converted to a boolean.
    - There are 5 falsy values: 0, '', undefined, null,NaN.
- Truthy values:
    - The data other than falsy values are truthy values.
- Strict Equality (=== or !==):
    - It does not perform type coercion before comparing
        - 18 === '18' returns 'false' 
- Loose Equality (== or !=):
    - It performs type coercion before comparing
        - 18 == '18' returns 'true'

<b>Strict Mode: </b>
- Strict mode is a feature introduced in ES5 that allows us to write JavaScript code that follows stricter rules.
- When strict mode is on that JavaScript engine enforces additional constraints.
- To enable strict mode:
    - For the entire file: "use strict" string at the top of the file.
    - For a particular function: "use strict" string at the top of the function.
- Things not allowed in JavaScript are:
    - Undeclared variables and Objects are not allowed.
    - Duplicating the parameter name is not allowed.
    - Deleting an object using the delete operator will throw a SyntaxError.
    - Attempting to assign a value to a property that has been defined as non-writable using Object.defineProperty or Object.freeze will throw a TypeError.
    - Assigning to a getter only is not allowed.
    - Assigning to a new property on a non-extensible object is not allowed.
    - Octal literals (numbers starting with a leading zero) are not allowed in strict mode and will throw a SyntaxError.
    - The variable name arguments and eval are not allowed.
    - The keywords that are reserved for future use are not allowed to be used as variable or function names in strict mode.

## JavaScript Basics - Part 2

<b>Functions: </b>
- Functions are set of statements that takes some input, performs specific task and returns the output.
- Functions are executed when something invokes or calls it.
- Function invokation can happen in the below scenario:
    - Triggered by an event.
    - Explicitly called from a JavaScript code.
    - Automatically executed such as self invoking functions.
- There are three ways for writing function in JavaScript they are:
    - Function Declaration
    - Function Expression
    - Arrow Function

<b>Function Declaration: </b>
- Function declaration is also known as function definition.
- It begins with the keyword 'function' followed by a unique function name, list of parameters enclosed within '()', and list of function statements enclosed within '{}'.
- The function variables are hoisted, which means that the function can be invoked before the declaration.
- syntax:
    ```js
        function function_name(parameter1, parameter2,..) {
            statement 1,
            statement 2,
            .
            .
            statement n
        }
    ```

<b>Function Expression: </b>
- An easy-to-remember rule: the function declaration in a statement always starts with the keyword function. Otherwise it's a function expression.
- The function expression begins with a keyword 'function', followed by an optional function name, list of parameters enclosed within '()' and followed by list of statements enclosed within '{}'.
- Thefunction expression creates a function object that can be used in the following situation:
    - Assigned to a variable as an object:
        ```js
            const variable_name = 
            function optional_funct_name(parameter1, parameter2,..) {
                statement 1,
                statement 2,
                .
                .
                statement n
            }
        ```
    - Create a method inside/of an object:
        ```js
            sum:
            function optional_funct_name(parameter1, parameter2,..) {
                statement 1,
                statement 2,
                .
                .
                statement n
            }
        ```
    - Use the function as a callback:
        ```js
            array.map(function(){.....})
        ```

<b>Arrow Function: </b>
- An arrow function is defined using a pair of '()' that contains list of parameters, followed by a fat arrow =>, and list of statements enclosed within '{}'.
- When we have a single parameter '()' can be ommitted.
- When we have a single statement '{}' can be ommitted.
- The arrow function is anonymous but the engine idenftify by the variable name it is holding.
- Argument object is not available in JavaScript Arrow function.
- Syntax:
    ```js
        const variable_name = (parameter1, parameter2,...) => {
            statement 1,
            statement 2,
            .
            .
            .statement n
        }
    ```

<b>Array: </b>
- Array is a datastructure which allows us to store and manipulate multiple value assigned to a single variable.
- An array can store values of any data type at a time.
    - An array is a special kind of object.
    - Since JavaScript is dynamically typed language, allowing arrays to store values of different type.
- Arrays in JavaScript is zero-indexed.
- Array can be declared in two ways:
    - Using Array literal(square brackets):<br>
        example : const alphabets = ['a','b','c'];
    - Usimg Array constructore(new Array() method):
        example : const alphabets =  new Array('a','b','c');

<b>Array methods: </b>

#### Basic Array Methods

- ***length()***: It returns the length of an array.
    ```js
        const numbers = [1,2,3,4,5,34,44,56];
        console.log(numbers.length);  //returns 8
    ```
- ***toString()***: It converts array to a single string seperated by comma.
    ```js
        const numbers = [1,2,3,4];
        console.log(numbers.toString());  //returns 1,2,3,4
    ```
- ***at()***: It was introduced in ES2022. It returns an indexed element from an array. 
    ```js
        const alphabets = ['a','b','c','d'];
        console.log(alphabets.at(2)); //returns c
        // at() method is same as []
        console.log(alphabets[2]); //returns c
    ```
- ***join()***: The join method joins all the elements into a string. It behave just like toString() but in join() we can mention a seperator.
    ```js
        // Seperator we are using is *
        const numbers = [1,2,3,4];
        console.log(numbers.join('*')); //return 1*2*3*4
- ***pop()***: It removes the last element from an array and returns the popped out element.
    ```js
        const numbers = [1,2,3,4];
        console.log(numbers.pop()); //returns 4
    ```
- ***push()***: It adds the new element to an array at the last and returns the new array length
    ```js
        const numbers = [1,2,3,4];
        console.log(numbers.push(10)); //returns 5
    ```
- ***shift()***: It removes the first element from an array, pushes all the other elements to the lower index and returns the shifted out element.
    ```js
        const numbers = [1,2,3,4];
        console.log(numbers.shift()); //returns 1
        console.log(numbers); //returns [2,3,4]
    ```
- ***unshift()***: It adds the new element at the beginning of an array, pushes all the other elements to the higher index and returns the new array length.
    ```js
        const numbers = [1,2,3,4];
        console.log(numbers.unshift(10)); //returns 5
        console.log(numbers); //returns [10,1,2,3,4]
    ```
- ***concat()***: The concat() method doesn't change the existing array but It returns a new array by merging(concatinating) existing arrays. The concat() method can take n number of arguments as well as string
    ```js
        const array1 = [1,2,3,4];
        const array2 = [4,5,6,7];
        const string = 'concatinated';
        console.log(array1.concat(array2)); //returns [1,2,3,4,5,6,7];
        console.log(array1.concat(string)); // returns [1,2,3,4,'concatinated'];
    ```
- ***flat()***: Flattening an array is the process of reducing the dimension of an array. It is helpful when we want to convert multidimensional array into one dimensional array. The flat method creates a new array and it doesn't overwrites the existing array
    ```js
        const myArr = [[1,2],[3,4],[5,6]];
        const newArr = myArr.flat();
        console.log(newArr); // returns [1,2,3,4,5,6]
    ```
- ***splice()***
- ***slice()***

#### Array Search Methods

- ***indexOf()***: It searches an entire array for the particular value and returns the index of that value in an array. It return -1 if there is no element present. 
    ```js
        // syntax
        array.indexOf(item, start);
        /*
            1. item: Required, It represents the value to search the array.
            2. start: Optional, It represents from where we need to start the search. If there is negative value then the search starts from the end
        */
        const numbers = [1,2,2,3,4]
        console.log(numbers.indexOf(3)+1) //returns 3
        console.log(numbers.indexOf(7)) //returns -1
        console.log(numbers.indexOf(2)+1) //returns 2 (first encounter value index)
    ```
- ***lastIndexOf()***: It is same as the indexOf() but returns the index of last occurence of the values.
    ```js
        const alphabets = ['a','b','c','a','d']
        console.log(alphabets.lastIndexOf('a')+1) //returns 4
    ```
- ***includes()***: It returns true if the element present in the array or else it returns false. It allows us to check for NaN values.
    ```js
        const alphabets = ['a','b','c','a','d',NaN]
        console.log(alphabets.includes('a')) //returns true
        console.log(alphabets.includes(NaN)) //returns true
    ```
- ***find()***: It returns the first element in an array which satisfies the specific condition. the find() methods executes the function for each element until it finds the element which satisfies the condition.
    ```js
        function myFunction(value, index, array) {
        return value > 18;
        }
        /* 
            myFunction takes three values
            1. value: the element which we will compare against a specific condition.
            2. index: index of the value
            3. array: entire array that find is called upon
        */

        const numbers = [4, 9, 16, 25, 29];
        let first = numbers.find(myFunction);
        console.log(first) //returns 25
    ```
- ***findIndex()***: It returns the index of the first element in an array which satisfies the specific condition. the findIndex() methods executes the function for each element until it finds the element which satisfies the condition.
    ```js
        function myFunction(value, index, array) {
        return value > 18;
        }
        /* 
            myFunction takes three values
            1. value: the element which we will compare against a specific condition.
            2. index: index of the value
            3. array: entire array that find is called upon
        */

        const numbers = [4, 9, 16, 25, 29];
        let first = numbers.findIndex(myFunction);
        console.log(first) //returns 3
    ```
- ***findLast()***: This method starts searching from the end of an array and returns the first elements which satisfies the condition.
    ```js
        const temp = [27, 28, 50, 30, 40, 42, 35, 30];
        let high = temp.findLast(x => x > 40);
        console.log(high) //returns 42
    ```
- ***findLastIndex()***:This method starts searching from the end of an array and returns the index of the first elements which satisfies the condition.
    ```js
        const temp = [27, 28, 50, 30, 40, 42, 35, 30];
        let high = temp.findLast(x => x > 40);
        console.log(high) //returns 5
    ```

#### Array Iteration Methods

- ***forEach()***: 
    ```js

    ```
- ***map()***: 
    ```js

    ```
- ***flatMap()***: 
    ```js

    ```
- ***filter()***: 
    ```js

    ```
- ***reduce()***: 
    ```js

    ```
- ***reduceRight()***: 
    ```js

    ```
- ***spread()***: 
    ```js

    ```
- ***from()***: 
    ```js

    ```
- ***with()***: 
    ```js

    ```