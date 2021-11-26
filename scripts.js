function verifyNome() {
  var campo = document.getElementById("nome").value;
  var numb = /[0-9]/;
  var espaco = / /;
  if (numb.test(campo) || !espaco.test(campo))
    alert("Ta errado aqui");
}

function verifyCel() {
  
}

function verifyEmail() {
  
}

function verifyCidade() {
  
}

function confirmaEnvio() {
  alert('Obrigado! Em breve, entraremos em contato para confirmação de sua reserva.');
}