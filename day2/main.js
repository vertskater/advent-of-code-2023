"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const specialChars = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
function searchSubString(text, term) {
    let isInString = false;
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < term.length; j++) {
            if (text[i + j] !== term[j])
                break;
            if (j === term.length - 1) {
                isInString = true;
                return [isInString, i];
            }
        }
    }
    return [isInString, -1];
}
function getSpecialChars(text) {
    const returnData = [];
    specialChars.forEach((num) => {
        const [searchSubStringResult, onIndex] = searchSubString(text, num);
        if (searchSubStringResult)
            returnData.push([num, onIndex]);
    });
    return returnData;
}
function getDigit(data, reverse) {
    let firstNum = 0;
    if (!reverse) {
        for (let i = 0; i < data.length; i++) {
            firstNum = Number(data[i]);
            if (!isNaN(firstNum))
                return [data[i], i];
        }
    }
    else {
        for (let i = data.length - 1; i >= 0; i--) {
            firstNum = Number(data[i]);
            if (!isNaN(firstNum))
                return [data[i], i];
        }
    }
    return [null, null];
}
/* function getCalibrationNumbers(data: string[]) {
  let numLeft = "0";
  let numRight = "0";
  const allNumbers: number[] = [];
  data.forEach((line) => {
    numLeft = getDigit(line, false);
    numRight = getDigit(line, true);
    allNumbers.push(+(numLeft + numRight));
  });
  return allNumbers;
} */
function calcWhoIsFirst(text, reverse) {
    const indicesSpecialChars = getSpecialChars(text);
    const indexTextChar = indicesSpecialChars.map((index) => index[1]);
    let indexChar = getDigit(text, reverse)[1];
    let numItem = 0;
    if (!reverse) {
        indexTextChar.forEach((index) => {
            index < Number(indexChar) ? (numItem = index) : null;
        });
        if (indexTextChar.includes(numItem)) {
            const [num] = indicesSpecialChars.find((item) => item[1] === numItem) || [];
            return num;
        }
        else {
            return text[Number(indexChar)];
        }
    }
    else {
        indexTextChar.forEach((index) => {
            index > Number(indexChar) ? (numItem = index) : null;
        });
        if (indexTextChar.includes(numItem)) {
            const [num] = indicesSpecialChars.find((item) => item[1] === numItem) || [];
            return num;
        }
        else {
            return text[Number(indexChar)];
        }
    }
}
/* const textData = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
];
textData.forEach((line) => {
  console.log(calcWhoIsFirst(line, false) + ", " + calcWhoIsFirst(line, true));
}); */
console.log(calcWhoIsFirst("zoneight234", false) +
    ", " +
    calcWhoIsFirst("zoneight234", true));
//getDigit("sevenntgvnrrqfvxh2ttnkgffour8fiveone", true);
//const allNumber = getCalibrationNumbers(inputData);
//console.log(allNumber.reduce((a: number, b: number) => a + b));
//# sourceMappingURL=main.js.map