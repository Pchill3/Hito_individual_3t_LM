let display = document.getElementById('result');
let expression = '';

function insert(char) {
  expression += char;
  display.innerHTML = expression;
}

function clearDisplay() {
  expression = '';
  display.innerHTML = '0';
}

function backspace() {
  expression = expression.slice(0, -1);
  display.innerHTML = expression;
}

function calculate() {
  try {
    expression = eval(expression);
    display.innerHTML = expression;
  } catch (error) {
    display.innerHTML = 'Error';
  }
}

function percentage() {
  expression = eval(expression) / 100;
  display.innerHTML = expression;
}

function square() {
  expression = eval(expression) ** 2;
  display.innerHTML = expression;
}

function squareRoot() {
  expression = Math.sqrt(eval(expression));
  display.innerHTML = expression;
}
