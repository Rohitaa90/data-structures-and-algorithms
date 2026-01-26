// Hello this is a Basics Of Variables and Keywords used in the javascript.
let myName = "Rohit Rawat";
const myAge = 25;
mycity = "Delhi"; // this is not a good practice to use in hte programme. //
let Favcolour;
// const FavDestination; // this is not executable because const keyword always  need an intialization .

// myAge = 24;// Assignment to a constant Varibale is not Allowed in the javascript.
// prefer not to change the value of a constant varible.

myName = "Abhishek Rawat"; //This is Changable because it uses the let keyword.

console.log(myName);
console.log(myAge);
console.log(Favcolour); // This will show undefined because it is not assigned any value yet.

/*
Declaration | Initialzation | Assignment

let myAge; this is called the declaration ( Means telling compiler that a variable exists)
let myAge = 25; this is called initialization (Means giving a variable a first value at the time of decalration )
myAge = 24; this is called assignment ( means changing or giving the value to an existing variable)

*/

// Using Var keyword

/* Hinglish Explanation :


    Var = Function Scoped Variable
    Let = Block Scoped Variable
    Const = Block Scoped Constant Variable

    Function Scoped Variable means ki agar aapne var keyword ka use kiya hai to wo variable sirf usi function ke andar accessible hoga jaha pe wo declare hua hai.
    Block Scoped Variable means ki agar aapne let ya const keyword ka use kiya hai to wo variable us block ke andar accessible hoga jaha pe wo declare hua hai. Block matlab curly braces {} ke andar wala area.
    

*/