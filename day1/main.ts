import inputData from "./getDate";

function getDigit(data: string, reverse: boolean) {
  if (reverse) data = data.split("").reverse().join("");
  let isNum;
  for (let letter of data) {
    isNum = Number(letter);
    if (!isNaN(isNum)) return letter;
  }
  return "0";
}

function getCalibrationNumbers(data: string[]) {
  let numLeft = "0";
  let numRight = "0";
  const allNumbers: number[] = [];
  data.forEach((line) => {
    numLeft = getDigit(line, false);
    numRight = getDigit(line, true);
    allNumbers.push(+(numLeft + numRight));
  });
  return allNumbers;
}

const allNumber = getCalibrationNumbers(inputData);

console.log(allNumber.reduce((a: number, b: number) => a + b));
