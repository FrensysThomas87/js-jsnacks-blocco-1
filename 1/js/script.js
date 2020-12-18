//Chiedo all'utente di inserire due numeri
var firstNumber = parseInt(prompt('Inserisci un numero'));
var secondNumber = parseInt(prompt('Inserisci un altro numero'));

//Verifico che inserisca dei numeri e non altro
if(isNaN(firstNumber) || isNaN(secondNumber)){
  console.log('Devi inserire un numero');
}else{
  
  if(firstNumber > secondNumber){
    console.log(firstNumber);
  }else{
    console.log(secondNumber);
  }
}
