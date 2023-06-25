var inputNome = document.getElementById("projInput");
var spanErroNome = document.getElementById("erroNome");

inputNome.addEventListener("blur", function() {
  if (inputNome.value === "") { 
    spanErroNome.style.display = "block";

  } else {
    spanErroNome.style.display = "none"
  }
});

inputNome.addEventListener("input", function() {
  if (inputNome.value !== "") {
    spanErroNome.style.display = "none";
  } else {
    spanErroNome.style.display = "block";
  }
});

// ----------------------------------------------------------------

var inputNome2 = document.getElementById("projInput2");
var spanErroNome2 = document.getElementById("erroNome2");

inputNome2.addEventListener("blur", function() {
  if (inputNome2.value === "") {
    spanErroNome2.style.display = "block";

  } else {
    spanErroNome2.style.display = "none";
  }
});

inputNome2.addEventListener("input", function(){
  if (inputNome2.value !== "") {
    spanErroNome2.style.display = "none";

  } else {
    spanErroNome2.style.display = "block";
  }
});

//-------------------------------------------------------------------

var inputNome3 = document.getElementById("projInput3");
var spanErroNome3 = document.getElementById("erroNome3");

inputNome3.addEventListener("blur", function() {
  if (inputNome3.value === "") {
    spanErroNome3.style.display = "block";

  } else {
    spanErroNome3.style.display = "none";
  }
});

inputNome3.addEventListener("input", function(){
  if (inputNome3.value !== "") {
    spanErroNome3.style.display = "none";

  } else {
    spanErroNome3.style.display = "block"
  }
});

//---------------------------------------------------------------------

var inputNome4 = document.getElementById("projInput4");
var spanErroNome4 = document.getElementById("erroNome4");

inputNome4.addEventListener("blur", function() {
  if (inputNome.value === "") {
    spanErroNome4.style.display = "block";

  } else {
    spanErroNome4.style.display = "none";
  }
});

inputNome4.addEventListener("input", function() {
  if (inputNome4.value !== "") {
    spanErroNome4.style.display = "none";

  } else {
    spanErroNome4.style.display = "block";
  }
});

//-----------------------------------------------------------------------

var inputNome5 = document.getElementById("projInput5");
var spanErroNome5 = document.getElementById("erroNome5");

inputNome5.addEventListener("blur", function() {
  if (inputNome.value === "") {
    spanErroNome5.style.display = "block";
    
  } else {
    spanErroNome5.style.display = "none";
  }
});

inputNome5.addEventListener("input", function() {
  if (inputNome5.value !== "") {
  spanErroNome5.style.display = "none";

  } else {
    spanErroNome5.style.display = "block";
  }
});


