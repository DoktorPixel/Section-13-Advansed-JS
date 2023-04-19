// // // 1. You are a new programmer and You are asked to write a program that reads ten numbers and figures out which number is the third highest.
// Initialize an array to hold the numbers
let numbers = [];
// Prompt the user to enter ten numbers, and add them to the array
for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt(`Enter number ${i + 1}:`));
  numbers.push(num);
}
// Sort the array in descending order
numbers.sort((a, b) => b - a);
// The third highest number is at index 2
let thirdHighest = numbers[2];
// Output the result
console.log(`The third highest number is ${thirdHighest}`);

// // //2. First Factorial
// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
// Examples: (Input: 4 Output: 24) (Input: 8 Output: 40320)

//we can use a recursive function
function FirstFactorial(num) {
  // Base case: if num is 0 or 1, return 1
  if (num === 0 || num === 1) {
    return 1;
  }
  // Recursive case: num > 1, multiply num by the factorial of num - 1
  else {
    return num * FirstFactorial(num - 1);
  }
}
// Test the function
console.log(FirstFactorial(4)); // Output: 24
console.log(FirstFactorial(8)); // Output: 40320

//we can use a For loop
function FirstFactorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
// Test the function
console.log(FirstFactorial(4)); // Output: 24
console.log(FirstFactorial(8)); // Output: 40320

// // // Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

function cleanRoom(arr) {
  // First, sort the array
  arr.sort(function (a, b) {
    return a - b;
  });
  // Next, initialize variables to keep track of current group and previous value
  let currentGroup = [];
  let previousValue = null;
  const result = [];
  // Loop through the sorted array
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    // Check if the current value is the same as the previous value
    if (currentValue === previousValue) {
      currentGroup.push(currentValue);
    } else {
      // If it's not the same, add the current group to the result (if it's not empty)
      if (currentGroup.length > 0) {
        result.push(currentGroup);
      }
      // Start a new group with the current value
      currentGroup = [currentValue];
    }
    // Update the previous value
    previousValue = currentValue;
  }
  // Add the last group to the result (if it's not empty)
  if (currentGroup.length > 0) {
    result.push(currentGroup);
  }
  // Finally, return the result
  return result;
}
console.log(cleanRoom([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]));
// Output: [[1,1,1,1],[2,2,2],4,5,10,[20,20],391,392,591]
console.log(cleanRoom([1, "2", "3", 2]));
// Output: [[1,2], ["2", "3"]]

// // // or

function cleanRoom(array) {
  let arraySort = array.sort(function (a, b) {
    return a - b;
  });
  let org = [arraySort[0]];
  // set variable org as the temporary container (list) for values that are the same
  // give it original value as arraySort[0] because we start from the first element
  let ans = [];
  for (let i = 0; i < arraySort.length; i++) {
    if (arraySort[i] === arraySort[i + 1]) {
      org.push(arraySort[i + 1]);
    } else {
      org.length === 1 ? ans.push(org[0]) : ans.push(org); // if the value is unique, it would not be put in a list
      org = [arraySort[i + 1]]; // reset org to start examine on the next value/ element
    }
  }
  return ans;
}
cleanRoom(array);

// Bonus: Make it so it organizes strings differently from number types.
// i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
// notice: the following solution is for array with strings and number only
function cleanRoomSN(array) {
  // Sorted out elements by type (strings and number) and make them new arrays
  // so we can organize them in order later
  const arrayString = array.filter((value) => typeof value === "string");
  const arrayNumber = array.filter((value) => typeof value === "number");
  let answer = [];
  // use cleanRoom function to organized both arrays into ordered little arrays
  // and push the arrays/ elements into the answer list
  cleanRoom(arrayNumber).forEach((e) => answer.push(e));
  cleanRoom(arrayString).forEach((e) => answer.push(e));
  return answer;
}

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]
function findTwoNumbers(arr, target) {
  // Используем объект для хранения уже пройденных значений
  const seen = {};
  // Пройдёмся по массиву
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    // Вычислим значение, которое нужно найти, чтобы получить target
    const complement = target - currentValue;
    // Если значение уже было пройдено, значит мы нашли пару
    if (seen[complement]) {
      return [complement, currentValue];
    }
    // Если нет, добавим текущее значение в seen
    seen[currentValue] = true;
  }
  // Если не найдено, вернём null
  return null;
}
console.log(findTwoNumbers([1, 2, 3], 4));
// Ожидаемый результат: [1,3]

