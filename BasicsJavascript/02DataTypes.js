"use strict"; // this Keyword is used to enable strict mode which means whole file will use the JS Modern Syntax//

// alert("Hello Everyone!"); we cannot use the alert statement in the terminal directly like the  browser console, it can be used in the terminal by some other method , which will be discussed later.

/*
Data Types in the JavaScript.

Number: range is 2^53
bigint: bigger range than number
String
Boolean
Undefined:- in which we declare the variable and does not assigned it.

Null : ek aisa value jiska matlab hai ( Variable ki Value Undefined nhi hai , mtlb abhi wo khaali hai  )

*/
// User ne server ko request bheji: "mujhe temperature chahiye"

// Agar server sahi kaam kare
let temperature = 32;
// 32 ka matlab actual temperature available hai

// Agar server kharab ho jaye / data fetch na ho
let temperatureFromServer = null;
// null ka matlab: data exist karta hai,
// but abhi value available nahi hai

// ❌ 0 use nahi kar sakte kyunki 0 bhi ek valid temperature ho sakta hai
// 0 dikhane ka matlab galat information hogi

if (temperatureFromServer === null) {
  console.log("Temperature data is currently unavailable");
} else {
  console.log(`Temperature is ${temperatureFromServer}°C`);
}
