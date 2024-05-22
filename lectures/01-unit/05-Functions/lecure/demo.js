// const arrayOne = [2];

// arrayOne.push(34);

// let param;

// function myFirstFunc(param1, param2, param3, param4) {
//   const hello = "Hello from return";

//   // console.log('Hello from myFirstFunc')

//   // console.log(hello);
// }

// // console.log(myFirstFunc());
// // myFirstFunc()

// function addNums(param1, param2) {
//   console.log(param1 , param2);
//   // console.log(param1 + param2);

//   return param1 + param2;
// }

// const threeAndFour = addNums(3);

// // console.log(threeAndFour);





// function langugeCheck(country) {
//   if (country === "Mexico" || country === "Spain") {
//     return "Spanish";
//   } else if (country === "Canada") {
//     return ["English", "French"];
//   }

//   let unknownCountry = country; //undifend
//   let returnText; // undefine
//   // console.log(unknownCountry);
//   if (unknownCountry) {
//     // undefibned (falsy)
//     returnText = "We haven't learned that language yet!";
//   }

//   return returnText || "Please enter a country"; // falsy
// }

// // console.log(langugeCheck("Canada"));


// function calculateTip( amount, percentage = 0.15) {

//   if (!percentage) {
//     percentage = 0;
//   }

//   return amount * percentage;
// }

// // console.log(calculateTip(10)); // 1.5
// // console.log(calculateTip(10, 0.2));


function calculateTotalWithTax(price) {
  const tax = 0.05;

  function loggers() {
    console.log(tax + ' from logger');
  }

  loggers()
  
  return price + price * tax;
}

// console.log(calculateTotalWithTax(4));



const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];


for (let i = 0; i < arr1.length; i++) {
  const item = arr1[i];
  console.log(item);
}

for (let i = 0; i < arr2.length; i++) {
  const item = arr2[i];
  console.log(item);
}


console.log(item);
