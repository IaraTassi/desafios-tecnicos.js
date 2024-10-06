// Desafio técnico - Escreva um programa que inverta os caracteres de um string.

// Função para inverter os caracteres de uma string
function inverterString(str) {
  let stringInvertida = "";

  // Percorre a string do final para o início
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i]; // Adiciona o caractere atual à nova string
  }

  return stringInvertida;
}

// Exemplo de string para inverter
const stringOriginal = "Target Sistemas";
const stringInvertida = inverterString(stringOriginal);

// Exibe o resultado
console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);
