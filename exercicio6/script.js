var operacao = prompt('Operação (+,-,*,/');
var num1 = parseFloat(prompt('Numero 1'));
var num2 = parseFloat(prompt('Numero 2'));

switch (operacao) {
  case '+':
    alert(num1 + num2);
    break;
  case '-':
    alert(num1 - num2);
    break;
  case '*':
    alert(num1 * num2);
    break;
  case '/':
    alert(num1 / num2);
    break;
  default:
    alert('Operação invalida');
}
