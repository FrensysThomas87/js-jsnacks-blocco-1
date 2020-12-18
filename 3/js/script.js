//VERSIONE CON IL FOR
// var numero;
// var somma = 0;
//
//
//
// for(var i = 0; i < 5; i++){
//   numero = parseInt(prompt('Inserisci un numero'));
//   somma += numero;
// }
//
// console.log(somma);


//VERSIONE CON WHILE
// var somma = 0;
// var i = 0;
// var numero;
//
// while(i < 5){
//   numero = parseInt(prompt('Inserisci un numero'));
//   somma += numero;
//   i++;
// }
//
// console.log(somma);

//VERSIONE CON IL DO WHILE
var numero;
var somma = 0;
var i= 0;

do{
  //Chiedo all'utente di inserire 5 numeri e poi li sommo
  numero = parseInt(prompt('Inserisci un numero'));
  somma += numero;
   i++;
}while(i < 5);

console.log(somma);
