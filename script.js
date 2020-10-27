let ans = 0;
let currentOper = "";
let var1 = 0;
let computed = true;
let decimalPresent = false;

const add = function(num1,num2) {
   ans = (num1 + num2);
   return ans;
}

const subtract = function(num1,num2) {
   ans = (num1 - num2);
   return ans;
}

const multiply = function(num1,num2) {
  ans = (num1 * num2);
  return ans;
}

const divide = function(num1,num2) {
  ans = (num1 / num2);
  return ans;
}

const operate = function(operator, num1, num2) {
  switch(operator) {
    case "plus":
      return add(num1, num2);
      break;
    case "minus":
      return subtract(num1, num2);
      break;
    case "times":
      return multiply(num1, num2);
      break;
    case "division":
      if(num2 == 0) {
        alert("Dividing by 0 huh? Can't really do that.");
        break;
        } else {
        return divide(num1, num2);
        break;
      }
    }
}

const reset = function() {
  var1 = ans = 0;
  computed = true;
  currentOper = "";
  screen.textContent = 0;
  decimalPresent = false;
}

const numbers = document.getElementsByClassName('numbers');
let numbersArray = Array.from(numbers);

const operators = document.getElementsByClassName('operators');
let operArray = Array.from(operators);

const screen = document.getElementById('screen');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const decimal = document.getElementById('decimalpt');


numbersArray.forEach((number) => {
  number.addEventListener('click', (e) => {
    if(computed === true) {
      screen.textContent = "";
      computed = false;
      decimalPresent = false;
    }
    screen.textContent += (e.explicitOriginalTarget.textContent);
  })
});

decimal.addEventListener('click', (e) => {
  while(decimalPresent === false) {
    screen.textContent += (e.explicitOriginalTarget.textContent);
    decimalPresent = true;
  }
});

operArray.forEach((oper) => {
  oper.addEventListener('click', (e) => {
    if(currentOper === "") {
      ans = parseFloat(screen.textContent);
      currentOper = e.explicitOriginalTarget.id;
      screen.textContent = parseFloat(ans.toFixed(9));
      computed = true;
    } else {
      var1 = parseFloat(screen.textContent);
      operate(currentOper,ans,var1);
      screen.textContent = parseFloat(ans.toFixed(9));
      currentOper = e.explicitOriginalTarget.id;
      computed = true;
    }
  })
});

equals.addEventListener('click', () => {
  var1 = parseFloat(screen.textContent);
  operate(currentOper,ans,var1);
  screen.textContent = parseFloat(ans.toFixed(9));
  currentOper = "";
  computed = true;
});

clear.addEventListener('click', () => reset());

reset();
