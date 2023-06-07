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
const testvalue=(num)=>{
  return  ((Math.abs(100-num)<=20) || (Math.abs(400-num)<=20))
}

// testvalue(50)

//10 . Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string. 

const pystring=(value)=>{
  if(value && value.startsWith('Py')){
    return value
  }
  return `Py${value}`
}
// console.log(pystring('Pyar'))

// 11. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  

const removeChar=(userstring,position)=>{
  const newChar= userstring.substring(0,position+1)
  return newChar
}
// console.log(removeChar("Python",0));

