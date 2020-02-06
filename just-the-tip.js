const calculate = require('./calculate.js')

let billAmount = process.argv[2]
let tipDescription= process.argv[3]
let amountOfPeople = process.argv[4]


const result = calculate(billAmount, tipDescription, amountOfPeople);
console.log(result);  