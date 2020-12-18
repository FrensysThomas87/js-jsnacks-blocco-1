var numero = prompt('Inserisci un numero di 10 cifre');

var somma = 0;

var media = 0;

if(numero.length !== 10){
  alert('Il numero deve essere di 10 cifre');
}else{
  for(var i = 0; i < numero.length; i++){
    somma += parseInt(numero[i]);
    media = somma / 10;
  }

  console.log('La somma è ' + somma);
  console.log('La media è ' + media);



}
