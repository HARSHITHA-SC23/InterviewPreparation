# This document contains all the coding problems and important topics on Array

## Important question

1. what is an array?
    - An array is a data structure which stores the data of similar datatypes in a continous memory location.
    - An array is fixed in length and indexing starts from 0 not 1.
2. what are the advantages and disadvantages of an array?
    - Advantages:
        - Single array can store multiple elements.
        - Time complexity to access any element using index is O(1).
    -  Disadvantages:
        - Since it is continous memory allocation to fill the gaps in the array by shifting the elements which takes worst-case O(n) time.
3. what are the basic operations in an array?
    - Traverse
    - Insertion
    - deletion
    - search
    - sort
    - update
4. Diff between an array and an object
    - In object all the data are stored as key:value pairs, but in array all the data are stored under a single variable.
    - In object basic operations can be done by dots and brackets, whereas  in array by zero-based indexing and some built in operations.
5. what is the difference between array and list?
    - In array we can store data of similar data tyep, whereas in list we can store data of any datatype.
    - The array is create using array module constructore array.array whereas list is created using [].
    - Lists have more built-in function such as sort, append, etc whereas array has fewer builtin function which performs basic operation.
    - Array are used when we need to store large number of elements of simialr data type where as list are used when we need flexibility in the elements data types.
6. How do you create an empty list in python?
    - list_name = []
7. How do you access elements in a list/array in python
    - Using indexing
    - Using slicing
    - Using loop
    - Using List comprehension
    - Using array modules for array
8. How do you append an element to the end of a list in Python?
    - Using append()
9. How do you remove an element from a list in Python?
    - remove(element): removes the first occurence of an element in the list.
    - pop(index): Removes the element at the specified index. If the index is not mentioned removes the last element and return the removed element.
    - del list_name[index]: Removes the element at the specified index and does not return the removed element.
10. What is slicing in Python? How do you slice a list/array?
    - Slicing in python allows us to access subset of elements from a list/array.
    - It is done using : operator inside [].
    - Syntax:
        - array/list_name[start:stop:step]
        - start: starting index
        - stop: ending index
        - step: step size(default to 1).
11. How do you check if a value exists in a list/array in Python?
    - Using in operator
12. What is the difference between append() and extend() methods in Python lists?
    - append() is used to add single element to the end of a list.
    - extend() is used to add multiple elements such as another list to the end of a list.
13. Explain the implementation of timed map
    - A timed map in python is a data structure associated with the key value pairs, similar to regular dictionary.
    - But in timed map data structure, It has an additional feature of associating a time limit with each key-value pair.
    - Once the time limit for key-value pair is exceeded it can be treated has a invalid and can be removed from the timed map.
    - Timed map is useful for implementing caching or managing data that needs to be refreshed periodically.

## Coding Problems