// // //
function arraySum(arr, target) {
  arr.forEach(function (num, i) {
    for (let j = 1; j <= arr.length; j++) {
      // check each element and iterate over the rest to find out if their sum is the target
      // j is 1, we don't want to sum each element with themselves
      if (arr[i] + arr[i + j] === target) {
        // create a new array and put correct elements into that
        let arr2 = [arr[i], arr[i + j]];
        console.log(arr2);
        return arr2;
      }
    }
  });
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 14;
arraySum(arr, target);
// [4, 10]
// [5, 9]
// [6, 8]

// // // Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

function convertColor(color) {
  if (color.includes("#")) {
    // HEX to RGB
    let hex = color.replace("#", "");
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
  } else if (color.includes("rgb")) {
    // RGB to HEX
    let rgb = color.match(/\d+/g).map(Number);
    let hex = "#";
    rgb.forEach((c) => {
      let hexComponent = c.toString(16);
      hex += hexComponent.length == 1 ? "0" + hexComponent : hexComponent;
    });
    return hex;
  } else {
    // Invalid color format
    return null;
  }
}

// HEX to RGB
function hexToRgb(hex) {
  // удаляем символ #, если он есть
  hex = hex.replace("#", "");

  // разбиваем строку на три части и преобразуем каждую из них в десятичное число
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // возвращаем RGB-строку
  return `rgb(${r}, ${g}, ${b})`;
}

// RGB to HEX
function rgbToHex(rgb) {
  // удаляем слово rgb и скобки, если они есть
  rgb = rgb.replace(/rgb|\(|\)/g, "");

  // разбиваем строку на три части и преобразуем каждую из них в шестнадцатеричное число
  const [r, g, b] = rgb.split(",");
  const hexR = Number(r).toString(16).padStart(2, "0");
  const hexG = Number(g).toString(16).padStart(2, "0");
  const hexB = Number(b).toString(16).padStart(2, "0");

  // возвращаем HEX-строку
  return `#${hexR}${hexG}${hexB}`;
}

// // //
// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect
// the formats so that if you enter HEX color
// format it returns RGB and if you enter RGB color format it returns HEX.

convertToRGB("#f4e3d8");
// Your color is RGB(244, 227, 216)

function convertToRGB(str) {
  // put each char into an array and remove #
  let strArr = str.split("");
  strArr.shift();
  for (let i = 0; i < strArr.length; i++) {
    // check the value of string number
    if (strArr[i] <= 10) {
      strArr[i] = Number(strArr[i]);
    }
    switch (strArr[i]) {
      case "a":
        strArr[i] = 10;
        break;
      case "b":
        strArr[i] = 11;
        break;
      case "c":
        strArr[i] = 12;
        break;
      case "d":
        strArr[i] = 13;
        break;
      case "e":
        strArr[i] = 14;
        break;
      case "f":
        strArr[i] = 15;
        break;
      default:
        break;
    }
  }
  let red = 16 * strArr[0] + strArr[1];
  let green = 16 * strArr[2] + strArr[3];
  let blue = 16 * strArr[4] + strArr[5];
  console.log(`Your color is RGB(${red}, ${green}, ${blue})`);
}

convertToHex(231, 55, 145);
// Your Hex Number is #E73791

function convertToHex(red, green, blue) {
  let r1 = parseInt(red / 16);
  let r2 = red % 16;
  let g1 = parseInt(green / 16);
  let g2 = green % 16;
  let b1 = parseInt(blue / 16);
  let b2 = blue % 16;
  let strArr = [r1, r2, g1, g2, b1, b2];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] < 10) {
      strArr[i] = strArr[i].toString();
    }
    switch (strArr[i]) {
      case 10:
        strArr[i] = "A";
        break;
      case 11:
        strArr[i] = "B";
        break;
      case 12:
        strArr[i] = "C";
        break;
      case 13:
        strArr[i] = "D";
        break;
      case 14:
        strArr[i] = "E";
        break;
      case 15:
        strArr[i] = "F";
        break;
      default:
        break;
    }
  }
  console.log(
    `Your Hex Number is #${strArr[0]}${strArr[1]}${strArr[2]}${strArr[3]}${strArr[4]}${strArr[5]}`
  );
}
