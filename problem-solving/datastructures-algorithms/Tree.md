# This document contains all the coding problems and important topics on Tree

## Important Questions

1. What is a tree data structures?
    - A tree is a widely used data structure that resembles the structure of a hierarchial tree, a root value and subtrees of children with parent node.
    - Tree consists of node connected by edges.
    - Each node contains a value or the data and the edge represents the connection between the nodes.
    - The key features  of tree data structures are:
        - Root: The topmost node in a tree, it has no parent.
        - child: A node directly connected to another node moving away from the root.
        - Parent: A node which is connected to one or more child nodes.
        - leaf: A node which has no child node.
        - Subtree: A tree formed by a node and its descendants.
        - height: The length of the longest path from root to a leaf.
        - depth: The length of the path from root to a node.
        - Degree: The number of childeren of a node
2. What is a binary tree?
    - A binary tree is a tree data structure in which each node has atmost two child nodes.
    - The child nodes are referred to as left node and right node.
    - Types of binary tree:
        - Full binary tree: A binary tree in which each node has either 0 or 2 child nodes.
        - Perfect Binary Tree: A binary tree in which all interior nodes have two children and all leaves have the same depth or same level.
        - Complete binary tree: A binary tree in which every level is completeley filled with nodes, except the last nodes which are left as possible.
        - Balanced Binary Tree: A binary tree in which the height of the left and right subtrees of any node differ by at most one.
    - The height of the binary tree is the number of edges on the longest path from root to the leaf node. The height of an empty tree is -1.
    - Number of nodes in a binary tree:
        - Minimum: `n= 2^(h+1)-1`
        - Maximum: `n= 2^(h+1)-1`
        - where n= no of nodes, h=height/depth
    - Full Binary Tree Property: For a full binary tree with n internal nodes and m leaves, the number of leaves is m = n + 1.
    - Traversal: 
        - In-order Traversal: Left subtree, root, right subtree.
        - Pre-order Traversal: Root, left subtree, right subtree.
        - Post-order Traversal: Left subtree, right subtree, root.
3. What is the difference between binary tree and binary search tree?
    | Feature               | Binary Tree                                     | Binary Search Tree (BST)                                |
    |-----------------------|-------------------------------------------------|--------------------------------------------------------|
    | Definition            | Each node can have at most two children.        | Each node can have at most two children.               |
    | Ordering of Elements  | No specific ordering of elements.                | Elements are ordered such that for every node `N`, all elements in the left subtree of `N` are less than `N`, and all elements in the right subtree of `N` are greater than `N`. |
    | Efficiency            | Searching, insertion, and deletion operations are less efficient compared to BST. | Searching, insertion, and deletion operations are more efficient compared to binary tree due to the ordering property. |
4. How do you find the height of a binary tree in Python?
    - height = max(height(left subtree) , height(right subtree))+1
5. What is the difference between a tree and a graph?
    | Feature             | Tree                                             | Graph                                              |
    |---------------------|--------------------------------------------------|----------------------------------------------------|
    | Structure           | Hierarchical(top-down)                           | Non-hierarchical(not strict top-down)                            |
    | Relationships       | Each node (except root) has one parent          | Nodes can have multiple edges and connections      |
    |                     | Unique path from root to each node              | Multiple paths between nodes                       |
    |                     | Acyclic                                          | Can be cyclic                                      |
    | Root                | Single root                                      | No root, any node can be a starting point          |
6. What is level?
    - The level of a node refers to the depth in a tree.
    - The root node is considered to be at level 0 and subsequent level is one more deep in a tree.
    - The nodes at level 2 are the children of nodes at level 1
7. What is level-order travesal?
    - Level order traversal is also known as breadth-first traversal.
    - It visits all the nodes of a tree level by level from left to right.
    - Starting from the root node it visits all the node at the current level before moving to the next level.
    - Working of level-order traversal:
        - enqueue the root node into a queue data structure
        - While queue  not empty:
            - dequeue a node from the queue and visit it
            - . Enqueue the left child of the dequeued node (if it exists).
            - Enqueue the right child of the dequeued node (if it exists).
8. What is BFS and DFS?

    | Traversal Type              | Description                                                                                                                                                   | Advantages                                                                                                                                          | Implementation                                                                                                                                                 |
    |-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Breadth-First Traversal (BFS) | Ensures that the new node is inserted at the first available position at the deepest level possible.                                                         | Ensures a relatively even distribution of nodes, which can be advantageous for certain operations.                                                   | Use a queue to perform level-order traversal of the tree, finding the first node that has an available child (left or right) and inserting the new node there. |
    | Depth-First Traversal (DFS)  | Does not guarantee that the new node will be inserted at the deepest level or in a balanced manner.                                                           | Simpler to implement recursively, especially for certain tree structures.                                                                            | Use recursive functions to traverse the tree depth-first and insert the new node when you find a node with an available child.                                    |


## Coding Problems

| Operation           | Description                                                                                          |
|---------------------|------------------------------------------------------------------------------------------------------|
| Traversal           | Visiting all nodes in a tree in a specific order. Includes in-order, pre-order, and post-order.    |
| Search              | Finding a specific node in the tree.                                                                 |
| Insertion           | Adding a new node to the tree.                                                                       |
| Deletion            | Removing a node from the tree.                                                                      |
| Updating            | Modifying the value of a node in the tree.                                                           |
| Balancing           | Ensuring the tree remains balanced for efficient operations.                                          |
| Finding Height      | Determining the height (or depth) of the tree.                                                       |
| Finding Size        | Counting the total number of nodes in the tree.                                                      |
