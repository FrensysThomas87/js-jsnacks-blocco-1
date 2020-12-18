var firstNumber = parseInt(prompt('Inserisci un numero'));
var secondNumber = parseInt(prompt('Inserisci un altro numero'));

if(isNaN(firstNumber) || isNaN(secondNumber)){
  console.log('Devi inserire un numero');
}else{
  if(firstNumber > secondNumber){
    console.log(firstNumber);
  }else{
    console.log(secondNumber);
  }
}
