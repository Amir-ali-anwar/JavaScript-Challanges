// Resource https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const currentDay = () => {
  const daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date();
  let today = date.getDay();
  const timeshif = date.getHours() < 12 ? "AM" : "PM";

  console.log(`Today is: ${daylist[today]}`);
  console.log(
    `Time is: ${date.getHours()} ${timeshif} ${date.getMinutes()} ${date.getMilliseconds()} `
  );
  // console.log(`Today is: ${date.getMinutes()}`);
  // console.log(`Today is: ${date.getMilliseconds()}`);
  return date;
};

// currentDay()

// 2. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const mmDdYy = () => {
  let date = new Date();
  const currentMonth = date.getMonth() + 1;
  let singleMonth = currentMonth > 9 ? "" : "0";
  let today = date.getDate();
  const currentYear = date.getFullYear();
  let output = `'output format is mm-dd-yyyy', ${singleMonth}${currentMonth}-${today}-${currentYear}`;
  console.log(output);
  return output;
};
// mmDdYy()

// 3. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

const triangleArea = (a, b, c) => {
  if (!a || !b || !c) throw Error("please provide values");
  const s = a + b + c / 2;
  const area = Math.floor(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
  console.log(area);
  return area;
};
// triangleArea(1,2,4)

// 4. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
const integetLimit = (param) => {
  if (!param) throw Error("please provide values");
  const ramdomNumber = Math.ceil(Math.random() * 10);

  const gnum = prompt("Guess the number between 1 and 10 inclusive");
  if (ramdomNumber === gnum) {
    console.log("Good Work");
  } else {
    console.log("Not matched");
  }
  return param;
};

// integetLimit(12);
// let number1 = document.querySelector("#firstNumber");
// console.log({number1});
// 5. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).
function calculator() {
  let result1 = document.querySelector("#result");
  let btns = document.querySelectorAll(".btn");
  let number1 = document.getElementById("firstNumber").value;
  // console.log({number1});
  let number2 = document.getElementById("secondNumber").value;
  btns?.forEach((btn) => {
    let buttonContent = btn.textContent;
    btn.addEventListener("click", (e) => {
      let buttonText = e.currentTarget.textContent;
      if (buttonText === "Multiply") {
        result1.textContent = number1 * number2;
      }
      if (buttonText === "Divide") console.log("Divide");
    });
  });
}

// calculator();

// 6. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

const integersSum = (a, b) => {
  let result;
  if ((!a, !b)) throw Error("please provide both values");
  if (a === b) {
    return (result = 3 * (a + b));
  } else {
    return (result = a + b);
  }
};
// console.log(integersSum(3,3));

// 7. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.

const absoluteDifference = (num) => {
  if (!num) throw Error("please provide num value");
  if (num > 19) {
    return (num - 19) * 3;
  } else {
    return 19 - num;
  }
};

// console.log(absoluteDifference(2));

// 8. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

const pairOfNumbers = (a, b) => {
  if (a === 50 || b === 50 || a + b === 50) return true;
};
// console.log(pairOfNumbers(16, 34));

//9. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
const testvalue = (num) => {
  return Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20;
};

// testvalue(50)

//10 . Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

const pystring = (value) => {
  if (value && value.startsWith("Py")) {
    return value;
  }
  return `Py${value}`;
};
// console.log(pystring('Pyar'))

// 11. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

const removeChar = (userstring, position) => {
  const newChar = userstring.substring(0, position + 1);
  return newChar;
};
// console.log(removeChar("Python",0));

//12. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

const createString = (string) => {
  const lastString = string.slice(-3);
  let newstring = `${lastString} ${string} ${lastString}`;
  return newstring;
};

// console.log(createString('data'));

//13. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

const checkMuliple = (num) => {
  if (num % 3 === 0 || num % 7 === 0) return true;
  return false;
};

// console.log(checkMuliple(2));

//14. Write a JavaScript program to find the largest of three given integers.

const maxOfThree = (num1, num2, num3) => {
  let maxvalue = num1;
  if (num2 > maxvalue) {
    maxvalue = num2;
  }
  if (num3 > maxvalue) {
    maxvalue = num3;
  }
  return maxvalue;
};

// console.log(maxOfThree(12, 23, 1111));

//15. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.

const generateString = (userstring) => {
  let newstring = "";
  if (userstring.length <= 3) {
    newstring = userstring.toUpperCase();
  }
  if (userstring.length > 3) {
    newstring = userstring.toLowerCase().substring(0, 3);
  }
  // console.log(userstring);
  return newstring;
};
// console.log(generateString('re'))

// 16.Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false.
//Click me to see the solution

// let cat = Object.create({}, {
//   name: {
//     value: "Whiskers",
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
// });
// console.log(cat.name );

// Javascript basic concepts
// console.log(a);
// var a=10;
// const a=12
// console.log(a);

const myfun = () => {
  let a = 10;

  console.log(a);
  return a;
};
// console.log(myfun());

// hoisting

let myname = "amir";
function printName() {
  console.log(myname);
}
// printName()
myname = "amir ali anwar";

// Closure

function outerFunction(outerVariable) {
  return function innerFunction(innervariable) {
    console.log(`Outer Variable:${outerVariable}`);
    console.log(`Inner Variable:${innervariable}`);
  };
}

const mewFunction = outerFunction("outside");

// console.log(mewFunction("amir ali anwar"));

// output challange
var array = [1, 2, 3, 4, 5, 6];
function output() {
  for (var i = 0; i <= array.length; i++) {
    (function inner(i) {
      setTimeout(() => {
        console.log();
        console.log(array[i]);
      }, i * 1000);
    })(i);
  }
}
// output();

// 17. Find the second largest number in the given array

let givenArray = [3, 4, 5, 9, 7, 5, 6, 9];

// first solution
function second_highest(arr) {
  return (second_highest = arr.sort(function (a, b) {
    return b - a;
  })[1]);
  // return second_highest;
}
// console.log(second_highest(givenArray))

// second solution
const arraylarger = (arraylarger) => {
  if (arraylarger.length < 2) return null;
  let largest = Math.max(...arraylarger);
  let secondLargest = -Infinity;
  for (let index = 0; index < arraylarger.length; index++) {
    if (arraylarger[index] > largest) {
      secondLargest = largest;
    }
  }
};

//18. Find the largest and smallest element in the arrays.

const arr = [12, 3, 45, 56, 92];
const getLargest = (arr) => {
  return arr.reduce((arr, curr) => Math.max(arr, curr));
};
// console.log(getLargest(arr))

// let button = document.querySelector(".btn");
// const handler = button.addEventListener("click", infinite);
function infinite() {
  for (let index = 20; index > 0; index++) {
    console.log(index);
  }
}

// infinite()

const magicsquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

// for (let index = 0; index < magicsquare.length; index++) {
//   const row = magicsquare[index];
//   let sum = 0;
//   for (let j = 0; j < row.length; j++) {
//     sum += row[j];
//   }
//   console.log(`${row} summed to sum ${sum}`);
// }

// for (const iterator of magicsquare) {
//   let sum = 0;
//   for (const row of iterator) {
//     sum += row;
//   }
//   console.log(`${iterator} summed to sum ${sum}`);
// }

// 19. Write a JavaScript program to convert letters of a given string alphabetically.

const alphabeticOrder = (str) => {
  console.log(str);
};
// alphabeticOrder('Python')

// event loop

// console.log("start")
// setTimeout(()=>{
//   console.log("callback1");
// },3000)

// console.log('end')

// setTimeout(() => {
//   console.log("callback2");
// }, 10000);

// Promise.resolve().then(()=>{
//   console.log("resolve");
// })

//20.  Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

const matchObj = (obj1, obj2) => {
  const object1 = Object.keys(obj1);
  const object2 = Object.keys(obj2);
  if (object1.length !== object2.length) return false;
  for (const key of object1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    } else {
      return true;
    }
  }
};

