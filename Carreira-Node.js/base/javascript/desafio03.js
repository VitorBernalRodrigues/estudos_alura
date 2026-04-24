const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Bem-vindo(a) ao Quiz de JavaScript')
console.log('Responda com a letra correta: a, b ou c\n')

let acertos = 0

rl.question('1) Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n>', (resposta) => {
    if(resposta == "b") {
        acertos++
    }

    rl.question('2) Qual dessas é uma estrutura de repetição\n(a) loopar()\n(b) repeat\n(c) for\n>', (resposta2) => {
        if(resposta2 == "c") {
            acertos++
        }

        rl.question('3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n', (resposta3) => {
            if(resposta3 == "a") {
                acertos++
            }

            if(acertos == 3) {
                console.log('Parabéns, você acertou tudo!')
            } else if(acertos == 2) {
                console.log('Muito bem!, você acertou 2, continue assim!')
            } else if(acertos == 1) {
                console.log('Muito bom!, você acertou 1, continue melhorando!')
            } else {
                console.log('Você errou todas!, continue praticando')
            }
        
            rl.close
        })    
    })
})