| Problem                       | Description                                                                                                  | Algorithms                                                   |
|-------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| Basic Operations              | Create an empty list/array.                                                                                  | None                                                         |
|                               | Initialize a list/array with predefined values.                                                              | None                                                         |
|                               | Access elements by index.                                                                                   | None                                                         |
|                               | Update elements by index.                                                                                   | None                                                         |
| Traversal                     | Iterate over a list/array and print all elements.                                                            | None                                                         |
|                               | Find the sum/product of all elements in a list/array.                                                        | None                                                         |
| Search                        | Linear search: Find the index of a given element in a list/array.                                            | Brute Force                                                  |
|                               | Binary search (for sorted arrays): Find the index of a given element using binary search algorithm.        | Binary Search                                                |
| Insertion                     | Insert an element at the beginning/end of a list/array.                                                      | None                                                         |
|                               | Insert an element at a specific index in a list/array.                                                       | None                                                         |
| Deletion                      | Delete an element by value from a list/array.                                                                | Brute Force                                                  |
|                               | Delete an element by index from a list/array.                                                               | None                                                         |
|                               | Remove duplicates from a list/array.                                                                        | None                                                         |
| Sorting                       | Sort a list/array in ascending/descending order.                                                            | Bubble Sort, Selection Sort, Insertion Sort, Merge Sort      |
|                               | Implement a custom sorting algorithm (e.g., bubble sort, selection sort, insertion sort).                  | Any Sorting Algorithm                                        |
| Merging and Splitting         | Merge two sorted arrays/lists into a single sorted array/list.                                              | Merge Sort, Merge in Place                                   |
|                               | Split a list/array into two parts based on a given condition.                                               | None                                                         |
| Rotation                      | Rotate a list/array to the left/right by a given number of positions.                                       | Brute Force                                                  |
|                               | Find the minimum element in a rotated sorted array.                                                         | Binary Search                                                |
| Frequency Counting            | Count the frequency of each element in a list/array.                                                        | Brute Force, Hash Table                                      |
|                               | Find the most frequent element in a list/array.                                                             | Brute Force, Hash Table                                      |
| Palindrome                    | Check if a list/array is a palindrome (same forwards and backwards).                                        | Brute Force                                                  |
| Sum/Subarray Problems         | Find a subarray with a given sum.                                                                           | Brute Force, Prefix Sum                                      |
|                               | Find all subarrays with zero sum.                                                                           | Brute Force, Hash Table                                      |
| Two Pointer Technique         | Find a pair of elements in a list/array that sum to a given value.                                          | Brute Force, Two Pointers                                    |
| Sliding Window Technique      | Find the maximum sum subarray of a fixed size k.                                                            | Brute Force, Sliding Window                                  |
|                               | Find the smallest subarray with a sum greater than or equal to a given value.                              | Brute Force, Sliding Window                                  |
| Merge Intervals               | Merge overlapping intervals in a list/array of intervals.                                                   | Brute Force, Sorting                                         |
|                               | Insert a new interval into a list/array of non-overlapping intervals.                                       | Brute Force                                                  |
| Miscellaneous                 | Find the kth largest/smallest element in a list/array.                                                      | Brute Force, Sorting, Heap                                   |
|                               | Implement a stack/queue using arrays/lists.                                                                 | None                                                         |
| Subarrays/Sublists            | Find the maximum/minimum sum of a subarray/sublist.                                                         | Brute Force, Kadane's Algorithm                              |
|                               | Find the maximum/minimum product of a subarray/sublist.                                                     | Brute Force                                                  |
|                               | Find the longest increasing/decreasing subarray/sublist.                                                    | Brute Force, Dynamic Programming                             |
|                               | Find a triplet of elements in a list/array that sum to a given value.                                       | Brute Force, Two Pointers                                    |

## Search Algorithms

- There are two important search algorithms they are:
    - Linear Search
    - Binary Search

### Explain linear search, algorithm, advantage & disadvantage, time & space complexity

1. what is linear search?
    - Linear search is simple search algorithm that iterates through array/list to find the target value.
    - It starts from the begining of the array and compares each and every element in the array/list untill it is found or end of the array is reached.
2. Advantages:
    - Simple and easy to implement.
    - works very well for unsorted array/list
3. Disadvantages:
    - Inefficient for larger array/list especially when the target value is in the last.
4. Time complexity: 
    - Worst case: `O(n)` : When target is the last element or not found
    - Average case: `O(n/2) = O(n)` : When target is found at any place of the array.
    - Best Case: `O(1)` : When target is at the first place
5. Algorithm:
    ```
        function linear_search(array, target):
        for i from 0 to length(array) - 1:
            if array[i] equals target:
                return i  // Element found, return its index
        return -1  // Element not found
    ```

### Explain binary search, algorithm, advantage & disadvantage, time & space complexity

1. What is binary search?
    - Binary search is a searching algorithm used to find the position of the target in the sorted array.
    - It works by repeatedly dividing the search interval in half. 
        - If the value of the target element is less than the middle element of the interval, the search continues in the lower half. - If the target value is greater, the search continues in the upper half.
2. Advantages:
    - It is efficient for large arrays.
    - Works well for sorted array where element can be quickly compared.
3. Disadvantages:
    - The array/list need to be sorted initially which can be additionally step.
    - More complex to implement when compared to linear search.
    - Not suitable for small arrays
4. Time complexity:
    - Worst case: `O(log n)` : When target is not found or present i the last
    - Average case: `O(log n)` : Each comparission reduces the search by half
    - Best case: `O(1)`: When found in first comparission
5. Algorithm:
    ```
        def binary_search(arr, target):
            low = 0
            high = len(arr) - 1
            
            while low <= high:
                mid = (low + high) // 2
                if arr[mid] == target:
                    return mid
                elif arr[mid] < target:
                    low = mid + 1
                else:
                    high = mid - 1
                    
            return -1
    ```

## Sorting Algorithms

