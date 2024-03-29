# This document contains all the Interview Questions related to Database.

## SQL Interview Question

1. what is database?
    - A database is a organizied collection of data.
    - The data are stored and retrieve digitally from remote or local computer systems.
2. what is DBMS?
    - DBMS stands for Data Base Management System.
    - DBMS is a system software that is responsible for creation, deletion, retrival, upadation and management of the database.
    - It acts as the interface between database and the endusers.
3. What is RDBMS? How it is different from DBMS?
    - RDBMS stands for Relational Data Base Management System.
    - In RDBMS the data are store in the form of collection of tables and relation is defined between these tables using a common field of these tables.
4. What SQL?
    - SQL stands for Structured Query Language.
    - SQL is used for retreiving and manipulating the structured database.
5. What is table and Fields?
    - A table is an organized collection of data stored in the form of rows and columns.
    - The columns in a table are called fields and rows in a table are called as records.
6. What are constraints in a tables?
    - Constraints are used to specify the rule concerning the data in a table.
    - The constraints are applied to single or multiple fields while creating a table or can be applied after creating a table using alter.
    - The different types of constraint that can be applied to a table are:
        - NOT NULL: restricts null value from being inserted into a column.
        - PRIMARY KEY: Uniquely id for each record in a table.
        - FORIEGN KEY: It acts a common field between two table. It is creats connection between two tables.
        - DEFAULT: Automatically assigns a default value if there is no value provided while inserting.
        - UNIQUE: Ensures unique values inserted into the table.
        - INDEX: Indexes is a field that provides faster retrival of the records.
7. What is a PRIMARY KEY?
    - The PRIMARY KEY constraint uniquely identifies each row in a table.
    - It has an implicit NOT NULL and UNIQUE constraint.
    - In a table we can have only one PRIMARY KEY.
8. what si UNIQUE KEY?
    - A UNIQUE constraint ensures that all values are unique in a column.
    - Unlike PRIMARY KEY we can have multiple columnshave UNIQUES constraint.
9. what is a FOREIGN KEY?
    - In a table we can have multiple FOREIGN KEY references.
    - The FOREIGN KEY essentially refers to PRIMARY KEY in another table.
    - It is used to create relation between two tables.
    - The table containing the FOREIGN KEY is labeled as the child table and the table containing PRIMARY KEY/ CANDIDATE KEY is labeled as parent table.
10. what is a join? List its different types.
    - The SQL join is used to combine records from two or more tables in a SQL database based on the related column between them.
    - The different types of joins are:
        - LEFT join
        - RIGHT join
        - INNER join
        - FULL OUTER join
11. Explain all types of join in detail?
    - Lets explain the concept using two table: student and course
    - students table

        |id|name|
        |---|---|
        |1|alice|
        |2|bob|
        |3|charlie|
    - course table

        |id|course|student_id|
        |---|---|---|
        |1|math|1|
        |2|science|1|
        |3|history|2|
        |4|geography|3|
    - `INNER join`:
        - It is used to combine rows from two or more tables based on a related column between them.
        - It returns rows where there is atleast one match in both tables
        - The inner join selects records that have matching values in both tables.
        - Sample Query
            ```sql
                select students.name, courses.course
                from student
                inner join courses on students.id=courses.student_id
            ```
        - Returns
            
            |name|course|
            |---|---|
            |alice|math|
            |alice|science|
            |bob|history|
            |charlie|geography|
    - `LEFT join`:
        - The left join is used to select all rows from the left table and the matched rows from the right table(if ther is any).
        - Sample Query
            ```sql
                select students.name, courses.course
                from student
                left join courses on students.id=courses.student_id
            ```
        - Returns
            
            |name|course|
            |---|---|
            |alice|math|
            |alice|science|
            |bob|history|
            |charlie|geography|
    - `RIGHT join`:
        - The right join is used to select all rows from the right table and the matched rows from the left table(if ther is any).
        - Sample Query
            ```sql
                select students.name, courses.course
                from student
                right join courses on students.id=courses.student_id
            ```
        - Returns
            
            |name|course|
            |---|---|
            |alice|math|
            |alice|science|
            |bob|history|
            |charlie|geography|
    - `FULL join`:
        - Full join is also known as full outer join.
        - It is used to combine the results of a LEFT JOIN and a RIGHT JOIN. 
        - It returns all rows from both the left and right tables, with NULL values where there is no match.
        - Sample Query
            ```sql
                select students.name, courses.course
                from student
                full join courses on students.id=courses.student_id
            ```
        - Returns
            
            |name|course|
            |---|---|
            |alice|math|
            |alice|science|
            |bob|history|
            |charlie|geography|
12. TODO what is a self join?
13. TODO what is a cross join?
14. what is an index? explain its different types.
    - A database index is a datastructure that provides a quick lookup of a data in a column or columns.
    - It enhances the speed of accessing the data but at the cost of additional writes and memory to maintain the index data structure.
    - It allows DBMS to quickly locate rows in the table based on the indexed columns.
    - The different types of indexes are:
        - single column index:
            - The index is created on a single column of a table.
            - It speeds up the queries that filter or sort on the indexed column data.
        - composite index:
            - It is also known as multi-column idex
            - The index is created on multiple columns of a table.
            - It is useful when we want to filter or sort the data based on a combination of these columns.
        - clustered index:
            - clustered index are the index whose order in the table is similar to the order of rows in the index.
            - Only one clustered index should exist in a table.
            -It helps to improve the performance of the range queries.
        - non-clustered index:
            - non-clustered index are the index whose order does not matter.
            - Multiple non-clustered index can exists in a table.
            - Non-clustered entity creates a seperate entity within the table which references the orginal table.
