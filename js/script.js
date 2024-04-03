/* Scope!
Scope has to do with Accessability and functions that you have access to.
3 types of Scope (for most code):
Global (default) Where all the code is executed Outside of the Curly Brackets
Module - the scope of code running in a module (different file)
Function - The scope created with a function.

Additional Scope for variables only:
Block scope - the scope contained in Curly Brackets

Principle of least access: Based on the idea that the limiting of variables and functions helps reduce bugs in the code, and acts as a form of "Code Security"
Practical Benefit: You can use the same named variables in different blocks!

---GLOBAL SCOPE---
The global scope is represented by the Window object
 */

/*
---BLOCK SCOPE---
*/
console.log("Example 1");
console.log("Example 1 causes bugs in the rest. It is commented out");
// {
//     var x=1;
//     {
//         var x=2;
//         console.log(x); // value is 2
//     }
//     console.log(x); // value is STILL 2! The scope is GLOBAL not BLOCK
//     // This is B A D
// }
console.log("Example 2");
{
    let x=1;
    {
        let x=2;
        console.log(x); // value is 2
    }
    console.log(x); // value is 1! Things are Scoped Properly!
    // This is G O O D
}
console.log("Example 3");
let x=10;
let y=5;
{
    let z=x+y;
    console.log(z);
}
// console.log(z); // This throws an error, because it can't go into Children looking for scope

// let age = prompt("How old are you?");
// if (age >= 18){
//     console.log("Access Granted!");
//     //This is where we put what happens if they are old enough   
// }
// else {
//     //This is where we tell them to Beat it
//     console.log("Access Denied!");
// }

let grade=100;
if(grade >=90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
}else if (grade >= 70) {
    console.log("C");
}else if (grade >= 55) {
    console.log("D");
}else {
    console.log("F");
}