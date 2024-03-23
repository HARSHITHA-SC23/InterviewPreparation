# This document covers important Python topics from beginner to advanced levels.


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
### Hash Map

- **Introduction:**
    - Hashmap is also known as dictionary. It is a data structure that stores the information in the key value pairs for efficient retrieval.
    - A value stored in hash map is retrieved using the key under which it is stored.
    - Hashmap is also known as Unordered map, because while inserting an item into an unordered hashmap the item can reside at any position in the map object.
    - Benefits of Hashmaps:
        -  Readability: Custom keys are easier to work with
        - Time complexity: hash map O(1) to search  where as arrays/lenked lists takes O(n).
- **How Hash map works:**
    - Hashmaps are built on top of an underlying array data structure using an indexing system.
    - Hash map created from an array using the hash function. Modern language have a built in hash function.
    - The main thing about hash function is that once the data/index is mapped to a key it cannot be changed. The key in a hash map must be an immutable data type. 
    - For example Array is muttable so we cannot use it for key where as tuple can be used since it is immutable
    - Each index in the array can store one key-value pair.
    - Each index can store reference to another data structure such as a linked list, if the hash map is implemented using "Chaining for collision resolution".
- **Implementation of hashmap:**
    - *Step 1: Initialization*
        ```py
            city_map = {} 
            # or
            city_map = dict()
        ```
    - *Step 2: Add first key-value pair*
        ```py
            # without using default dict
            city_map = {}

            cities  = ["banglore","mysore","kodagu"]
            city_map["karnataka"] = []
            city_map["karnataka"].append(cities)

            ''' 
            Using default dict library
                - This library initializes all the keys by defult
            '''
            from collections import defaultdict
            city_map = defaultdict(list)

            cities  = ["banglore","mysore","kodagu"]
            city_map["karnataka"].append(cities)
        ```
    - *Step 3: Retrieving information*
        - There are three methods they are:
            - hashmap.keys(): It returns all of the keys in the dictionary/hashmap in the form of a list.
                ```py
                    city_list = city_map.keys()
                    #returns all the keys [[karnataka,...]] as a lsit
                    print(city_list) 
                ```
            - hashmap.values(): It returns all of the values in the dictionary/hashmap in the form of a list.
                ```py
                    city_list = city_map.values()
                    #returns all the values [[banglore,...]] as a lsit
                    print(city_list) 
                ```
            - hashmap.items(): It returns all of the key-value pairs as tuples.
                ```py
                    city_list = city_map.items()
                    #returns all the key-value/item [('karnataka', [['banglore', 'mysore', 'kodagu']])] as a lsit
                    print(city_list) 
                ```