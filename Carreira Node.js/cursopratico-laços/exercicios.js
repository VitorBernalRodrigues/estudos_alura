// FOR
// Gerar números aleatórios de 1 a 50 e
// interromper o laço caso o número gerado seja 15.
// Interromper depois de 30 tentativas e contar a quantidade de tentativas.
// const numero = Math. floor(Math. random() * (50 -1 + 1) + 1);

let contador = 0

for (let i = 1; i <= 30; i++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    if(numero === 15) {
        console.log('Interrompido')
        break
    }
    contador++
}

console.log(contador)