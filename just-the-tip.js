const calculate = require('./calculate.js')

let  = process.argv[2]
let num2 = process.argv[4]
let operator = process.argv[3]

if (process.argv[5] !== undefined){
  num1 = process.argv[2]
  num2 = process.argv[5]
  operator = process.argv[3] + ' ' + process.argv[4]
}
const result = calculate(num1, num2, operator);

console.log(result);