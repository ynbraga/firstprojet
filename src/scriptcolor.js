var loginInput = document.getElementById('loginColor');

loginInput.addEventListener('input', function() {
  var inputColor = loginInput.value;

  if (isValidEmail(inputColor)) {
    loginInput.style.borderBottomColor = 'rgb(76, 212, 112)';
  } else {
    loginInput.style.borderBottomColor = 'rgb(194, 112, 74)';
  }
});

function isValidEmail(inputColor) {
  // Verificar se o email está no formato correto
  // Aqui está um exemplo simples de validação, mas você pode usar uma expressão regular mais complexa
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputColor);
}

//--------------------------------------------------------------------

var colorSenha = document.getElementById('inputPassword');

colorSenha.addEventListener('input', function() {
  var senha2 = colorSenha.value;
  var caractere = caractere

  if (validatePassword(senha2)) {
    colorSenha.style.borderBottomColor = 'rgb(76, 212, 112)';
  } else {
   colorSenha.style.borderBottomColor = 'rgb(194, 112, 74)';
  }
});

function validatePassword(password2) {
  var uppercaseRegex = /[A-Z]/;
  var lowercaseRegex = /[a-z]/;
  var specialCharsRegex = /[!@#$%^&*()]/;
  var numbercaseRegex = /[0-9]/;
  
  return uppercaseRegex.test(password2) && lowercaseRegex.test(password2) && specialCharsRegex.test(password2) && numbercaseRegex.test(password2) ;
}

//----------------------------------------------------------------------------

var inputSenha = document.getElementById("loginColor");
var spanSenha = document.getElementById("erroSpan");

inputSenha.addEventListener("blur", function() {
  if (inputSenha.value === "") { 
    spanSenha.style.display = "block";

  } else {
    spanSenha.style.display = "none"
  }
});

inputSenha.addEventListener("input", function() {
  if (inputSenha.value !== "") {
    spanSenha.style.display = "none";
  } else {
    spanSenha.style.display = "block";
  }
});

//-----------------------------------------------------------------------------

var inputSenha2 = document.getElementById("inputPassword");
var spanSenha2 = document.getElementById("erroSpan2");

inputSenha2.addEventListener("blur", function() {
  if (inputSenha2.value === "") { 
    spanSenha2.style.display = "block";

  } else {
    spanSenha2.style.display = "none"
  }
});

inputSenha2.addEventListener("input", function() {
  if (inputSenha2.value !== "") {
    spanSenha2.style.display = "none";
  } else {
    spanSenha2.style.display = "block";
  }
});

//----------------------------------------------------------------------

var inputProj = document.getElementById("loginColor");
var spanProj = document.getElementById("erroLoginProj");

inputProj.addEventListener("input", function() {
  if (inputProj.value.length === 0) { 
    spanProj.style.display = "none";

  } else if (!validateEmail(inputProj.value)) {
     spanProj.style.display = "inline"
  }

  else{
    spanProj.style.display = "none";
  }
});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

//-----------------------------------------------------------------------

var inputProj3 = document.getElementById("inputPassword");
var spanProj3 = document.getElementById("erroInput2");

inputProj3.addEventListener("input", function() {
  if (inputProj3.value.length === 0) {
    spanProj3.style.display = "none";
  } else if (!validatePassword(inputProj3.value)) {
    spanProj3.style.display = "inline";
  } else {
    spanProj3.style.display = "none";
  }
});

function validatePassword(password) {
  var uppercaseRegex = /[A-Z]/;
  var lowercaseRegex = /[a-z]/;
  var specialCharsRegex = /[!@#$%^&*()]/;
  var numbercaseRegex = /[0-9]/;
  
  return uppercaseRegex.test(password) && lowercaseRegex.test(password) && specialCharsRegex.test(password) && numbercaseRegex.test(password);
}