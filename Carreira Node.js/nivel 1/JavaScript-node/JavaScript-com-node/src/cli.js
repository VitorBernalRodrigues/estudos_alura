import fs from 'fs';
import path from 'path';
import trataErros from './erros/funcoesErros';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helps.js';
import { Command } from 'commander';
import { chalk } from 'chalk';

const progam = new Command();

progam.version('0.0.1')
    .option('-t ,--texto <string>', 'caminho do arquivo de texto para análise')
    .option('-d ,--destino <string>', 'endereço para salvar o arquivo de saída')
    .action((options) => {
        const { texto, destino } = options;

        if (!texto || !destino) {
            console.error(chalk.red('Erro: Os parâmetros --texto e --destino são obrigatórios.'));
            progam.help();
            return
        }

        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);

        try {
            processaArquivo(caminhoTexto, caminhoDestino);
            console.log(chalk.green('Arquivo processado com sucesso.'));
        } catch (err) {
            console.error('Erro ao processar o arquivo:', err.message);
        }
    });

progam.parse();

function processaArquivo(texto, destino) {
    fs.readFile(texto, "utf-8", (err, texto) => {
        try {
            if (err) throw err
            const resultado = contaPalavras(texto);
            criaESalvaArquivo(resultado, destino).then(() => {
                console.log('Processamento concluído.');
            });
        } catch (err) {
            trataErros(err)
        }
    });
}



fs.readFile(link, "utf-8", (err, texto) => {
    try {
        if (err) throw err
        const resultado = contaPalavras(texto);
        criaESalvaArquivo(resultado, endereco).then(() => {
            console.log('Processamento concluído.');
        });
    } catch (err) {
        trataErros(err)
    }
    // if (err) {
    //     console.error("Erro ao ler o arquivo:", err.message);
    //     return;
    // }
});

// async function criaESalvaArquivo(listaPalavras, endereco) {
//     const arquivo = `${endereco}/resultado.txt`;
//     const textoPalavras = JSON.stringify(listaPalavras);
//     try {
//         await fs.promises.writeFile(arquivo, textoPalavras);
//         console.log('Arquivo salvo em', arquivo);
//     } catch (err) {
//         throw err
//     }
// }

function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);

    fs.promises.writeFile(arquivo, textoPalavras).then(() => {
        console.log('Arquivo salvo em', arquivo);
    }).catch((err) => {
        throw err
    })
        .finally(() => {
            console.log('Operação de escrita finalizada.');
        });
}