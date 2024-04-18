# This document contains all the coding problems and important topics on Stack

## Important question

1. What is stack?
    - A stack is a linear data structure which follows LIFO principle i.e., Lats-In-First-Out.
    - The element is added and remove only from one end i.e., `top`.
2. How can we implement a stack?
    - Stack can be implemented using lists.
3. What are the main operations supported by stack?
    - Push: add an element to the top of the stack
    - Pop: removes an element from the top of the stack
    - Peek( or Top): Returns the element at the top of the stack without removing it.
    - isEmpty: checks if the stack is empty
    - size: returns the length of the stack.
4. What is the time complexity of main stack operations?
    - It is O(1)
5. Can we implement a stack using linked list?
    - Yes, stack can be implemented using Lined list. where each node represents single element in the stack.
6. What is the significance of LIFO principle?
    - LIFO principle ensures that the most recently added element is the first removed.
    - example use case: function call stack, expression evaluation etc
7. How do you reverse a list using a stack in Python?
    - You can reverse a list using a stack by pushing all elements of the list onto the stack and then popping them back into a new list. - The popped elements will be in reverse order.
8. What is stcak overflow?
    - A stack overflow occurs when a program tries to push more elements onto the stack than it has space for.
9. How can a stack be used to implement function calls in programming languages?
    - A stack is used to store information about the active function calls in a program.
    - When a function is called, its context (such as local variables and return address) is pushed onto the stack.
    - When the function returns, its context is popped from the stack, and control is returned to the calling function.
10. What is the minimum number of stacks required to implement a queue?
    - Two: enqueue and dequeue
11. How do you implement a queue using two stacks in Python?
    - To implement a queue using two stacks in Python, you can use one stack for the enqueue operation and another for the dequeue operation.
    - When the dequeue stack is empty, you can transfer elements from the enqueue stack to the dequeue stack to perform the dequeue operation efficiently.
12. Can you implement a stack using a queue?
    - Yes, you can implement a stack using a queue.
    - One way to do this is to use two queues. One queue is used for the push operation, and the other queue is used for the pop operation.
    - The push operation can be simulated by enqueueing the new element and then dequeuing and enqueueing all other elements from the first queue to the second queue.
    - The pop operation can then be simulated by dequeuing the element from the second queue.

## Coding Problems

| Problem                                                        | Description                                                                                                                                                                                          | Algorithms                                                                                                                                                                                             |
|--------------------------------------------------------------- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/) | Implement a stack using only standard queue operations (push to back, peek/pop from front, size, and is empty).                                                                                | Use two queues to simulate stack operations. Push operation can be implemented by pushing the element to one of the queues and pop operation by transferring elements between queues until only one element is left.      |
| [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)           | Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.                                                                            | Use a stack to keep track of opening parentheses and ensure each closing parenthesis matches the top of the stack.      |
| [Reverse String using Stack](https://www.geeksforgeeks.org/stack-set-3-reverse-string-using-stack/) | Reverse a string using a stack.                                                                                                                                                          | Push each character of the string onto the stack and then pop them to get the reversed string.                         |
| [Balanced Parentheses](https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/) | Given an expression containing parentheses, check if the parentheses are balanced.                                                                                          | Iterate through the expression and use a stack to keep track of opening parentheses. Pop from the stack when a closing parenthesis is encountered, ensuring they match. If the stack is empty at the end, the parentheses are balanced. |
| [Implement Stack](https://www.geeksforgeeks.org/implement-stack-using-queue/)                 | Implement a basic stack data structure.                                                                                                                                              | Use a list or array to simulate stack operations such as push, pop, and peek.                                            |
| [Min Stack](https://leetcode.com/problems/min-stack/)                    | Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.                                                                                                | Brute Force: Iterate over the stack to find the minimum element. <br>Optimized: Use an additional stack to keep track of the minimum element at each level of the main stack.                        |
| [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) | Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, , and /. Each operand may be an integer or another expression.         | Brute Force: Convert the expression to infix notation and evaluate. <br>Optimized: Use a stack to store operands and apply operators when encountering them.                                             |
| [Decode String](https://leetcode.com/problems/decode-string/)                 | Given an encoded string, return its decoded string. The encoding rule is k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times.            | Brute Force: Use a recursive function to decode the string. <br>Optimized: Use a stack to keep track of the current count and substring to repeat, updating them as you encounter '[' and ']'. |
| [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/)       | You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2. | Brute Force: For each element in nums1, iterate over nums2 to find the next greater element. <br>Optimized: Use a stack to keep track of elements with no next greater element yet.                  |
| [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)       | Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining. | Brute Force: For each bar, find the maximum height bar on its left and right, the amount of water it can trap is the minimum of these heights minus the height of the bar. <br>Optimized: Use a stack to keep track of indices of bars.                      |
| [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)       | Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of the largest rectangle in the histogram. | Brute Force: For each bar, find the maximum area rectangle with the current bar as the smallest bar. <br>Optimized: Use a stack to keep track of indices of bars.                 |
| [Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/)       | Given a string containing only three types of characters: '(', ')' and '', write a function to check whether this string is valid. | Brute Force: Generate all possible strings by replacing '' with '(' or ')' and check if any of them is valid. <br>Optimized: Use two stacks to keep track of indices of '(' and '*'.                      |
| [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)       | Given the root of a binary tree, return the inorder traversal of its nodes' values. | Recursive: Traverse the left subtree, visit the root, traverse the right subtree. <br>Iterative: Use a stack to simulate the recursive approach.                      |
| [Remove All Adjacent Duplicates in String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/)       | Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together. | Stack: Iterate through the string and keep track of characters and their counts using a stack. If the count reaches k, remove the characters from the stack.                      |