// console.log(
//   matchObj(
//     { age: 25, hair: "long", papu:'haye' },
//     { hair: "long", beard: true }
//   )
// );
// second solution

const matches = (obj, souce) => {
  return Object.keys(obj).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === souce[key]
  );
};

const obj1 = { age: 25, hair: "long", beard: true };
const obj2 = { hair: "long", beard: true };

// console.log(matches(obj1, obj2)); // true

//21. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.

const csv_toArray = (data) => {
  const row = data
    .trim("")
    .split("\n")
    .slice(0, data.length - 1);
  let newarray = [];
  for (let index = 0; index < row.length; index++) {
    const newrow = row[index].split(",");
    newarray.push(newrow);
  }
  return newarray;
};
// console.log(csv_toArray('a,b\nc,d'))
// console.log(csv_toArray('a;b\nc;d', ';'))
// console.log(csv_toArray('John,Doe,25\nJane,Smith,30\nBob,Johnson,40'))

//22. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row.

const CSV_to_JSON = (data) => {
  const title = data.slice(0, data.indexOf("\n")).split(",");
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((value) => {
      const singlevalues = value.split(",");
      return title.reduce((obj, title, index) => {
        return { ...obj, [title]: singlevalues[index] };
      }, {});
    });
};
// console.log(CSV_to_JSON('col1,col2\na,b\nc,d')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];

// 23. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.

const filter_Out_array = (array, ...args) => {
  let sorted = array.filter((singleArg) => !args.includes(singleArg));
  return sorted.forEach((data) => array.push(data));
};

let arra1 = ["a", "b", "c", "a", "b", "c"];
// let sortFN= filter_Out_array(arra1, "a", "b");
// console.log(filter_Out_array(arra1, "a", "b"));

// 24. Write a JavaScript program to filter out non-unique values in an array.

const not_Unique=(arr)=>{
 return arr.filter((item,index )=>{
   return arr.indexOf(item)=== arr.lastIndexOf(item)
  })
 }
// console.log(not_Unique([1, 2, 2, 3, 4, 4, 5]));  

// 25. Write a JavaScript program to create an array out of the arrays by creating each possible pair from the arrays.

const arrayPairs=(arr1,arr2)=>{
  return arr1.map((item1) => {
  return arr2.map((item2) => [item1, item2])
}).reduce((acc,curr)=>{
   
    return [...acc,...curr]
  },[]);
}
console.log(arrayPairs([1, 2], ['a', 'b']))