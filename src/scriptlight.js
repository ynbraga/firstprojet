
var emailInput = document.getElementById('projInput');

emailInput.addEventListener('input', function() {
  var email = emailInput.value;

  if (isValidEmail(email)) {
    emailInput.style.borderBottomColor = 'rgb(76, 212, 112)';
  } else {
    emailInput.style.borderBottomColor = 'rgb(194, 112, 74)';
  }
});

function isValidEmail(email) {
  // Verificar se o email está no formato correto
  // Aqui está um exemplo simples de validação, mas você pode usar uma expressão regular mais complexa
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

//------------------------------------------------------------------------------------------------

function temEmail(elemento) {
  var valor = elemento.value;
  if (valor.includes("@") && valor.includes(".com")) {
    elemento.style.borderBottomColor = "rgb(76, 212, 112)";
  } else {
    elemento.style.borderBottomColor = "rgb(194, 112, 74)";
  }
}

//------------------------------------------------------------------------------------------------

var senhaInput = document.getElementById('projInput3');

senhaInput.addEventListener('input', function() {
  var senha = senhaInput.value;
  var caractere = caractere

  if (validatePassword(senha)) {
    senhaInput.style.borderBottomColor = 'rgb(76, 212, 112)';
  } else {
   senhaInput.style.borderBottomColor = 'rgb(194, 112, 74)';
  }
});

function validatePassword(password) {
  var uppercaseRegex = /[A-Z]/;
  var lowercaseRegex = /[a-z]/;
  var specialCharsRegex = /[!@#$%^&*()]/;
  var numbercaseRegex = /[0-9]/;
  
  return uppercaseRegex.test(password) && lowercaseRegex.test(password) && specialCharsRegex.test(password) && numbercaseRegex.test(password) ;
}

//------------------------------------------------------------------------------------------------

function temLoguin(elemento) {
  var valor = elemento.value;
  if (valor.length >= 1) {
    elemento.style.borderBottomColor = "rgb(76, 212, 112)";
  } else {
    elemento.style.borderBottomColor = "rgb(194, 112, 74)";
  }
}

//------------------------------------------------------------------------------------------------
var emailInput2 = document.getElementById('projInput5');

emailInput2.addEventListener('input', function() {
  var dateOfBirth = emailInput2.value;

  if (isValidDateOfBirth(dateOfBirth)) {
    emailInput2.style.borderBottomColor = "rgb(76, 212, 112)";

  } else {
    emailInput2.style.borderBottomColor = "rgb(194, 112, 74)";
  }
});

function isValidDateOfBirth(dateOfBirth) {
  return /^\d{2}\/\d{2}\/\d{4}$/.test(dateOfBirth);
}

//-------------------------------------------------------------------------

var barraDate = document.getElementById('projInput5');

barraDate.addEventListener('input', function() {
  var inputValue = barraDate.value;

  //Remover caracteres não numéricos
  var numericValue = inputValue.replace(/[^\d]/g, '');

  // Adicionar as barras (/) nos locais corretos
  var formattedValue = formatAsDate(numericValue);


  // Atualizar o valor do campo de entrada
  barraDate.value = formattedValue;
});

function formatAsDate(value) {
  var day = value.slice(0, 2);
  var month = value.slice(2, 4);
  var year = value.slice(4, 8);


  // Adicionar as barras (/) nos locais corretos
  
  var formattedValue = '';
  if (day) {
    formattedValue += day;
    if (day.length === 2) {
      formattedValue += '/';
    }
  }

  if (month) {
    formattedValue += month;
    if (month.length === 2) {
      formattedValue += '/';
    }
  }

  if (year) {
    formattedValue += year;
  }

  return formattedValue;
}
