//MEMORY:

/*
In JavaScript, memory management is handled by the engine running the JavaScript code, such as V8 in Chrome or SpiderMonkey in 
Firefox. Two important concepts related to memory management in JavaScript are the heap and the stack.

Heap: The heap is a large, mostly unstructured region of memory where objects are allocated. In JavaScript, objects such as arrays, 
functions, and objects themselves are stored in the heap. When you create an object in JavaScript using literals or constructors, 
memory is allocated in the heap to store that object's data.

Stack: The stack is a small, structured region of memory that keeps track of the execution context of the code. This includes 
function calls, local variables, and the context in which those functions were called. Each time a function is called, a new frame 
is added to the stack to store information about that function's execution context, including parameters and local variables. When 
a function finishes executing, its frame is removed from the stack.

In JavaScript, primitive types (like numbers, strings, booleans) are small, fixed-size data types that are stored directly in the 
memory locations where variables are stored. These values are allocated memory on the stack, and their actual values are directly 
stored within that memory space.
*/


/*
Stack (Primitive data types):
When you store primitive data types (like numbers, strings, booleans) on the stack, you get a copy of the actual value.
Any changes made to this copy won't affect the original value because they are independent.

For example, if you have two variables a and b, both storing a number, and you assign b = a, changes to b won't affect a, and 
vice versa.
*/


/*
Heap (Non-primitive data types):
When you store non-primitive data types (like objects, arrays, functions) on the heap, you get a reference (or pointer) to the 
actual data stored in memory.
Both the original reference and any copies made will point to the same memory location.
This means that changes made to the original data will affect all references pointing to that data because they are all referring 
to the same underlying memory.
For example, if you have two variables obj1 and obj2, both referencing the same object, changes made to obj1 will be reflected in 
obj2 because they are both pointing to the same object.
*/