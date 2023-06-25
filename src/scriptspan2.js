var inputProj = document.getElementById("projInput");
var spanProj = document.getElementById("erroProj");

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

//----------------------------------------------------------------------

var inputProj2 = document.getElementById("projInput2");
var spanProj2 = document.getElementById("erroProj2");

inputProj2.addEventListener("input", function() {
  if (inputProj2.value.length === 0) {
    spanProj2.style.display = "none";

  } else if (!validateEmail(inputProj2.value)) {
    spanProj2.style.display = "inline"

  } else {
    spanProj2.style.display = "none"; 
  }
});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

//--------------------------------------------------------------------

var inputProj3 = document.getElementById("projInput3");
var spanProj3 = document.getElementById("erroProj3");

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

//--------------------------------------------------------------------------

var inputProj4 = document.getElementById("projInput4");
var spanProj4 = document.getElementById("erroProj4");

inputProj4.addEventListener("input", function() {
  if (inputProj4.value.length === 0) {
    spanProj4.style.display = "none";
  } else if (!validateNome(inputProj4.value)) {
    spanProj4.style.display = "inline";
  } else {
    spanProj4.style.display = "none";
  }
});

function validateNome(nome) {
  return nome.trim().split(" ").length > 2;
}

// ----------------------------------------------------------------------------

var inputProj5 = document.getElementById("projInput5");
var spanProj5 = document.getElementById("erroProj5");

inputProj5.addEventListener("input", function() {
  if (inputProj5.value.length === 0) {
    spanProj5.style.display = "none";
  } else if (!validateInputEmail(inputProj5.value)) {
    spanProj5.style.display = "inline";
  } else {
    spanProj5.style.display = "none";
  }
});

function validateInputEmail(dateString) {
  var pattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  if (!pattern.test(dateString))
   return true;

  var dateParts = dateString.split("/");
  var day = parseInt(dateParts[0], 10);
  var month = parseInt(dateParts[1], 10);
  var year = parseInt(dateParts[2], 10);

  if (month <= 1 || month > 12 || day < 1 || day > 31 || year <= 1893 || year > 2023) {
    return false;

  }

  return true
}