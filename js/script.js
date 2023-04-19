let finalResult = '';

escreve(); 

function escreve() {
  let output = document.getElementById('result');
  output.innerHTML = finalResult.toFixed(2);
}

function dolar() {
  let n1 = document.getElementById('firstNumber').value; 
  n1 = parseFloat(n1);
  let n2 = 5.08; 

  if(!n1) {
    alert('Ops: Você esqueceu de digitar o valor em real')
    return;
  }

  n2 = parseFloat(n2);
  finalResult = n1 / n2;
  escreve();
}

function euro() {
  let n1 = document.getElementById('firstNumber').value; 
  n1 = parseFloat(n1);
  let n2 = 5.57; 
  n2 = parseFloat(n2);

  if(!n1) {
    alert('Ops: Você esqueceu de digitar o valor em real')
    return;
  }

  finalResult = n1 / n2;
  escreve();
}

function dolarcanadense() {
  let n1 = document.getElementById('firstNumber').value; 
  n1 = parseFloat(n1);
  let n2 = 3.78; 
  n2 = parseFloat(n2);

  if(!n1) {
    alert('Ops: Você esqueceu de digitar o valor em real')
    return;
  }

  finalResult = n1 / n2;
  escreve();
}

function libra() {
  let n1 = document.getElementById('firstNumber').value; 
  n1 = parseFloat(n1);
  let n2 = 6.32; 
  n2 = parseFloat(n2);

  if(!n1) {
    alert('Ops: Você esqueceu de digitar o valor em real')
    return;
  }

  finalResult = n1 / n2;
  escreve();
}

function limpar() {
  document.getElementById('firstNumber').value = "";
  //document.getElementById('secondNumber').value = "";
  let clean = document.getElementById('result');
  clean.innerHTML = "";
}