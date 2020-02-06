

function calculate(billAmount,tipDescription,amountOfPeople){
  billAmount =  Number(billAmount)
  amountOfPeople = Number(amountOfPeople)

  if (tipDescription === 'great' 
  || tipDescription === "excellent" 
  || tipDescription === 'awesome' 
  || tipDescription === 'amazing'
  || tipDescription === 'spectacular'
  || tipDescription === 'terrific') {
    tipDescription = 20 / 100
  }else if(tipDescription === 'good' 
  || tipDescription === "ok" 
  || tipDescription === 'decent' 
  || tipDescription === 'average'
  || tipDescription === 'mediocre'
  || tipDescription === 'content'
  || tipDescription === 'subpar') {
    tipDescription = 15 / 100
  }else if(tipDescription === 'bad' 
  || tipDescription === "poor" 
  || tipDescription === 'shit' 
  || tipDescription === 'awful'
  || tipDescription === 'crap'
  || tipDescription === 'terrible') {
    tipDescription = 5 / 100}
    else if (tipDescription === NaN)
    tipDescription = Number(tipDescription)
    else {tipDescription= 20 / 100}
return billAmount * tipDescription / amountOfPeople
} 

module.exports = calculate; 