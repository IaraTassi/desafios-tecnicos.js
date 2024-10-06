// Desafio técnico - sequênica Fibonacci
// Função para gerar a sequência de Fibonacci e verificar se o número informado (21) pertence a mesma
function pertenceFibonacci(numero) {
  // Variáveis iniciais da sequência de Fibonacci
  let a = 0;
  let b = 1;

  // Caso o número seja 0 ou 1, ele pertence à sequência
  if (numero === 0 || numero === 1) {
    return true;
  }

  // Gera a sequência de Fibonacci até que o valor de 'b' seja igual ou maior que o número informado
  while (b < numero) {
    let proximo = a + b;
    a = b;
    b = proximo;
  }

  // Verifica se o número informado é igual ao último número gerado
  return b === numero;
}

// Número informado
const numeroInformado = 21; // Você pode alterar este valor

// Verifica se o número informado pertence à sequência de Fibonacci
if (pertenceFibonacci(numeroInformado)) {
  console.log(`O número ${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
  console.log(
    `O número ${numeroInformado} NÃO pertence à sequência de Fibonacci.`
  );
}
