// Você está desenvolvendo um sistema para uma loja online. Cada produto do catálogo deve ser representado por um objeto com informações de nome, preco e disponivel. Escreva um programa que:

// Crie um objeto chamado produto.
// O objeto deve conter as propriedades: nome, preco, disponivel.
// Exiba o objeto no console.

const produto = {
    nome : 'copo',
    preco : 'R$1.99',
    disponivel : 'true'
}

console.log(produto)


// Você está criando um painel de configurações para um aplicativo. As configurações são armazenadas em um objeto e você precisa acessar informações específicas para exibição.

// Escreva um programa que:

// Crie um objeto configuracoes com as propriedades de tema, notificacoes, idioma.
// Acesse tema usando notação de ponto.
// Acesse idioma usando notação de colchetes.
// Exiba os dois valores no console.

const configuracoes = {
    tema : 'escuro',
    notificacoes : 2,
    idioma : ['Portugues BR', 'English', 'Espanol']
}

console.log(configuracoes.tema)
console.log(configuracoes.idioma[0]);

// Você está desenvolvendo um sistema para uma locadora de carros. Cada veículo tem informações cadastradas, mas agora a empresa decidiu remover a informação do modelo antigo dos carros. Escreva um programa que:

// Crie um objeto carro com as propriedades: marca, modelo, ano, modeloAntigo;
// Remova a propriedade modeloAntigo;
// Exiba o objeto final no console.


const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2022,
  modeloAntigo: 'Corolla XEi'
}

delete carro.modeloAntigo

console.log(carro);

