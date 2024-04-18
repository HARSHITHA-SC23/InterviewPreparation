# This document contains all the coding problems which are not related to any data structure

| Topic                   | Problems                                                                                                                                                                                                                                                                     |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `String Manipulation`     | &bull; Reverse a string without using any built-in functions. <br>&bull; Check if two strings are anagrams of each other. <br>&bull; Remove duplicates from a string without using additional data structures. <br>&bull; Find the longest palindrome substring in a given string. <br>&bull; Reverse words in a sentence without using built-in functions. <br>&bull; Convert a string to uppercase or lowercase without using built-in functions.<br>&bull; Compress a string by replacing repeated characters with a count (aaabbb=>a3b3). |
| `Mathematical Operations` | &bull; Calculate the factorial of a number. <br>&bull; Check if a number is a prime number. <br>&bull; Calculate the power of a number without using the `Math.pow` function. <br>&bull; Find the nth Fibonacci number without using recursion. <br>&bull; Calculate the square of a number without using the `Math.sqrt` function. <br>&bull; Find the largest prime factor of a given number. <br>&bull; Write a function to check if a number is a palindrome.|
| `Number Manipulation`     | &bull; Check if a number is a perfect square. <br>&bull; Check if a number is an Armstrong number. <br>&bull; Convert a decimal number to binary without using built-in functions. <br>&bull; Find the sum of digits of a number without using loops or recursion. <br>&bull; Calculate the square root of a number without using built-in functions. |
| `Pattern Matching`        | &bull; Check if a string follows a specific pattern (e.g., "abba" -> "dog cat cat dog"). <br>&bull; Check if a string is a valid shuffle of two other strings. <br>&bull; Find the first non-repeating character in a string. <br>&bull; Implement regular expression matching without using built-in regex libraries. <br>&bull; Check if a given string is a valid palindrome ignoring non-alphanumeric characters. <br>&bull; Validate an email address. |
| `Date and Time Manipulation` | &bull; Calculate the number of days between two dates. <br>&bull; Get the day of the week for a given date. <br>&bull; Calculate the age of a person based on their birthdate. <br>&bull; Convert a given number of seconds to a readable time format (e.g., "1 day, 2 hours, 30 minutes"). <br>&bull; Check if a given year is a leap year. |
| `File Handling`          | &bull; Read a file line by line and count the number of occurrences of each word. <br>&bull; Count the number of lines, words, and characters in a file. <br>&bull; Find the longest word in a file. <br>&bull; Search for a specific word in a file and return its line number(s). <br>&bull; Read a CSV file and store its contents in a data structure for further processing. |
| `Error Handling`          | &bull; Validate a credit card number using the Luhn algorithm. <br>&bull; Validate a password based on specific criteria (e.g., length, character types). <br>&bull; Check if a given string is a valid IPv4 address. <br>&bull; Validate a phone number based on a specific format. <br>&bull; Handle and report errors in a function that reads a file. |
| `Bit Manipulation`        | &bull; Count the number of set bits (1s) in a given integer. <br>&bull; Swap two numbers without using a temporary variable. <br>&bull; Count the number of bits needed to convert one integer to another. <br>&bull; Reverse the bits of an integer. <br>&bull; Check if a number is a power of two using bit manipulation. <br>&bull; Implement bitwise operations (AND, OR, XOR) on two integers. |

## String Manipulation

**Basic String Operations**:
- Concate: Two strings can be concatenated using "+".
- Access individual character:
    - Indexing: Can access specific character for a string by using `[]` with `index` mentioned.
    - Negative-indexing: Can access specific character of a string in reverse order by using `[]` with `-index` mentioned.
    - Slicing: Slicing in used to extract a substring from a string. Slicing allows us to specify a range of indices to extract a portion of the string.
        - Syntax:s[`start index: end index: step size`]
            - start index: from where the string should start
            - stop index: till where we need to take
            - step size: how many element after we need to select default 1
    - Iterating over characters: We can fetch individual charcter by using loop.
        - for `char` in `string`:
            statements
- Length of the string: len().
- Iterate over characters:
    - using a for loop
    - using a index and range()
    - using while loop
    - using map function
    - using list comprhension
- String comparision:
    - Equality(`==`)
    - Inequality(`!=`)
    - Greater than(`>`) and Less than(`<`): compared character by character based on their unicode values.
    - Case-insensitive comparision: Convert the strings to either `lower()` or `upper()`.
    - startswith() and endswith()
- Sorting a string:
    - using sorted(): sorts the string a returns list of sorted characted, later we can use join() to combine them into single string
    - using sort(): convert the string to a list of charcter using list() and then sort using sort().
    - Using custom sorting alhorithm.
- 