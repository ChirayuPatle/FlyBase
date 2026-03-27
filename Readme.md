# varargs --- take multiple input or no inputs in single method

# JVM manages memory in java --- { stack is created when we create class and object -> saperate block of stack memory is given to variables(anyscope) which will contain all variables -> saperate stack memory segment is created for each mothod -> atlast when their execution is over, their memory of stack is deleted -> but the storage occupied into heap remains there -> here garbage collection comes into use. }

# Java used Stack data structure until any other id defined.

# two types

- stack ->
  Each thread have saperate stack memory but, all stacks uses common heap memory.
  if stack menmory if full we get, 'java.lang.stackOverflowError'.
  When a method is called in Java, a new block of memory called a "stack frame" is created on the call stack for that method call.

- heap -> object created using 'new' keyword, stored into heap but its reference is stored into stack

# garbage collection -> Garbage Collection (GC) in Java is the process by which the Java Virtual Machine (JVM) automatically removes unused objects from memory (heap), freeing up space and preventing memory leaks (removes unreferenced objects from the heap).

# refrences -> strong refrence object (create using new keyword) & weak reference object (created using weak keyword)

# what is the difference between the two statements:

statemsnt 1 : String strongRef = new String("Hello Soft Reference");
statement 2 :- String stringRef = "this is refrence";

answer :- statement 1 :- reates a new object in the heap, even if an identical string exists in the pool.
statement 2 :-Uses or creates a string literal in the String Pool (part of JVM method area).added to the String Pool, reused if already present.
