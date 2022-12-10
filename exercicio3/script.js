var numero = parseInt(prompt('Digite um numero'));
var resultado;
for (i = 0; i < 11; i++) {
  resultado += numero * i;
  // resultado += `${numero} X ${i} = ${numero * i} \n`;
  resultado = numero * i;
  alert(numero + ' x ' + i + ' = ' + resultado);
}
