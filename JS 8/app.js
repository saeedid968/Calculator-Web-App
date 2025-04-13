
var expressionField = document.getElementById('expression');
var resultField = document.getElementById('result');

function append(value) {
  expressionField.innerText += value;
  expressionField.scrollLeft = expressionField.scrollWidth;
  updatePreview();
}

function clearDisplay() {
  expressionField.innerText = '';
  resultField.innerText = '0';
}

function backspace() {
  expressionField.innerText = expressionField.innerText.slice(0, -1);
  updatePreview();
}

function calculate() {
  try {
    let expression = expressionField.innerText;
    if (/[+\-*/.%]$/.test(expression)) {
      expression = expression.slice(0, -1);
    }

    var finalResult = eval(expression.replace('%', '/100'));
    expressionField.innerText = '';
    resultField.innerText = finalResult;
  } catch {
    resultField.innerText = 'Error';

  }
}

function updatePreview() {
  try {
    var expression = expressionField.innerText;
    if (!/[+\-*/.%]$/.test(expression)) {
      var tempResult = eval(expression.replace('%', '/100'));
      resultField.innerText = tempResult;
    } else {
      resultField.innerText = '';
    }
  } catch {
    resultField.innerText = '';
  }
}

function toggleMode() {
  document.body.classList.toggle('light-mode');
  var toggleDark = document.getElementById('modeButton');

  if (document.body.classList.contains('light-mode')) {
    toggleDark.innerText = "Dark Mode ☾";
  } else {
    toggleDark.innerText = "Light Mode ☀︎";
  }
}
