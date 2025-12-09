// 1
let idade = 19 

if(idade >= 18) {
    console.log('Pode comprar bebida alcoólica')
} else {
    console.log('Venda proibida para menores de 18 anos')
}

//2
let horaAtual = 16

if(horaAtual >= 6 && horaAtual <= 12) {
    console.log('bom dia')
} else if(horaAtual > 12 && horaAtual <= 18) {
    console.log('boa tarde')
} else {
    console.log("Boa noite")
}

// 3
let numeroQualquer = 3

if(numeroQualquer < 0 ) {
    console.log('Negativo')
} else if(numeroQualquer > 0 ) {
    console.log('Positivo')
} else {
    console.log('igual a 0')
}

// 4
let nota = 6

if (nota >= 9){
    console.log('A')
} else if(nota >= 8 && nota <= 8.9) {
    console.log('B')
} else if(nota >= 6 && nota <= 7.9) {
    console.log('C')
} else if(nota >= 4 && nota <= 5.9) {
    console.log('D')
} else {
    console.log('E')
}

// 5
let numero = 3

let resultado = (numero % 2 === 0) ? "Par": "Ímpar"
console.log(resultado)


exemple 

const palavra = "eu nao sei"

for (let contador = 0; contador < palavra.length; contador++) {
    console.log(palavra[contador])
}

let contador = 0

while (contador < palavra.length) {
    console.log(palavra[contador])
    contador++
}


do {
    console.log(palavra[contador])
    contador++
} while (contador < palavra.length);