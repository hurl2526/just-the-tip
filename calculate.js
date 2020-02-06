

function calculate(billAmount,tipPercent,amountOfPeople){
  billAmount = Number(billAmount)
  tipPercent = Number(tipPercent) / 100
  amountOfPeople = Number(amountOfPeople)
  return billAmount * tipPercent / amountOfPeople
}

let answer = calculate(50,20,5)
answer;


if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;