# This document contains all the coding problems and important topics on Set

## Important Basic string Operations Problems

### String Sliding window Algorithm
    
- The SSW is an efficient way to solve problems related to substrings, where we maintain a subset of characters(`a window`) and adjust the window size as iterating.
- The window can be represented using two pointers `start` and `stop`, which indicates the current boundary of the substring.
- Size of the window can be determined by the condition mentioned in the problem such as (length of the substring, number of distinct characters etc.).
- Algorithm:
    - step.1: Intialize two pointers `start` and `stop`. Choose a data structure such as dictionary or list maintain character count or any other statistics. For example use dictionary to keep the track of characters in the current window.
    - step.2: Use loop to iterate over the string with `end` pointer. The `end` pointer helps us to expand the window to include new character.
    - step.3: Check conditions based on the problem statement.
    - step.4: Use the start pointer to decrease the window size from the left side until the conditions are satisfied again.
    - step.5: During each iteration the size of the current window can be calculted using `end - start + 1`. Update the max_length if searching for longest substring untill the end pointer moves through the entire string. 
    - step.6: Repeat the process
    ```py
        def sliding_window_algorithm(s: str) -> int:
            # Step 1: Initialization
            start = 0  # Start pointer
            max_length = 0  # Variable to store the maximum result
            char_index = {}  # Data structure to store character counts or indices

            # Step 2: Expand the Window
            for end in range(len(s)):  # Loop through the string with the end pointer
                # Step 3: Add the character at end to the data structure
                char_index[s[end]] = char_index.get(s[end], 0) + 1

                # Step 4: Check Conditions
                while char_index[s[end]] > 1:  # Condition to contract the window
                    # Step 5: Contract the Window
                    char_index[s[start]] -= 1  # Remove the character at the start pointer
                    if char_index[s[start]] == 0:
                        del char_index[s[start]]  # Remove the character from the dict if its count is 0
                    start += 1  # Move the start pointer to the right

                # Step 6: Update Results
                max_length = max(max_length, end - start + 1)  # Update the maximum length

            return max_length  # Final result
    ```


| **Problem**                                              | **Algorithm Used**                     |
|---------------------------------------------------------|----------------------------------------|
| Longest Substring Without Repeating Characters           | Sliding Window with Hash Map           |
| Longest Substring with At Most K Distinct Characters     | Sliding Window with Two Pointers       |
| Longest Repeating Character Replacement                  | Sliding Window with Character Count    |
| Find All Anagrams in a String                            | Sliding Window with Frequency Count     |
| Minimum Window Substring                                 | Sliding Window with Two Pointers       |
| Substring with Concatenation of All Words                | Sliding Window with Frequency Count     |
| Longest Palindromic Substring                            | Expand Around Center with Sliding Window|
| Count Occurrences of Anagrams in a Substring             | Sliding Window with Frequency Count     |
| Longest Substring with At Least K Distinct Characters    | Sliding Window with Two Pointers       |
| Permutation in String                                     | Sliding Window with Frequency Count     |
