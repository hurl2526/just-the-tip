/******************
 * YOUR CODE HERE *
 ******************/

function calculate(billAmount,tipPercent,amountOfPeople){
  billAmount = Number(billAmount)
  tipPercent = Number(tipPercent) / 100
  amountOfPeople = Number(amountOfPeople)
  return billAmount * tipPercent / amountOfPeople
}

let answer = calculate(50,20,5)
answer;

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;