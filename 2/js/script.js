//Chiedo all'utente di inserire due parole
var primaParola = prompt('Inserisci la prima parola');
var secondaParola = prompt('Inserisci la seconda parola');

//Controllo che inserisca parole e non numeri
if(!isNaN(primaParola) || !isNaN(secondaParola)){
  console.log('Non puoi inserire numeri');
}else{
  //Faccio stamapare per prima la parola più lunga e per seconda la più corta
  if(primaParola.length > secondaParola.length){
    console.log(primaParola + ' ' + secondaParola);
  }else{
    console.log(secondaParola + ' ' + primaParola);
  }
}
