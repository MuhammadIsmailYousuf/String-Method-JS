//1. Write a program that takes two user inputs for first and 
//last name using prompt and merge them in a new variable 
//titled fullName. Greet the user using his full name.

let fName = prompt('Enter your First Name');
let lName = prompt('Enter your Last Name');

let fullName = (fName + " " + lName)
alert(fullName);

//2. Write a program to take a user input about his favorite 
//mobile phone model. Find and display the length of user 
//input in your browser

let mobile = prompt('Enter Your Mobile Phone Model');
let length = mobile.length

console.log(length);
    

//3. Write a program to find the index of letter “n” in the word
//“Pakistani” and display the result in your browser.

let country1 = 'Pakistani';
console.log("Index of 'n':"+ country1.indexOf('n'));

//4. Write a program to find the last index of letter “l” in the 
//word “Hello World” and display the result in your browser

let word = 'Hello World';
console.log("Last index of 'l':"+ word.lastIndexOf('l'));

//5. Write a program to find the character at 3rd index in the 
//word “Pakistani” and display the result in your browser.

let country = 'Pakistani';
console.log("character at 3rd index is :"+ country[3]);


//6. Repeat Q1 using string concat() method.

console.log(fName.concat(lName));



