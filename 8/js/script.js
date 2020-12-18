var numero = prompt('Inserisci un numero di 4 cifre');

var somma = 0;

//Controllo che l'utente inserisca ne più ne meno di 4 cifre
if(numero.length !== 4){
  alert ('Per favore inserisci un numero di 4 cifre');
}else{
  //Ciclo tutte le cifre che compongono il numero e ad ogni ciclo sommo la cifra con quella precedente
  for(var i = 0; i < numero.length; i++){

    //Sommo la variabile somma  + ogni cifra del numero
    somma += parseInt(numero[i]);

  }
  //Chiedo la somma 
console.log(somma);
}
