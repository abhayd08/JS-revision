/* 
Github codespace configuration:
    1. Create codespace through github repo.
    2. Add dev container configuration files through command pallete by -
        Command Pallete > Add Dev Configuration Files > Create a new configuration > Select Node.js and Javascript.
*/


/* 
Earlier to Node.js, Javascript was only used as a language to create the frontend of the website as it could only be executed 
in browser because of the V8 engine present in browsers.
*/


/* 
JavaScript is most well-known for being the programming language of the web. But it has become so much more. Now, it is used 
not only for the front-end development, but also for back-end development, and you can even create mobile apps using JavaScript 
and React. 
*/


/* 
JavaScript is a language that builds interactivity into web pages. Almost every website runs JavaScript in some form or 
another. The reason for this is the fact that since its inception in 1995, JavaScript has been the main way to interact with 
web pages on the client side, the front-end side of websites and web applications. Using JavaScript, updates are displayed in 
real time on our devices. 
Over the years, there have been some alternatives to JavaScript, such as VBScript and more recently Typescript. But even 
typescript compiles down to JavaScript so browsers can understand it.
One of the main reasons that developers use JavaScript is because of how easy it is to use. There are many programming languages 
where a newcomer needs to do a substantial amount of prep work to even get set up and ready to learn. However, with JavaScript 
it's as simple as opening the browser's developer tools and navigating to the console tab because every browser has a 
JavaScript engine built in and you can interact with it using the console. 
It's used on the client side of sites as plain JavaScript also known as vanilla JavaScript. 
On the server, it can be used to power up websites, communicate with databases, and provide a native field to web apps. 
It's used to build mobile apps using technologies like React Native.
*/


const constant = undefined //Constant whose value cannot be changed once defined.
let var1 = "Variable1" //Variable declraed using let. It cannot be re-declared but re-assignment of the value can be done.
var var2 = "Variable2" //Can be re-declared as well as re-assigned but using var is not preferred.
var3 = "Variable2" //If no keyword is used, variable is declared using var

console.table([constant, var1, var2, var3])


/*
A variable is a container that stores a value. A variable is a name given to the memory location of the computer.
Value (on the right hand side) can also be known as literal.

RULES FOR CHOOSING VARIABLE NAMES:
    1. Letters, digits, underscores, and a $ sign allowed.
    2. Must begin with a $, underscore, or a letter.
    3. Js reserved words cannot be used as a variable name.
    4. They are case-sensitive.
*/