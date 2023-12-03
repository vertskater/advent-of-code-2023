import fs from "fs";

const data = fs.readFileSync("./data.txt").toString("utf-8");
const inputData = data.split("\n");

export default inputData;
