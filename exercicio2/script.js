var idade = parseInt(prompt('Qual é a sua idade?'));

if (idade >= 0 && idade < 16) {
  alert('Jovem');
} else if (idade > 15 && idade < 65) {
  alert('Adulto');
} else if (idade > 64) {
  alert('Idoso');
} else {
  alert('Valor Invalido');
}
