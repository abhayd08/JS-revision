let str = "31abc"
let num = 123
console.log(typeof str) //string will be logged
console.log(typeof num) //number will be logged


/*
When data types are logged in the console, they'll be in lower case. While using data types in your source code, you need to ensure 
that the first letter is capital.
*/


let strNum = Number(str)
console.log(strNum) //NaN will be logged since "31abc" is not a proper number.
console.log(typeof strNum) //type will still be a number

let strNum2 = "33"
let num2 = Number(strNum2)
console.log(num2) //The number 33 will be logged.
console.log(typeof num2) //type will be a number

let var1 =  null
console.log(Number(null)) //will be 0, as null evaluates to 0
console.log(typeof Number(null)) //will be a number

let var2;
console.log(Number(var2)) //will be NaN as undefined cannot be converted to a number
console.log(typeof Number(var2)) //will be a number

console.log(Boolean(1)) //1 evalutes to true and 0 is treated as false.
console.log(typeof Boolean(1)) //boolean will be logged.

console.log(String(undefined)) //will be  "undefined"
console.log(typeof String(undefined)) //will be a string

console.log(Boolean(undefined)) //will be false
console.log(typeof Boolean(undefined)) //type will be boolean

console.log(Boolean(null)) //will be false
console.log(typeof Boolean(null)) //type will be boolean