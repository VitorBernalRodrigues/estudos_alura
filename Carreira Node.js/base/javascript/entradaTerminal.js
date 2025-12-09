const readLine = require('readline')

const leitor = readLine.creatInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual sua idade', (nome) => {
    console.log(`Olá ${nome}`)
    console.log('Boas vindas ao nosso sistema!!')

    leitor.close
})

