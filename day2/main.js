"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const specialChars = [
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
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
    specialChars
        .map((item) => item[0])
        .forEach((term) => {
        const [searchSubStringResult, onIndex] = searchSubString(text, term.toString());
        if (searchSubStringResult)
            returnData.push([term.toString(), onIndex]);
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
    let specialCharIndex = undefined;
    let indexCharLeft = null;
    let indexCharRight = null;
    if (!reverse) {
        indexCharLeft = getDigit(text, false)[1];
        if (indexTextChar.length > 0)
            specialCharIndex = indexTextChar.reduce((a, b) => (a < b ? a : b));
        if (indexCharLeft !== null && specialCharIndex !== undefined) {
            if (Number(specialCharIndex) < Number(indexCharLeft)) {
                return indicesSpecialChars
                    .filter((item) => item[1] === specialCharIndex)
                    .map((item) => item[0]);
            }
            else {
                return text[Number(indexCharLeft)];
            }
        }
        else {
            return indicesSpecialChars
                .filter((item) => item[1] === specialCharIndex)
                .map((item) => item[0]);
        }
    }
    else {
        indexCharRight = getDigit(text, true)[1];
        if (indexTextChar.length > 0)
            specialCharIndex = indexTextChar.reduce((a, b) => (a > b ? a : b));
        if (indexCharRight !== null && specialCharIndex !== undefined) {
            if (Number(specialCharIndex) > Number(indexCharRight)) {
                return indicesSpecialChars
                    .filter((item) => item[1] === specialCharIndex)
                    .map((item) => item[0]);
            }
            else {
                return text[Number(indexCharRight)];
            }
        }
        else {
            return indicesSpecialChars
                .filter((item) => item[1] === specialCharIndex)
                .map((item) => item[0]);
        }
    }
}
function getSum(textData) {
    let sum = 0;
    let numLeft = null;
    let numRight = null;
    textData.forEach((line) => {
        numLeft = calcWhoIsFirst(line, false);
        numRight = calcWhoIsFirst(line, true);
        if (isNaN(Number(numLeft)) && numLeft !== undefined)
            numLeft = specialChars.find((item) => item[0] == numLeft)[1];
        if (isNaN(Number(numRight)) && numRight !== undefined)
            numRight = specialChars.find((item) => item[0] == numRight)[1];
        sum = sum + Number(numLeft.toString() + numRight.toString());
    });
    console.log(sum);
}
const textData = [
    "two1nine",
    "eightwothree",
    "abcone2threexyz",
    "xtwone3four",
    "4nineeightseven2",
    "zoneight234",
    "7pqrstsixteen",
    "1112776667890",
];
const textDate2 = ["ninetwonine", "xxonetwonexx", "xxoneightonexx"];
getSum(textDate2);
//Aktueller fehler, wenn eine Zahl z. B (one oder nine) öfters in einem String vorkommen,
//wird das zweite vorkommnis ignoriert.
//# sourceMappingURL=main.js.map