15. what is data integrity?
    - Data integrity refers to the accuracyl, consistency and reliablity of the data in the database.
    - It ensures that the data remains intact and unchanged during storage, retrieval, and processing operations.
    - The several aspects to data integrity are:
        - entity integrity
        - referential integrity
        - data security
        - domain integrity
16. what is a query?
    - A query is like a request for data from database table or combination tables.
    - A query can either be select query or action query.
17. what is a subquery? what are its types?
    - A subquery is a query within another query.
    - It is also known as nested query or inner query.
    - The are two types of subqueries:
        - correlated subquery
        - non-correlated subquery
18. What are the different clause used with SELECT query?
    - WHERE: this clause is used to filter the record based on a specific condition.
    - ORDER BY: this clause is used to filter the record basedd on certain field either in ASC(ascending) or DSC(descending).
    - GROUP BY: this clause is used to group records with identical data.This is also used in aggregation function to produce summarize result from the database.
    - HAVING: this clause is used to filter records in combination with the GROUP BY. It is different from WHERE as it cannot filter aggregated records.
19. Explain normalization and their types?
    - Normalization is also called as schema refinement.
    - It is the process of organizing data in the database. It is used to reduce the data redundancy in the database.
    - Data redundancy is the repeatition of data in multiple place. 
    - The problems caused by data redundancy are:
        - It takes lots of space unnecessarily
        - It causes:
            - Insertion anomaly
            - Updation anomaly
            - Deletion anomaly
    - The types of normalization are:
        - 1NF
            - Design a table which can be easily expanded
            - If the table is not in 1NF, it is considered a poor DB design.
            - The 4 basic rules to be followed while designing a table are :
                - Each column should contain atomic values and entries like x.y or y,z in a single cell violates the rule
                - A column should contain the values that are if same type.
                - Each column should have unique name.
                - Order of the data stored doesn't matter.
        - 2NF
            - It should be in the 1NF
            - There should be no partial dependency.
            - Partial Dependency:
                - Dependency is nothing but every other column in a table is dependent on a primary key column
                - If a table has composite primay key column and one of the column is dependent only on any one of the primary key then it is known as Partial dependency.
        - 3NF
            - It should be in 1NF and 2NF
            - It should not have transitive dependency.
            - Transitive dependency:
                - It happens when any field in a table depends on a non-primary key field instead of primary field.
        - TODOBCNF
        - TODO4NF
        - TODO5NF
## PostreSQL Interview Question
1. What is MVCC?
    - MVCC stands for Multi Version Concurrency Control.
    - MVCC helps to avoid deadlocks (Deadlocks occurs when a person trying to do some update till he update all the other user needs to wait).
    - MVCC creats version number(snapshot) whenever a transaction occurs and the user queries the record with the highest version number. In this process instead of locking the row the new transaction creates an entire row with the new version number.
    - The drawback of MVCC is the database grows in size and becomes bloated by multiple version of DBMS records.
    - To deal with version bloat, a PostgreSQL MVCC database uses a clevrly named process VACCUM, It identifies and delete duplicate and unneeded records created by MVCC.
2. what is the port number of PostgreSQL?
    - 5432
3. what is the maximum size for a table in PostgreSQL?
    - 32TB.
4. What are the 4 main properties of a transaction in PosgreSQL?
    - The property has an acronym ACID.
    - ACID stands for atomicity, consistent, isolated and durable.
        - Atomicity:
            - It ensures that either all operations withing the transactions are successfully completed and committed or none them are.
            - If any part of the transaction fails the entire transaction is rolled back and database is left unchanged.
        - Consistency:
            - It ensures that the database remains consistent before and after transaction, which means it should adhere to all constraints, rules and relationships defined in its schema both and after the transaction.
        - Isolated:
            - It ensures that the execution of transaction is independent of each other, even when they are executed cincurrently.
            - It means that each transaction should be isolated from other transaction until it is completed and committed.
        - Durable:
            - It ensures that once the transaction is committed, thechanges made by the transaction is persistant even in the event of system failure.
            - Committed transactions are permanent and will not be lost due to system crash, power failure or any other unexpected event.
5. what is WAL?
    - WAL stands for Write Ahead Logging.
    - Before modifying the data in the database, PostgrSQL writes the changes to a transaction log.
    - This log contains all the details of all changes made to a record by a transaction, including both committed and non committed changes.
    - In the event of crash the PostgreSQL can use WAL log to recover the database.
6. How can u make a backup of the database
    - SQL dump
    - File system-level backup
    - On-line backup
7. What are the different types of partitioning in a table?
    - Range
    - List
    - Hash
    - composite
    - Multi-level
    - Foreign
    - sub
8. How to improve query performance or speed?
    - using index
    - Writing efficient SQL queries (for ex avoiding unnecessary columns in select statement)
    - Partitioning of large table
