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
