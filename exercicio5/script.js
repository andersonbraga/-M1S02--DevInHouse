var numero = parseInt(prompt('Insira um numero'));
if (isNaN(numero)) {
  alert('Numero invalido');
} else {
  var pares = 0;
  var impares = 0;
  for (var i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
      pares += 1;
    } else {
      impares += 1;
    }
  }
  alert('Existem' + pares + 'numeroes pares e' + impares + ' numeroes impares');
}
