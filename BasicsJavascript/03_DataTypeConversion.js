/*

in javascript there is little confusion and issues regarding data type conversion using DataType Number;

*/

let age = 24;

let ageString = String(age);

// console.log(age);

// let rollNumber = "21";
let rollNumber = "21abc";

let rollnum = Number(rollNumber);

// console.log(typeof ageString);
// console.log(ageString);

// console.table([rollNumber, rollnum]);
console.log(typeof rollnum);
console.log(rollnum);

//Bollean Datatype
let isClicked = false;

let isclickednum = Number(isClicked);

console.log(isclickednum);

console.log(typeof isClicked);

console.log(isClicked);

let price = -1;
let pricebollean = Boolean(price);
console.log(pricebollean);
