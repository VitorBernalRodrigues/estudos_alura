const fs = require('fs')

const caminhoArquivo = process.argv
const link = caminhoArquivo[2]

if (!link) {
    console.error('Informe o caminho do arquivo como argumento.')
    process.exit(1)
}

fs.readFile(link, 'utf-8', (err, texto) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err.message)
        return
    }
    const textoMinusculo = texto.toLowerCase()
    verificarPalavrasDuplicadas(textoMinusculo)
})

// console.log(link)

function verificarPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ')
    const resultado = {}
    listaPalavras.forEach(palavra => {
        if (!palavra) return
        resultado[palavra] = (resultado[palavra] || 0) + 1
        console.log(resultado)
    })
}