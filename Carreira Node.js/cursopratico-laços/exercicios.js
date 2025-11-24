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