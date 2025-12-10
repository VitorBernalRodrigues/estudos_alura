const fs = require("fs");

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

if (!link) {
    console.error("Informe o caminho do arquivo como argumento.");
    process.exit(1);
}

fs.readFile(link, "utf-8", (err, texto) => {
    if (err) {
        console.error("Erro ao ler o arquivo:", err.message);
        return;
    }
    quebraEmParagrafos(texto);
});

function quebraEmParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
}


function limpaPalavra(texto) {
    return texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}
function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(" ");
    const resultado = {};
    // objeto[propriedade] = valor;
    listaPalavras.forEach((palavra) => {
        if (palavra.length >= 3) {
            const palavraLimpa = limpaPalavra(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
        }

    });
    return resultado;
}
