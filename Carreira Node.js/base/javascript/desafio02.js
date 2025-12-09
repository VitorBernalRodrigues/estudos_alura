let totalNumerosPares = 0
let totalNumerosImpares = 0

let numero = 20
let contador = 0

for (let contador = 0; contador < 100; contador++) {
    if(contador % 2 == 0) {
        totalNumerosPares++
        // console.log(totalNumerosPares)
    } else {
        totalNumerosImpares++
        // console.log(totalNumerosImpares)
    }
}

while (contador < numero ) {
    if(contador % 2 == 0) {
        totalNumerosPares++
        // console.log(totalNumerosPares)
    } else {
        totalNumerosImpares++
        // console.log(totalNumerosImpares)
    }
    contador++
}

do {
    contador++
    if(contador % 2 == 0) {
        totalNumerosPares++
        // console.log(totalNumerosPares)
    } else {
        totalNumerosImpares++
        // console.log(totalNumerosImpares)
    }
} while (contador < numero);

console.log(totalNumerosImpares)
console.log(totalNumerosPares)

