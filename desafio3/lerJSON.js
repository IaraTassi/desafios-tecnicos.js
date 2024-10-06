// Desafio técnico - Ler arquivo JSON
// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const fs = require("fs");
const path = require("path");

// Função para ler o arquivo JSON e processá-lo
function lerJSON(caminhoArquivo) {
  return new Promise((resolve, reject) => {
    fs.readFile(caminhoArquivo, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

// Função para processar os dados de faturamento
async function processarFaturamento() {
  try {
    // Define o caminho absoluto para o arquivo JSON
    const caminhoArquivo = path.join(__dirname, "faturamento.json");

    // Lê o arquivo JSON
    const faturamentoMensal = await lerJSON(caminhoArquivo);

    const dias = faturamentoMensal.faturamentoMensal;

    // Filtra os dias com faturamento maior que 0
    const valores = dias.map((dia) => dia.valor).filter((valor) => valor > 0);

    // Calcula o menor e o maior valor de faturamento
    const menorFaturamento = Math.min(...valores);
    const maiorFaturamento = Math.max(...valores);

    // Calcula a média de faturamento
    const somaFaturamento = valores.reduce((acc, valor) => acc + valor, 0);
    const mediaFaturamento = somaFaturamento / valores.length;

    // Conta quantos dias o faturamento foi superior à média
    const diasAcimaDaMedia = valores.filter(
      (valor) => valor > mediaFaturamento
    ).length;

    // Exibe os resultados
    console.log(`Menor valor de faturamento: R$ ${menorFaturamento}`);
    console.log(`Maior valor de faturamento: R$ ${maiorFaturamento}`);
    console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
  } catch (error) {
    console.error("Erro ao processar o faturamento:", error);
  }
}

// Chama a função principal para processar os dados
processarFaturamento();