- There are 4 important sorting algorithms they are:
    - Bubble Sort
    - Merge Sort
    - Selection Sort
    - Insertion Sort

### Explain Bubble sort, algorithm, advantage & disadvantage, time & space complexity

1. What is bubble sort?
    - Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares the adjacent elememt, and swaps them if they are in the wrong order.
2. Advantages:
    - The algorithm is simple to implement.
    - It works well with small list.
3. Disadvantages:
    - Inefficient for larger list.
    - Not suitable for real world application where efficiency is critical.
4. Time complexity:
    - Worst case: `O(n^2)`
    - Average case: `O(log n)` : Each comparission reduces the search by half
    - Best case: `O(n^2)`
5. Algorithm:
    ```
        bubble_sort(arr):
            n = length of arr
            for i from 0 to n-1:
                for j from 0 to n-i-1:
                    if arr[j] > arr[j+1]:
                        swap arr[j] and arr[j+1]
            return arr

    ```
6. Variants:
    - Cocktail Shaker Sort:
        - Cocktail Shaker Sort is a variation of Bubble Sort where elements are compared and swapped bidirectionally, alternating between left-to-right and right-to-left passes.
    - Odd-even sort:
        - Odd-Even Sort divides the array into two sets: odd-indexed and even-indexed elements. It then compares and swaps elements in these sets in parallel, which can lead to a more efficient sorting process in some cases.

### Explain Merge sort, algorithm, advantage & disadvantage, time & space complexity

1. What is merge sort?
    - Merge sort is a popular sorting algorithm that follows divide-and-conquer approach.
    - It divides the array into two halves, recursively sorts the two halves and then merges the sorted halves to produce a single sorted array.
2. Advantages:
    - Merge sort is stable, it preserves the relative order of the equal elements.
    - It is suitable for sorting linked list when random access is not efficient.
3. Disadvanatges:
    - It requires additional space for the temporary arrays used in merging process.
    - Higher space complexity compared to in-place sorting algorithm like Quick sort.
4. Time complexity:
    - Worst case: `O(nlogn)`
    - Average case: `O(nlog n)` : Each comparission reduces the search by half
    - Best case: `O(n^2nlogn)`
5. Algorithm:
    ```
        merge_sort(arr):
            if length of arr <= 1:
                return arr
            
            mid = length of arr // 2
            left_half = arr[0:mid]
            right_half = arr[mid:]

            left_sorted = merge_sort(left_half)
            right_sorted = merge_sort(right_half)

            return merge(left_sorted, right_sorted)

        merge(left, right):
            result = []
            left_index = 0
            right_index = 0

            while left_index < length of left and right_index < length of right:
                if left[left_index] <= right[right_index]:
                    result.append(left[left_index])
                    left_index++
                else:
                    result.append(right[right_index])
                    right_index++

            append remaining elements from left and right to result

            return result

    ```

### Explain Dynamic Programming, algorithm, advantage & disadvantage, time & space complexity. (Paused)


1. What is Dynamicc programming?
    - Dynamic programming is a method to solve complex problem by breaking them down into simpler sub problem.
    - The principle behing DP is solving each subproblem once and storing it into ta table(usually an array) to avoid redundant calculations.
    - DP is used when a problem has:
        - Overlapping subproblem
            - The problem can be broken down into smaller subproblems.
            - The subproblems are solve multiple times in the process of solving the main problem.
        - Optimal substructure
            - The optimal solution to the main problem can be constructed from the optimal solution of its subproblem.
2. Advantages:
    - Reduces the time complexity of solving complex problem by avoiding redundant calculation.
3. Disadvantages:
    - Requires additional space to store subproblem which can increase space complexity.
    - Due to its recursive nature can be challenging to implement and understand.
4. Time Complexity:
    - Worst case: `O(n)`
    - Average case: `O(n)`: It may vary depending on the problem.
    - Best case: `O(n)`
   
5. Algorithm:
    ```
        function dp_algorithm(input_array):
            n = length of input_array
            dp = array/list of size n to store solutions to subproblems

            # Initialize base cases
            dp[0] = initial_value

            # Compute solutions to subproblems
            for i from 1 to n-1:
                dp[i] = compute_solution(dp, input_array, i)

            # Return the solution to the main problem
            return dp[n-1]

        function compute_solution(dp, input_array, i):
            # Compute the solution to the subproblem for index i
            # Use the solutions of previous subproblems stored in dp array
            return updated_value_based_on_previous_solution
    ```