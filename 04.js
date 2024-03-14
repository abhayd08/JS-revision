console.log("1" + 2 + 3) //123 will be logged
console.log(1 + 2 + "3") /*33 will be logged because Js executes code from left-to-right. In this case, 1 and 2 will be added and 
the output 3 will be concatenated with "3".*/


//ARITHMETIC OPERATORS:
console.log(2+2) //Addition
console.log(2-2) //Subtraction
console.log(2*2) //Multiplication
console.log(2/2) //Divison
console.log(2%2) //Modulus or Modulo operator
console.log(2**2) //Exponentiation

//console.log(2++) //Post-increment //won't work and will throw an error


/*
The code console.log(2++) will result in a syntax error because the ++ operator is used incorrectly.

The ++ operator is a unary operator used for incrementing the value of a variable by 1. It can be used in two ways: 
pre-increment and post-increment.

Pre-increment: ++variable increments the value of the variable before it is used in an expression. It is also known as Prefix operation.
Post-increment: variable++ increments the value of the variable after it is used in an expression. It is also known as Postfix operation.
However, the ++ operator cannot be used with a literal value like 2++. It must be used with a variable.
*/

let var1 = 1
console.log(var1++) //Post-increment and 1 will be logged
console.log(++var1) //Pre-increment and 3 will be logged

console.log(--var1) //Pre-decrement and 2 will be logged
console.log(var1--) //Pre-decrement and 2 will be logged

console.log(true) //true
console.log(+true) //1 will be logged as the arithmetic operator will convert the value towards its right (true) to 1

console.log(+"") //0 will be logged as empty string evaluate to false

console.log(20-2+3*4/2) //BDMRAS is the precdence order


//ASSIGNMENT OPERATORS:
let num1, num2, num3
num1 = num2 = num3 = 4 //Not preferred but it is possible
console.log(num1, num2, num3) //4 4 4 will logged on the same line

num2 -= 3
num2 += 3
num2 **= 3
console.log(num2)


//COMPARISON OPERATORS:
console.log(2 == 2) //Equality operator
console.log(2 === 2) //Strict-equality operator

console.log(2 != 2) //Inequality operator
console.log(2 !== 2) //Strict-inequality operator

console.log(2 > 3) //Greater than
console.log(2 < 3) //Less than

console.log(2 >= 1) //Greater than or equal to
console.log(2 <= 1) //Less than or equal to

2 == 2? console.log("Yes") : console.log("No") //? is a ternary operator; an alternative of if-else statements


//LOGICAL OPERATORS:
console.log(true && false) /*AND operator; returns first false or the last true value; the logical AND operator (&&) is used to 
evaluate two expressions and returns true if both expressions are true, and false otherwise. It operates on boolean values and 
produces a boolean result.*/
console.log(true || false) //OR operator; returns first true or the last false value
console.log(!false) //NOT operator; returns the opposite boolean value of the operand


/*
An operator is a symbol that represents an action or operation to be performed on one or more values.

An operand is a value or entity that is operated on by an operator. In other words, operands are the inputs to an operation performed 
by an operator.

An expression is a combination of one or more operands and operators that can be evaluated to produce a value. Expressions can represent 
mathematical computations, logical evaluations, or assignments.

A statement is a complete line of code that performs a specific action. Statements can include expressions, assignments, control flow 
structures (such as if, for, while), and function declarations. Unlike expressions, statements are executed sequentially and may have 
side effects.

An operation typically refers to a specific action that is performed on one or more operands using an operator. These operations can 
include arithmetic operations (such as addition, subtraction, multiplication, and division), logical operations (such as AND, OR, 
and NOT), comparison operations (such as equality and inequality checks), bitwise operations (such as bitwise AND, bitwise OR, and 
bitwise XOR), and more.
*/