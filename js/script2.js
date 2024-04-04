//Ooooook, let's start over with the new assignment
console.log(`===== Section 1 =====`)
// Section 1
// 1. Variables & Data types
// A. Variables
// Declare a new constant variable called myName and assign it your name?
const myName = "Quinn Shannon";
// Declare a variable called favoriteLanguage and assign it the value of Python?
let favoriteLanguage = "Python";
// Declare a new variable called newFavoriteLanguage and assign it JavaScript;
let newFavoriteLanguage = "JavaScript";
// Assign the value of newFavoriteLanguage to favoriteLanguage referencing each other.
favoriteLanguage = newFavoriteLanguage;
// Finally log or print a message using a Literal String, make use of the variables myName and favoriteLanguage.
console.log(`My name is ${myName} and my favorite programming language is ${favoriteLanguage}!`);
// B. Strings
// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
let firstVariable = "Hello World";
// Change the value of this variable to some number
firstVariable = 777;
// Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariable to any string.
firstVariable = "String, Back again!";
// What is the value of firstVariable? Log it!
console.log(firstVariable);
console.log(typeof firstVariable);
console.log(secondVariable);
console.log(typeof secondVariable);


// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated. ex: Hello, my name is Jean Valjean
yourName = myName;
inigo = "Hello, my name is ";
prepare = inigo+yourName;
console.log(prepare);
// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console:

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a <= b);
  console.log(c >= d);
  console.log('Name' == 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false == false)
  console.log(e == 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');
// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
const animal = 'cow ';
// Write code that will print out "mooooo" if the it is equal to cow
if (animal.trim().toLowerCase() === 'cow'){
    console.log("mooooo")
} else {console.log("Hey! You're not a cow.")}
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow." Commit
// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
let driversAge = 16;
if (driversAge >= 16){
    console.log("Here are the keys!");
} else {
    console.log("Sorry, you're too young.");
}


// A. Talk about it in your group:
// What are the things in an array called?
// Do Arrays guarantee those things will be in order?
// What real-life thing could you model with an array?
// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes.
// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?

// Change the value of "Hello"to "World"

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// What would you write to access the 3rd element of the array?

// Change the value of "Github" to "Octocat"

// Add a new element, "Cloud City" to the array

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
// Given the following array: const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5from the beginning of the array.
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

// F. Biggie Smalls
// Create a variable that contains an integer.
let aVariable = secondVariable;
// Write an if ... else statement that:
if (aVariable < 100){
console.log("little number"); // if the number is entered is less than 100
} else {
console.log("big number");   // if the number is greater than or equal to 100.
}
// G. Monkey in the Middle
// Write an if ... else if ... else statement:
aVariable = 7; //Let's change it so we can display Monkey.
if(aVariable < 5) {
console.log("little number"); // if the number entered is less than 5.
} else if (aVariable > 10){
    // If the number entered is more than 10, log 
    console.log("big number");
} else {
    console.log("monkey"); //Otherwise, log "monkey".
}

// Not just yet!
// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "Per Scholas hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];
// // Thom's closet is more complicated. Check out this nested data structure!!

// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.