function clearDisplay() {
  document.getElementsByName("display")[0].value = "";
}

function deleteLastCharacter() {
  var display = document.getElementsByName("display")[0];
  display.value = display.value.toString().slice(0, -1);
}

function appendToDisplay(value) {
  document.getElementsByName("display")[0].value += value;
}

function calculateResult() {
  var display = document.getElementsByName("display")[0];
  display.value = eval(display.value);
}