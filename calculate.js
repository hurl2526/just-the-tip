

function calculate(billAmount,tipDescription,amountOfPeople){
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
    else if (tipDescription !== NaN)
    tipDescription = Number(tipDescription)
    else {tipDescription= 20 / 100}
    
  billAmount = Number(billAmount)
  amountOfPeople = Number(amountOfPeople)
return billAmount * tipDescription / amountOfPeople
}  


if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;