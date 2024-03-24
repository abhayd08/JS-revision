const num = 3.1 //type will be a number
const num2 = new Number(2) //type will be an object

console.log(num.toFixed(0)) /*will round the number to the nearest integer and remove any decimal values, 
effectively setting the decimal places to 0.*/

console.log(num2.toFixed(2)) /*will round the number to two decimal places and add trailing zeros if 
necessary to ensure exactly two decimal places are shown. If the number has fewer than two decimal places, 
it will add zeros to fill in the remaining places.*/

const hundred = 100000
console.log(hundred.toLocaleString("en-IN")) //By default, "en-US" will be the format

/*
The toPrecision() method helps you control how many digits are shown in a number.
Imagine you have a long decimal number, like 123.456789. If you use toPrecision(4), it'll round it to have 4 
important digits. So, it becomes 123.5 because 123.456789 rounded to four significant digits is 123.5.
If you use toPrecision(8) on the same number, it doesn't need to round because the original number already has 
more than 8 digits. So, it simply shows the original number: 123.456789.
*/

const num3 = 123.456749 /*If the number after the precision number is 5 or more, the previous number will be 
increased by 1. Otherwise, all the numbers up to the precision number will be returned without any change.*/
console.log(num3.toPrecision(5)) //123.46 will be logged
console.log(num3.toPrecision(7)) //123.4567 will be logged

console.log(Math.abs(-10))
console.log(Math.min(10, -10, 11))
console.log(Math.max(10, -10, 11))
console.log(Math.random()) //will return a random number between 0 and 1
console.log((Math.random() * 10) + 1) /* Will return a random number between 1 and 10. If you don't add 1, the 
random number generated will be between 0 (inclusive) and 10 (exclusive), meaning it will not include 10.*/

const min = 20
const max = 30

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //will return a number between the min and max number

console.log(Math.ceil(3.2))
console.log(Math.round(3.49))
console.log(Math.floor(3.2))