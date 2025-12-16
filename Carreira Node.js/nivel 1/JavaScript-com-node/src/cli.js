import fs from 'fs';
import trataErros from './erros/funcoesErros';
import { contaPalavras } from './index.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

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
    const textoPalavras = JSON.stringify(listaPalavras);

    fs.promises.writeFile(arquivo, textoPalavras).then(() => {
        console.log('Arquivo salvo em', arquivo);
    }).catch((err) => {
        throw err
    })
    .finally(() => {
        console.log('Operação de escrita finalizada.');
    });
}