"use strict" //Set of additional rules and restrictions applied to existing JavaScript code to enhance its reliability and maintainability.


//alert("Hello world!") //Will not work here as we are using node.js, it is available in the global window object present in browsers.


//Ecmascript documentation - https://tc39.es


/*
ECMA stands for European Computer Manufacturers Association.

JavaScript is a programming language that had humble beginnings. It was built in only 10 days in 1995 by a single person, 
Brendan Eich, who was tasked with building a simple scripting language to be used in version 2 of the Netscape browser. It was 
initially called LiveScript, but since the Java language was so popular at the time, the name was changed to JavaScript - although 
Java and JavaScript are in no way related.
For the first few years, after it was built, JavaScript was a simple scripting language to add mouseover effects and other 
interactivity. Those effects were being added to webpages using the <script> HTML element.
Inside each of the script elements, there could be some JavaScript code. Due to the rule that HTML, CSS, and JavaScript must be 
backward compatible, even the most advanced code written in JavaScript today ends up being written between those script tags.
"Backward compatible" refers to the ability of a system, technology, or software to remain compatible with earlier versions or 
standards..
In 1996 Netscape made a deal with the organization known as ECMA (European Computer Manufacturers Association) to draft the 
specification of the JavaScript language, and in 1997, the first edition of the ECMAScript specification was published.
You can think of a standard as an agreed-upon way of how things should work. Thus, ECMA-262 is a standard that specifies how the 
JavaScript language should work.
There have been 12 ECMA-262 updates - the first one was in 1997.
Additionally, the JavaScript engine itself comes with different ways to interact with various other parts of the browser. These 
are known as Browser APIs.

Thus, the code that you write in the JavaScript programming language allows you to: 
1. Interact with the JavaScript engine inside of the browser 
2. Interact with other browser functionality that exists outside of the JavaScript engine, but is still inside the browser.
Although traditionally it was possible to interact with the JavaScript engine only inside of the browser, this all changed in 
2009, when Node.js was built by Ryan Dahl.
*/


/*
Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code outside of the web browser. It is 
built on the V8 JavaScript engine, which is the same engine that powers the Google Chrome browser. With Node.js, developers can 
create server-side applications, command-line tools, desktop applications, and more, using JavaScript as the primary programming 
language.
*/


//Syntax is the set of rules in javascript.


/*
PRIMITIVE DATA TYPES:
(Call by value/Passed by values)
Primitive data types are a set of basic data types in Js that can hold one value at a time and are compared on the basis of their value.

number => up to '2 to the power 53'
bigint => Greater range of numbers
string => "" / ''
boolean => true/false
null => stanndalone value
undefined => not defined
symbol => for uniquely identifying something

NON-PRIMITIVE DATA TYPES:
(Call by reference/Passed by references)
They store a collection of values and are compared on the basis of their references.

object //data type is object
array //data type is object
function //data type is function
*/


console.log(typeof null) //will be an object
console.log(typeof undefined) //will be undefined itself

let sym = Symbol("123")
let sym2 = Symbol("123")
console.log(sym) //Symbol("123")
console.log(sym2) //Symbol("123")
console.log(sym == sym2) //false

let bigInt = BigInt(411873161784584413413) //This statement uses the BigInt() constructor to convert a number to a BigInt.
let bigInt2 = 411873161784584413413n //The n suffix is used to indicate that the value is a BigInt.
console.log(bigInt)
console.log(bigInt2)