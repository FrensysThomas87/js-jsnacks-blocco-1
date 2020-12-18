var numero= parseInt(prompt('Inserisci un numero'));

//Stampo il cubo dei numeri, esempio, se l'utente inserisce 5 stampero il cubo dei numeri che vanno da 1 a 5
for(var i = 1; i <= numero; i++){
  console.log(Math.pow(i, 3));
}
