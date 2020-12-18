var listaInvitati = ['Pippo', 'Pluto', 'Paperino', 'Topolino'];
var nomeUtente = prompt('Come ti chiami?');
nomeUtente = nomeUtente.charAt(0).toUpperCase() + nomeUtente.substring(1).toLowerCase();

var invitato;



for(var i = 0; i < listaInvitati.length && !invitato; i++){
  if(listaInvitati[i] === nomeUtente){
    invitato = true;
  }
}

if(invitato){
  console.log('Puoi entrare');
}else{
  console.log('Non puoi entrare');
}
