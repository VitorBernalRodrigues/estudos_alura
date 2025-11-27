function elevar(n1, n2) {
    return console.log(n1**n2)
}

elevar(4,4)


const fatorial = function f(num) {
  if (num === 0 || num === 1) return 1;
  return num * f(num - 1);
}

console.log(fatorial(5));


const calculaJuros = (valor, juros, tempo) => {
  let taxaJuros = (juros/100) + 1
  return valor * Math.pow(taxaJuros, tempo)
}


console.log(calculaJuros(1500, 5, 1));

// r iar uma função que faça operações matemáticas entre 2 valores (soma e multiplicação)
// função deve receber por parâmetro: operação desejada, valor 1 e valor 2

const soma = (a, b) => {
    return a + b
}

const multiplicar = (a, b) => {
    return a * b
}

const operacaoMatematica = (fnOperacao, valorA, valorB) => {
    return fnOperacao(valorA, valorB)
}

console.log(operacaoMatematica(soma, 4, 2))
console.log(operacaoMatematica(multiplicar, 5, 10))

// const usuarioid = '241234'

// function tempoTela(tempo)  {
//     if(usuarioid === '241234') {
//         setTimeout(() => {
//             return console.log('tempo limite atingido')
//         }, tempo)
//     }     
// }

// tempoTela(2000)


const userId = '4545656'

setTimeout((userId) => console.log(`sessão de ${userId} está inativa`), 4000, userId);

