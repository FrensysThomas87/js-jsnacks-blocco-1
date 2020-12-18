var listaInvitati = ['Pippo', 'Pluto', 'Paperino', 'Topolino'];


var nomeUtente = prompt('Come ti chiami?');

//Faccio in modo che la prima lettera sia maiuscola e le altre minuscole
nomeUtente = nomeUtente.charAt(0).toUpperCase() + nomeUtente.substring(1).toLowerCase();

var invitato;

//Controllo se il nome dell'utente è inserito all'interno dell'array
for(var i = 0; i < listaInvitati.length && !invitato; i++){
  if(listaInvitati[i] === nomeUtente){
    invitato = true;
  }
}

// Se è presente può entrare altrimenti no
if(invitato){
  console.log('Puoi entrare');
}else{
  console.log('Non puoi entrare');
}
