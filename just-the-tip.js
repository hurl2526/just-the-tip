const calculate = require('./calculate.js')

let billAmount = process.argv[2]
let tipPercent= process.argv[3]
let amountOfPeople = process.argv[4]


const result = calculate(billAmount, tipPercent, amountOfPeople);

console.log(result);  