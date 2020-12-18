var arrVuoto = [];
var numero;

for(var i = 0; i < 6; i++){
  numero = parseInt(prompt('Inserisci un numero'));
  if(numero % 2 !== 0){
    arrVuoto.push(numero);
  }
}

console.log(arrVuoto);
