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
// console.log("Example 1");
// console.log("Example 1 causes bugs in the rest. It is commented out");
// // {
// //     var x=1;
// //     {
// //         var x=2;
// //         console.log(x); // value is 2
// //     }
// //     console.log(x); // value is STILL 2! The scope is GLOBAL not BLOCK
// //     // This is B A D
// // }
// console.log("Example 2");
// {
//     let x=1;
//     {
//         let x=2;
//         console.log(x); // value is 2
//     }
//     console.log(x); // value is 1! Things are Scoped Properly!
//     // This is G O O D
// }
// console.log("Example 3");
// let x=10;
// let y=5;
// {
//     let z=x+y;
//     console.log(z);
// }
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

// let num=75;
// if(num >100 && num > 0) {
//     console.log(`num: ${num} is Positive and greater than 100`);
// } else if (num<=100 && num > 0) {
//     console.log(`num: ${num} is Positive and less than or equal to 100`);
// }else if (num < 0) {
//     console.log(`num: ${num} is Negative`);
// }else {
//     console.log(`num: ${num} is Zero`);
// }

// let grade=100;
// if(grade >=90) {
//     console.log("A");
// } else if (grade >= 80) {
//     console.log("B");
// }else if (grade >= 70) {
//     console.log("C");
// }else if (grade >= 55) {
//     console.log("D");
// }else {
//     console.log("F");
// }
//THis is a cool comment to make a change to this file.

// let num1 = parseInt(prompt('Enter a number:'));
// let op = prompt('Enter a number:');
// let num2 = parseInt(prompt('Enter a number:'));
// let result;

// switch (op) {
//     case '+':
//         result = num1 + num2;
//         break;
//     case '-':
//         result = num1 - num2;
//         break;
//     case '*':
//         result = num1 * num2;
//         break;
//     case '/':
//         if(num2 == 0){
//             result="You cannot divide by zero!";
//         } else {
//         result = num1 / num2;
//         }
//         break;
//     case '%':
//         if(num2 == 0){
//             result="You cannot divide by zero!";
//         } else {
//             result = num1 % num2;
//         }
//         break;
//     default:
//         result="Not a valid operand!"
// }
// console.log(result);

console.log("========== PART 1 ==========");
let radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
const plantSpace = .8;
let plants = 20;
let weeks = 5;
let plantArea;
let gardenStatus;

for(let x=1;x<=weeks;x++){
    plantArea = (plants*plantSpace)/area;
    if(plantArea >= .8){
        gardenStatus = 'Pruned';
        x+=weeks;
    } else if(plantArea >= .5){
        gardenStatus = 'Monitored';
    } else {
        gardenStatus = 'Planted';
    }
    console.log(`Week ${x}`);
    console.log(`There are currently ${plants} plants.`);
    console.log(`Plants need to be ${gardenStatus}.`);
    console.log(`They are occupying  ${plantArea*100}% of the space.`);
    console.log(`====================`);
    plants*=2;
}
console.log("========== PART 2 ==========");
weeks = 10;
plants = 100;
areaCalc = PI * radius * radius;
for(let x=1;x<=weeks;x++){
    plantArea = (plants*plantSpace)/area;
/*    if(plantArea >= .8){
        gardenStatus = 'Pruned';
        // x+=weeks;
    } else if(plantArea >= .5){
        gardenStatus = 'Monitored';
    } else {
        gardenStatus = 'Planted';
    }
    */
    console.log(`Week ${x}`);
    console.log(`There are currently ${plants} plants.`);
    console.log(`They are occupying  ${plants*plantSpace} square meters.`);
    console.log(`====================`);
    plants*=2;
}
plants/=2;
console.log(`There are currently ${plants} plants.`);
console.log(`To have this many plants without pruning for ${weeks} weeks`);
console.log(`you would need to have ${(plants*plantSpace)/.8} square meters.`);
 //Oh huh, that's the same .8 I could probably trim both numbers, but this leaves it open to modifications
console.log(`That's a circle with a radius of ${Math.sqrt((plants*plantSpace)/.8)} meters.`);

console.log("========== PART 3 ==========");
weeks = 10;
plants = 100;
areaCalc = PI * radius * radius;
for(let x=1;x<=weeks;x++){
    plantArea = (plants*plantSpace)/area;
/*    if(plantArea >= .8){
        gardenStatus = 'Pruned';
        // x+=weeks;
    } else if(plantArea >= .5){
        gardenStatus = 'Monitored';
    } else {
        gardenStatus = 'Planted';
    }
    */
    console.log(`Week ${x}`);
    console.log(`There are currently ${plants} plants.`);
    console.log(`They are occupying  ${plants*plantSpace} square meters.`);
    console.log(`====================`);
    plants*=2;
}
plants/=2;
console.log(`There are currently ${plants} plants.`);
console.log(`To have this many plants without pruning for ${weeks} weeks`);
console.log(`you would need to have ${(plants*plantSpace)/.8} square meters.`);
 //Oh huh, that's the same .8 I could probably trim both numbers, but this leaves it open to modifications
console.log(`That's a circle with a radius of ${Math.sqrt((plants*plantSpace)/.8)} meters.`);
//let plantArea = plants * plantSpace;
//let result = plantArea / area;
// console.log(result);
// plants *=2;
// plantArea = plants * plantSpace;
// result = plantArea / area;
// console.log(result);
// plants *=2;
// plantArea = plants * plantSpace;
// result = plantArea / area;
// console.log(result);