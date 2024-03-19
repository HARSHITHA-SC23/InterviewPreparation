# This file contains JavaScript Interview questions, their corresponding answers

[JavaScript Website to understand callstack webapis callback](http://latentflip.com/loupe/)
[How JavaScript works](https://dev.to/bipinrajbhar/how-javascript-works-under-the-hood-an-overview-of-javascript-engine-heap-and-call-stack-1j5o)

## Basics of JavaScript

1. What is JavaScript?
    - JavaScript is scripting language.
    - It is used for both client side and serverv side.

2. Difference between var, let, and const
    - var: variables are "function scoped", which means it can be accessible inside the function only in which they are declared. since var is not blocked scope allowing them to leack outside of block {}.
    - let: let variables are "block scoped", which means it can only be accessible within the block in which they are declared. unlike var the let variables cannot be redeclared.
    - const: const variables are also "block scoped and immutable", which means it can only be acsessible within the block in which they are declared and also they cannot reassigned, redeclared or modify.

3. How does hoisting works in JavaScript?
    - Hoisting is a concept of extracting variables and function even before the initialization/assigning of values without getting any errors
    - Hoisting happens in the first phase that is during memory creation.
    - In JavaScript hoisting is by default move all the variables and functions to the top of the scope before code execution.
    - JavaScript only hoists declaration not the initialization.

4. Describe the concept of closures.
    - A closure gives you access to outer function scope from the inner function scope
    - ```js
        function makeAdder(x) {
            return function (y) {
                return x + y;
            };
        }

        const add5 = makeAdder(5);
        const add10 = makeAdder(10);

        console.log(add5(2)); // 7
        console.log(add10(2)); // 12

        // Data encapsulation example
        function createCounter() {
            let count = 0; // This variable is private to the createCounter function

            function increment() {
                count++;
                console.log("Count is now: ", count);
            }
            function decrement() {
                count--;
                console.log("Count is now: ", count);
            }
            return {
                increment,
                decrement
            };
        }

        const counter = createCounter();
        counter.increment(); // Output: Count is now:  1
        ```
    - In the above code we have a function "makeAdder" which acts as a function factory.
    - It takes a single argument and return one function, which in turn takes another argument y and returns the sum of x and y.
    - In the above example code the function factory creates two new function, one that add 5 to the argument and another 10.
    - One of the usecase for using closure function is to create a callback function where a function is passed as an argument. The closure helps callback to access the surrounding context providing  more flexibility.
    - Another usecase for using closure is that it allows us to create a private variables and methods hiding them from the global scope. This helps in preventing naming conflicts and provides a way to implement data hiding.

5. What is the difference between == and ===?
    - ==: It is known as comparison/equality operator. It is used to check equality between two variables, but it ignores the datatype of the variable. It compares the variables after doing the necessary type conversion.
    - ===: It is known as comparision/strict equality operator. It is used to check the equality between two variables but it also checks the datatype of the variables. If the variables having different datatype then it returns false.

6. How do you check the type of a variable in JavaScript?
    - Using the "typeof" operator.

7. What is the use of the this keyword in JavaScript?
    - "This" keyword refers to an object of the function that is currently executing.
    - If the function is referenced to a regular function then this references the global object.
    - If the function is referenced to a method in an object then this reference the object itself.

8. Explain the difference between function declaration and function expression.
    - Function declaration:
        - The function declartion is a regular function that declares a function with a function keyword and it must have a function name.
        - Function declaration does not require any variable assignment.
        - These are executed before any other code.
        - Use function declaration when we want to create a function in the global scope.
        - Function declaration are hoisted.
    
    - Function expression:
        - The function expression is similar to function declaration but without a function name.
        - Function expression requires a variable assignment.
        - Function expression loads and executes only when the interpreter reaches that particular line of code.
        - Use function expression when we want to limit the availability of the function.
        - Function expression are not hoisted.

9. How does the setTimeout and setImmediate() function work?
    - The global setTimeout() method executes a function or piece of code once the timer expires.
    - setImmediate() is typically used when you want to execute a callback as soon as possible, but after the current operation completes, without blocking the event loop.

## Functions and Scopes

1. What is a callback function?
    - A callback is a function that is passed as an argument to another function.
    - This technique allows function to call another function.
    - A callback function can run after another function has finished.
    - Callback function are really used in asynchronus function where one function has to wait for another function to complete.

2. Explain the concept of a pure function.
    - The pure function always return the same result if the same argument is passed.
    - It doesnot depend on any state or data change during the execution of the program.

3. Describe the differences between function.call, function.apply, and function.bind.
    - function.call, function.apply, and function.bind all are used to control the context (the value of this) and arguments passed to a function when it is invoked.
    - function.call:
        - The call method is used to call a function and specify "this" value for the function.
        - It takes 2 arguments: The value that needs to be used as the "this" value inside the function and optional list of arguments that needs to be passed.

    - function.apply:
        - The apply method is similar to call method but instead of specifying the arguments individually, it takes an array of arguments that needs to be passed inside the function along with "this" value.

    - function.bind:
        - The bind method is used to create a new function from the orginal function along with new "this" value.
        - The bind method requires to invoke the newly created function seperately.
    
    ```js
        function greeting(greet) {
            console.log(greet + ' ' + this.name);
        }

        const person1 = {
            name = 'john'
        }

        const person2 = {
            name = 'doe'
        }

        greeting.call(person1, 'hello')  // hello john
        greeting.apply(person2, ['hi'])  // hi doe

        const bindGreeting = greeting.bind(person1);
        bindGreeting('hello')  //hello john
    ```
4. What is the purpose of argument object in JavaScript?
    - The argument object is like a local variable that is available within all the non-arrow functions.
    - The argument object provides a way to access the arguments dynamically even if the function is not defined with a spefic number of parameter.
    ```js
        function sum() {
            let sum = 0;
            for(let i=0;i<arguments.length;i++){
                sum+=arguments[i];
            }
            console.log(sum); //prints 16
        }
        sum(1,2,3,4,6)
    ```

5. What is the difference between a shallow copy and a deep copy?
    - Shallow copy:
        - A shallow copy creates new object or or an array and copies references to the elements(not the value but the address) from the object or array.
        - The changes to the shallow copy effects the orginal copy.
    
    - Deep copy:
        - A deep copy creates completely new array or an object and copies both the address and the data.
        - The changes to the deep copy won't effect the orginal copy because it doesn't share any data with the orginal array.

6. How does the call stack work in JavaScript?
    - The callstack in JavaScript is crucial concept in runtime environment.
    - It operates as a LIFO (Last In First Out) data structure, meaning that the last function to be called is the first function to be resolved.

7. Explain the concept of function currying.
    - Currying is functional programming technique that breaks down the function which takes multiple arguments into series of function that takes one argument each.
    - Each function returns another function until the final result is achieved.
    - ```js
        // case 01: for finite number of arguments
        function add(x) {
            return function(y) {
                return function(z){
                    return x+y+z
                }
            }
        }

        console.log(add(2)(3)(4)) //9

        //case 02: for n number of arguments
        function add(a){
            return function(b){
                if(b){
                    return add(a+b)
                }
                return a
            }
        }
        console.log(add(2)(3)(4)(5)()) //14, () necessary to invoke the final call or else it will return anoymous function

        //case 03: two arguments in a single call
        function add(a,b){
            return function(c,d){
                return a+b+c+d
            }
        }
        console.log(add(2,3)(4,5)) //14

        ```   

8. What is callback hell and how to over come?
    - Callback hell is nested callbacks stacked one after the another forming a pyramid.
    - Every callback depends or wait for the previous callback.
    - The callback hell can be overcome by following methods:
        - using promises
        - using async/await
        - using best practices like modularizing code or writing proper comments
        - split callback functions into smaller functions.

## DOM Manipulation and Events

1. What is the DOM?
    - The DOM stands for Document Object Model.
    - DOM is a programming interface for HTML
    - It defines the logical structure of the object and the a document is accessed and manipulated.
    - It is called a logical structure because DOM doesn't define any relation between the object.

2. How do you select elements with Vanilla JavaScript?
    - Using Queryselector
    - Using getElementById
    - Get element by class
    - Get element by tag
    - Get element by attribute

3. Explain event delegation in JavaScript.
    - Event delegation is a technique where we delagate the responsibility of handling the function to a parent element.

4. What is the purpose of the addEventListener method?
    - The JavaScript addEventListener allows us to set up a function to be called when a certain event occurs.

5. How do you create and remove elements in the DOM?
    - Create element in DOM: Using createElement().
    - Delete an element in DOM: using remove().

6. Explain the concept of event propagation.
    - Event propagation is a concept in JavaScript that explains how the events are handled in the DOM.
    - It involves two phases: capturing and bubbling.

7. How can you prevent the default behaviour of an event?
    - using event.preventDefault() method

8. How do you handle asynchronous code in JavaScript?
    - then/catch method
    - async/await

## Important Questions

1. Is JavaScript single/multithreade and explain why
    - JavaScript is a single threaded language (It means it can run only one thing at a time), It is synchronous in nature.It has one call stack and one memory heap.
    - It is single threaded because it executes code in a sequential manner, it must finish one piece of code befor moving onto the next.

2. How JavaScript handles async/multithread operations being a single thread language.
    - It handle asynchronous operations via callback queue and the event loop
    - Async programming allows multiple process to run parallelly without interfering the main thread(it is where browser processes user events).
    - Asynchronous code can be handled in three ways:
        - *promises*: They enable us to create code that runs after a certain period of time or when a ceratin condition is satisfied.
        - *async/await*: It helps you write more concise and readable code that will execute after a set period of time or when a set condition is met.
        - *callbacks*: Callbacks allows asynchronous code to be written in synchronous manner.

3. What is event loop and event queue?
    - Event queue is a special queue, which keeps tack of all the functions queues which needed to be pushed into the callstack.
    The event queue is responsible for sending new functions to the track for processing.
    - Event loop waits for the function stack to be empty, once the call stack is empty this will push the first function from the event queue to the call stack, and this way the function will be executed. Thus event loop works in a cyclic manner where it continously checks whether the call stack is empty or not.