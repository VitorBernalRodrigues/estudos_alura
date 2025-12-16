
if (!link) {
    console.error("Informe o caminho do arquivo como argumento.");
    process.exit(1);
}

export function contaPalavras(texto) {
        const paragrafos = extrairParagrafos(texto)
        const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    })
    return contagem;    
}

export function extrairParagrafos(texto) {
    return texto = texto.toLowerCase().split('\n');
}

export function limpaPalavra(texto) {
    return texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

export function verificaPalavrasDuplicadas(texto) {
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
