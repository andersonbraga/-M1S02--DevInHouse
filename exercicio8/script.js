var numero = parseInt(prompt('Informe o numero'));
var raiz = parseInt(prompt('Informe a raiz'));

var soma = numero;
var resultado = numero.toString();

for (var i = 0; i < 9; i++) {
  soma += raiz;
  resultado += ',' + soma;
}

alert('A PA é:' + resultado);
