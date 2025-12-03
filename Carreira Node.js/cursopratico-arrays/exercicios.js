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

// Você está criando um painel para um sistema de chamada escolar. Você recebeu uma lista com os nomes das pessoas estudantes de uma turma e precisa exibir um por um para fazer a chamada em sala. Escreva um programa que:

// Crie um array com os nomes das pessoas.
// Use o for...of para exibir cada nome individualmente.\


const estudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz']

for (const name of estudantes) {
    console.log(`estudante: ${name}`)
}

// Você recebeu a missão de desenvolver um sistema de envio de notificações. A cada nova mensagem cadastrada, o sistema deve exibir uma notificação no console informando que a mensagem foi enviada. Escreva um programa que:

// Crie um array com uma lista de mensagens.
// Use o método forEach() para exibir uma mensagem no console para cada item da lista.

const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado']

mensagens.forEach((mensagem) => {
    console.log(mensagem)
})


// Você está desenvolvendo um sistema de tarefas do dia a dia. O sistema deve permitir que a pessoa usuária adicione uma nova tarefa ao final da lista e, em seguida, remova a última tarefa que foi adicionada. Escreva um programa que:

// Crie um array com três tarefas iniciais.
// Adicione uma nova tarefa no final da lista.
// Remova a última tarefa da lista.
// Exiba a lista após cada operação.


const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras']

tarefas.push('Andar com o cachorro')
console.log(tarefas)
tarefas.pop()
console.log(tarefas)

// Você está desenvolvendo um sistema de pedidos online. Em certo momento, o sistema precisa criar uma cópia da lista de pedidos para simular alterações, sem modificar o array original. Escreva um programa que:

// Crie um array com alguns pedidos.
// Faça uma cópia do array.
// Adicione um novo item apenas na cópia.
// Exiba os dois arrays para mostrar que o original não foi alterado.


const pedidos = ['camiseta', 'calça', 'tênis']
const pedidosCopia = pedidos.slice()
pedidosCopia.push('boné')

console.log("Array original:", pedidos)
console.log("Array copiado:", pedidosCopia)


// Você está desenvolvendo um sistema de busca para uma biblioteca digital. Quando a pessoa usuária digita o nome de um livro, o sistema precisa verificar se ele está disponível na lista de títulos cadastrados. Escreva um programa que:

// Crie um array com nomes de livros.
// Crie uma variável com o nome de um livro procurado.
// Verifique se o livro está na lista.
// Exiba uma mensagem informando se o livro foi encontrado ou não.

const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema']
const livroProcurado = 'O Cortiço'

if (livros.indexOf(livroProcurado) !== -1) {
  console.log(`O livro "${livroProcurado}" está disponível.`)
} else {
  console.log(`O livro "${livroProcurado}" não foi encontrado.`)
}

// Você está desenvolvendo um sistema de pagamento e todos os produtos precisam receber um desconto de 10% antes de serem exibidos para as pessoas. Escreva um programa que:

// Crie um array com os preços originais dos produtos.
// Use o método map() para aplicar 10% de desconto em cada item.
// Exiba o novo array com os preços já com o desconto aplicado.


const precos = [100, 80, 50, 120]

const precosDescontos = precos.map(preco => preco * 0.9)

console.log("Preços com desconto:", precosDescontos)
console.log(precosDescontos)

// Você está desenvolvendo um sistema de controle de acesso para um evento exclusivo. Cada participante fornece seu nome e idade, mas apenas maiores de 18 anos podem entrar. Seu objetivo é exibir quem teve acesso liberado e criar uma lista final apenas com os nomes desses participantes.

// Para isso, você precisa:

// Criar um array com objetos contendo nome e idade de cada participante.
// Usar o método filter() para:
// Selecionar somente os participantes com 18 anos ou mais.
// Exibir no console a mensagem "Acesso liberado para: [nome]" para cada um que passou.
// Usar o método map() para criar um novo array com apenas os nomes dos autorizados.
// Exibir a lista de aprovados no final.

const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
]


const participantesFiltrados = participantes.filter(participante => participante.idade >= 18)
console.log(participantesFiltrados);

const nomesAutorizados = participantesFiltrados.map(participantes => participantes.nome)
console.log(nomesAutorizados);
