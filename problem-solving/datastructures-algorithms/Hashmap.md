# This document contains all the coding problems and important topics on Array

## Important Topics

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


## Important question

1. What is a Hashmap?
    - 