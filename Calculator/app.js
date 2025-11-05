var lastResult = 0;
var expressionField = document.getElementById("expression");
var resultField = document.getElementById("result");


function append(value) {
  let expression = expressionField.innerText;

  if (/[\+\-\*\/.%]/.test(value) && /[\+\-\*\/.%]$/.test(expression)) {
    expressionField.innerText = expression.slice(0, -1) + value;
    return;
  }

  expressionField.innerText += value;
  expressionField.scrollLeft = expressionField.scrollWidth;
  updatePreview();
}

function clearDisplay() {
  expressionField.innerText = "";
  resultField.innerText = "0";
}

function backspace() {
  expressionField.innerText = expressionField.innerText.slice(0, -1);
  updatePreview();
}

function calculate() {
  let expression = expressionField.innerText;

  if (expression.trim() === "") {
    resultField.innerText = "0";
    return;
  }

  try {
    if (/[+\-*/.%]$/.test(expression)) {
      expression = expression.slice(0, -1);
    }

    var finalResult = eval(expression.replace('%', '/100'));
    expressionField.innerText = '';
    resultField.innerText = finalResult;
    lastResult = finalResult; // update stored result
  } catch {
    resultField.innerText = 'Error';
  }
}


function updatePreview() {
  let expression = expressionField.innerText;

  // If empty, reset
  if (expression.trim() === "") {
    resultField.innerText = "0";
    return;
  }

  try {
    if (!/[+\-*/.%]$/.test(expression)) {
      var tempResult = eval(expression.replace('%', '/100'));
      resultField.innerText = tempResult;
      lastResult = tempResult; // store last valid result
    } else {
      // When operator pressed, keep showing last result
      resultField.innerText = lastResult;
    }
  } catch {
    resultField.innerText = lastResult;
  }
}



function toggleMode() {
  document.body.classList.toggle("light-mode");
  var toggleDark = document.getElementById("modeButton");

  if (document.body.classList.contains("light-mode")) {
    toggleDark.innerText = "☾";
  } else {
    toggleDark.innerText = "☀︎";
  }
}
