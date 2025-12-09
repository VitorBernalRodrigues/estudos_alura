// 1
function saudacao() {
    return console.log('Olá, Seja bem-vindo(a)!')
}

saudacao()

// 2
function apresentarPessoa(nome,idade) {
    return console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`)
}

apresentarPessoa("Vito", "17")

// 3
function calculoIMC(peso, altura) {
    return peso / (altura ** 2)
}

calculoIMC(75, 165)

// 4 
function verificarAprovado(nota) {
    if(nota >= 7) {
        return console.log("Aprovado")
    } else {
        return console.log("Reprovado")
    }
}

verificarAprovado(8)

// 5
function ehPar(numero) {
    if(numero % 2 == 0) {
        return true
    } else {
        return false
    } 
}

ehPar(5)

// 6
function soma(numero1, numero2) {
    return console.log(numero1 + numero2)
}

soma(5, 7)

// 7
function calcularTroco(compra, pagamento) {
    const troco = compra - pagamento
    return console.log(troco)
}

// 8 

let calcularTroco2 = (numero1, numero2) => {
    return console.log(numero1 + numero2)
}

//  9
function executarAcao(acao) {
    return console.log('Executando ação!')
}

executarAcao(acao)

// 10

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
        console.log('você acertou!!, parabens')
    } else {
        console.log('você errou!!, continue praticando')
    }
    rl.close
})



