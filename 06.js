let str1 = "Abhay"
let str2 = new String("Abhay")

console.log(typeof str1) //string
console.log(typeof str2) //object since we are creating a string using the String constructor

//console.log(str1.__proto__) //will throw an error as the string is a primitive data type
console.log(str2.__proto__)

const str3 = "Abhay Dixit"
const newStr3 = str3.slice(6) //returns a substring from the 6th index up to the end of the string.
console.log(newStr3)
const newStr4 = str3.slice(-1, -2) || str3.slice(4, 2) /* both expressions will result in an empty string because 
the start index must precede the end index in case of slice. */
console.log(newStr4)
const newStr5 = str3.slice(2, -1) //returns a substring from 2nd index up to the last index.
console.log(newStr5)

const str4 = "Abhay"
const newStr6 = str4.substring(2) //will work the same as the slice method.
console.log(newStr6)
const newStr7 = str4.substring(-2, -2) //an empty string will be returned if both the indexes are negative (both will be trated as 0).
console.log(newStr7)
const newStr8 = str4.substring(-2, 2) /* The substring method in JavaScript doesn't accept negative indices. If 
you pass a negative value as an argument, it will be treated as 0. */
console.log(newStr8)
const newStr9 = str4.substring(4, 2) /* The substring method in JavaScript expects the first parameter to be the 
starting index and the second parameter to be the ending index. However, if the starting index is greater than 
the ending index, the method will swap them. */
console.log(newStr9)

const str5 = "Abhay Dixit"
const newStr10 = str5.replace(" ", "-")
console.log(newStr10)

const str6 = "Abhay Dixit"
const newStr11 = str6.split(" ")
console.log(newStr11)

const url = "    https://www.abhaydixit.in"
console.log(url)
const newUrl = url.trim()
console.log(newUrl)
console.log(newUrl.includes("abhay"))
console.log(newUrl.replace("https://", ""))