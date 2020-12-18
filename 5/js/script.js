var arrVuoto = [];
var numero;

//Chiedo all'utente di inserire 6 numeri
for(var i = 0; i < 6; i++){
  numero = parseInt(prompt('Inserisci un numero'));

  //Se i numeri sono dispari vengono inseriti all'interno dell'array vuoto
  if(numero % 2 !== 0){
    arrVuoto.push(numero);
  }
}

console.log(arrVuoto);
