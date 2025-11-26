// FOR
// Gerar números aleatórios de 1 a 50 e
// interromper o laço caso o número gerado seja 15.
// Interromper depois de 30 tentativas e contar a quantidade de tentativas.
// const numero = Math. floor(Math. random() * (50 -1 + 1) + 1);



for (let i = 1; i <= 30; i++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if(numero === 15) {
        console.log('Interrompido')
        break
    }
    console.log(i)
}

// Gerar números aleatórios de 1 a 50
// Criar um contador que só é incrementado caso os números NÃO sejam divisíveis por 5
// No final, exibir o valor do contador

let contador = 0

for (let i = 1; i <= 50; i++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if(numero % 5 === 0) {
        contador++
    }
}

console.log(contador)



// while

// Gerar um laço que tente "adivinhar" um dado número de 1 a 50
// e conte a quantidade de tentativas até o resultado

let numeroSecreto = 10
let numeroNormal = 0
let tentativas = 0

while (numeroSecreto !== numeroNormal) {
    numeroNormal = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    tentativas++
}

console.log(tentativas)


//do while

// Gerar um laço que tente "adivinhar" um dado número de 1 a 50
// e conte a quantidade de tentativas até o resultado

let numeroRandom = 0;

do {
    numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    console.log(numeroRandom)
} while (numeroRandom % 2 !== 0);

console.lof(numeroRandom)

// criar um laço que recebe um texto e verifica se é um palíndromo
// imprimir no console o texto, informando se é ou não palíndromo

let palavra = 'manga'
let palavraInvertida = ''

for (let i = palavra.length - 1; i <= 0; i--) {
    palavraInvertida += palavra[i]
}

if(palavraInvertida === palavra) {
    console.log(`${palavra} é palíndromo`)
} else {
    console.log(`${palavra} não é palíndromo`);
}
