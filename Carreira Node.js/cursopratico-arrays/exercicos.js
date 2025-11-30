// Imagine que você está desenvolvendo um sistema para controlar uma lista de compras. O primeiro passo é permitir que a pessoa usuária acesse e altere os itens dessa lista.

// Escreva um programa que:

// Crie um array com os itens iniciais da lista de compras.
// Acesse e exiba o segundo item da lista.
// Modifique o último item da lista para um novo valor.


const listaDeFrutasCompras = ['Tomate', 'Maçã', 'Banana', 'Manga']

console.log('Segundo item da lista:', listaDeFrutasCompras[1])
listaDeFrutasCompras[3] = 'Uva'
console.log(listaDeFrutasCompras)


// Você está criando um sistema para controlar os gastos mensais da sua casa. Os valores das despesas estão em um array, e você precisa somar todos esses valores para saber o total gasto no mês.

// Escreva um programa que:

// Crie um array com os valores das despesas.
// Use um loop for para somar os valores.
// Exiba o total gasto.

const despesas = [120, 80, 45.5, 200, 60]
let soma = 0;
for (let i = 0; i < despesas.length; i++) {
    soma += despesas[i]
}

console.log('Total de despesas: R$', soma)