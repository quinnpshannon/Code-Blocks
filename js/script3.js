// II. Loops

// Remember: USE let when you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)
// A. The basics

//     Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let x=0;x<=10;x++){
    console.log(x);
}
//     Write a loop that will print out all the numbers from 10 up to and including 400
for (let x=10;x<=400;x++){
    console.log(x);
}
//     Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let x=12;x<=4000;x+=3){
    console.log(x);
}
// alternatively
// for (let x=12;x<=4000;x++){
//     if (x%3==0) console.log(x);
// }

// B. Get even

//     Print out the numbers that are within the range of 1 - 100
for (let x=1;x<=100;x++){
    
    if (x%2==0) {
        console.log(x+" is an even number");
    } else console.log(x);
}
//     Adjust your code to add a message next to even numbers only that says: "is an even number"

// C. Give me Five

//     For the numbers 0 - 100, print out "I found a <number>. High five!" if the number is a multiple of five Example Output:
for (let x=0;x<=100;x++){    
    if (x==0) continue;
    if (x%3==0) {
        console.log(`I found a ${x}. Three is a crowd`);
    }
    if (x%5==0) {
        console.log(`I found a ${x}. High five!`);
    }
}
// I found a 5. High five!
// I found a 10. High five!

//     Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three Example Output:

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!

//     For numbers divisible by both three and five, be sure your code prints both messages

// D. Savings account

//     Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account. 
// I HAVE A CONCERN HERE BUT IT IS SEMANTICS
//YOU MEAN ALL INTEGERS! IF YOU MEANT ALL NUMBERS THE TOTAL IS INFINITE
let bank_account = 0; //Sad day, Empty bank account
for(let x=1;x<=10;x++) {
    bank_account += x;
}
//     Check your work! Your bank_account should have $55 in it.
console.log(`Your Total Balance: \$${bank_account}`);
//     You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
bank_account = 0; //Had to buy Groceries. Empty account, another sad day.
for(let x=1;x<=100;x++) {
    bank_account += x;
}
bank_account *=2; //Double your Salary? That's a pretty good bonus.
console.log(`Your Total Balance: \$${bank_account}`);
//     Check your work! Your bank_account should have $10,100 in it.
