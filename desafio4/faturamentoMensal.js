// Desafio técnico - Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53
// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

// Definindo os valores de faturamento por estado
const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

// Função para calcular o percentual de cada estado
function calcularPercentuais(faturamento) {
  const totalFaturamento = Object.values(faturamento).reduce(
    (acc, valor) => acc + valor,
    0
  );

  const percentuais = {};

  for (const estado in faturamento) {
    const percentual = (faturamento[estado] / totalFaturamento) * 100;
    percentuais[estado] = percentual.toFixed(2); // Arredondar para duas casas decimais
  }

  return { totalFaturamento, percentuais };
}

// Executa o cálculo e exibe os resultados
const { totalFaturamento, percentuais } =
  calcularPercentuais(faturamentoPorEstado);

console.log(`Faturamento total: R$ ${totalFaturamento.toFixed(2)}`);
console.log("Percentuais de representação por estado:");
for (const estado in percentuais) {
  console.log(`${estado}: ${percentuais[estado]}%`);
}
