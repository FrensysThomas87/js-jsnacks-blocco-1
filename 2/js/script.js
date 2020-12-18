var primaParola = prompt('Inserisci la prima parola');
var secondaParola = prompt('Inserisci la seconda parola');

if(!isNaN(primaParola) || !isNaN(secondaParola)){
  console.log('Non puoi inserire numeri');
}else{
  if(primaParola.length > secondaParola.length){
    console.log(primaParola + ' ' + secondaParola);
  }else{
    console.log(secondaParola + ' ' + primaParola);
  }
}
