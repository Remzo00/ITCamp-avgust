const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  let displayValue = display.value;
  let result;
  try {
    result = eval(displayValue);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
