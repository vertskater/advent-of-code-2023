"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getDate_1 = __importDefault(require("./getDate"));
function getDigit(data, reverse) {
    if (reverse)
        data = data.split("").reverse().join("");
    let isNum;
    for (let letter of data) {
        isNum = Number(letter);
        if (!isNaN(isNum))
            return letter;
    }
    return "0";
}
function getCalibrationNumbers(data) {
    let numLeft = "0";
    let numRight = "0";
    const allNumbers = [];
    data.forEach((line) => {
        numLeft = getDigit(line, false);
        numRight = getDigit(line, true);
        allNumbers.push(+(numLeft + numRight));
    });
    return allNumbers;
}
const allNumber = getCalibrationNumbers(getDate_1.default);
console.log(allNumber.reduce((a, b) => a + b));
