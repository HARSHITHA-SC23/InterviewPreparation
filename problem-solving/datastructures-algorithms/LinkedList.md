# This document contains all the coding problems and important topics on Linked List

## Important Questions

1. What is a linked list?
    - A linked list is linear data structure consisting of nodes, where each node contains data element and a reference(link) to the next node in a sequence.
    - Linked lists can dynamically grow and shrink in size during execution.
    - The first node in a linked list is called head, and the last node(tail) typically points to null reference which indicates the end of the list.
    - Linked lists are commonly used to implement other data structures such as stack, queue etc.
2. What are the advantages of linked lists?
    - Linked lists can dynamically grow and shrink, this makes it more flexible where we don't know the number of elements in advance or changes frequently.
    - Insertion and deletion are efficient in linked list, asd it can be done by adjusting the pointers without shifting the elements.
    - Linked list doesn't need  pre allocation of the memory, memory utilization is properly taken care of.
3. Explain the basic operations that can be performed on a linked list.
    - Insertion: Adding a new node to the linked list
    - Deletion: Removing a node from the linked list.
    - Traversal: Visiting each node in the linked list to perform some operation. 
    - Searching: Finding a specific node in the linked list based on its value.
    - Updating: Modifying the value of a node in the linked list.
    - Reversing: Changing the order of the nodes in the linked list 
    - Concatenation: Combining two linked lists into a single linked list.
4. What are the types of Linked list?
    - Singly Linked List: 
        - Each node has a data element and a pointer/reference to the next node in the sequence. 
        - It is the simplest form of a linked list.
        - Traversal is forward-only.
    - Doubly Linked List: 
        - Each node has a data element, a pointer/reference to the next node, and a pointer/reference to the previous node. 
        - This allows for traversal in both directions.
    - Circular Linked List: 
        - In this type, the last node of the list points back to the first node, forming a circle. 
        - This can be a singly circular linked list or a doubly circular linked list.
5. What is the time complexity of inserting a node at the beginning of a linked list? What about at the end?
    - The time complexity of inserting a node at the beginning of a linked list is `O(1)`.
    - The time complexity of inserting a node at the end of a linked list is `O(n)`, where n is the number of nodes in the linked list
6. What is the time complexity of deleting a node from the beginning of a linked list? What about from the end?
    - The time complexity of deleting a node from the beginning of a linked list is `O(1)`.
    - The time complexity of deleting a node from the end of a linked list is `O(n)`.

## Coding Problems

| Problem                                                      | Description                                                                                                        | Algorithm                                                                                                                                                            |
|--------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Insertion at Beginning of a Linked List                      | Insert a node at the beginning of a linked list.                                                                  | Create a new node, set its next pointer to the current head, then update the head to point to the new node. |
| Deletion of Node by Value in a Linked List                   | Delete a node by value in a linked list.                                                                          | Traverse the list, find the node with the specified value, and update the previous node's next pointer. |
| Search for a Node by Value in a Linked List                  | Search for a node by value in a linked list.                                                                     | Traverse the list, comparing each node's value with the target value until a match is found.           |
| Print All Elements of a Linked List                          | Print all elements in a linked list.                                                                             | Traverse the list, printing each node's value.                                                           |
| Reverse Linked List                                          | Reverse a singly linked list.                                                                                      | Brute Force: Iterate through the list and reverse the pointers.                                                                                                      |
| Remove Nth Node From End of List                             | Remove the nth node from the end of a linked list.                                                                  | Two Pointer: Use two pointers, one moving n steps ahead of the other. When the first pointer reaches the end, the second pointer will be at the nth node from the end. |
| Merge Two Sorted Lists                                       | Merge two sorted linked lists into one sorted linked list.                                                         | Merge: Compare the heads of the two lists and append the smaller one to the result. Move the pointer of the smaller list forward.                                    |
| Palindrome Linked List                                       | Check if a linked list is a palindrome.                                                                            | Reverse Half: Reverse the second half of the list and compare it with the first half.                                                                                 |
| Intersection of Two Linked Lists                             | Find the intersection point of two linked lists.                                                                   | Two Pointer: Find the lengths of both lists, move the pointer of the longer list by the difference, then move both pointers at the same pace until they meet. |
| Copy List with Random Pointer                                | Copy a linked list with each node having an additional random pointer that could point to any node in the list.  | Hash Map: Use a hash map to store the mapping between original and copied nodes.                                                                                        |
| Flatten a Multilevel Doubly Linked List                      | Flatten a multilevel doubly linked list into a single-level doubly linked list.                                    | DFS: Use depth-first search (DFS) to flatten the list.                                                                                                                 |
| Reorder List                                                 | Reorder a linked list so that the nodes are reordered to: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...               | Split, Reverse, Merge: Split the list in half, reverse the second half, then merge the two halves.                                                                   |
| LRU Cache                                                   | Implement a least recently used (LRU) cache using a linked list and a hash map.                                   | Doubly Linked List: Use a doubly linked list to store the keys in the order of their access time. Use a hash map to store the mapping between keys and nodes.      |
| Middle of the Linked List                                   | Find the middle node of a linked list.                                                                             | Two Pointer: Use two pointers, one moving at twice the speed of the other, to find the middle node.    |
| Linked List Cycle                                           | Determine if a linked list has a cycle.                                                                           | Floyd's Cycle Detection Algorithm: Use two pointers, one moving at twice the speed of the other. If there is a cycle, the two pointers will meet. |
| Remove Duplicates from Sorted List                          | Remove duplicates from a sorted linked list.                                                                      | Iterate through the list and remove duplicates by updating the next pointer of the previous node.     |
| Merge Sorted Linked Lists                                   | Merge two sorted linked lists into one sorted linked list.                                                        | Merge: Compare the heads of the two lists and append the smaller one to the result.                    |
| Delete Node in a Linked List                                | Delete a node (except the tail) in a singly linked list, given only access to that node.                        | Copy the value of the next node to the current node and update the next pointer of the current node.  |
| Reverse Linked List Recursively                             | Reverse a linked list recursively.                                                                                | Recursive: Recursively reverse the rest of the list and then adjust the pointers.                      |
| Linked List Palindrome                                      | Check if a linked list is a palindrome.                                                                           | Reverse Half: Reverse the second half of the list and compare it with the first half.                  |
| Intersection of Two Linked Lists                            | Find the intersection point of two linked lists.                                                                  | Two Pointer: Find the lengths of both lists, move the pointer of the longer list by the difference, then move both pointers at the same pace until they meet. |
