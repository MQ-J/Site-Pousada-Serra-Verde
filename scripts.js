function verifyNome() {
  var campo = document.getElementById("nome").value;
  var numb = /[0-9]/;
  var espaco = / /;
  if (numb.test(campo) || !espaco.test(campo))
    alert("Somente nome e sobrenome");
}

function verifyCel() {
  var letra = /[a-zA-Z]/;
  if (letra.test(document.getElementById("celular").value))
    alert("Celular inválido");
}

function verifyEmail() {
  var campo = document.getElementById("email").value;
  var arroba = /@/;
  var ponto = /\./;
  if (!arroba.test(campo) || !ponto.test(campo))
    alert("Email inválido");
}

function verifyCidade() {
  var campo = document.getElementById("cidade").value;
  var numb = /[0-9]/;
  if (numb.test(campo))
    alert("Cidade inválida");
}

function confirmaEnvio() {
  alert('Obrigado! Em breve, entraremos em contato para confirmação de sua reserva.');
}