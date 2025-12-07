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

// Você está desenvolvendo um painel de monitoramento que exibe informações sobre dispositivos conectados à rede. Cada dispositivo é representado por um objeto, e todos estão organizados dentro de um array.

// Escreva um programa que:

// Crie um array chamado dispositivos, contendo 3 objetos com as propriedades: nome e status.
// Use um loop para exibir no console o nome e status de cada dispositivo.

const dispositivos = [
    {
        nome : 'Celular',
        status : 'ativo'
    },
        {
        nome : 'tablet',
        status : 'inativo'
    },
        {
        nome : 'NoteBook',
        status : 'ativo'
    }
]

for (const dispositivo of dispositivos) {
    console.log(`Dispositivo: ${dispositivo.nome} | Status: ${dispositivo.status}`)
}


// Você está desenvolvendo um sistema de controle de máquinas em uma fábrica. Cada máquina é representada por um objeto que, além das informações básicas, também possui um método interno que exibe seu status. Escreva um programa que:

// Crie um objeto maquina com as propriedades: nome, funcionando.
// Adicione um método chamado exibirStatus que exibe no console: "A máquina [nome] está em funcionamento." ou "A máquina [nome] está parada.", dependendo do valor de funcionando.
// Chame o método exibirStatus.

const maquina = {
    nome: 'Esteira Transportadora',
    funcionando: true,
}

maquina.exibirStatus = function exibirStatus() {
    if(this.funcionando == true) {
        console.log(`A máquina ${this.nome} está em funcionamento.`)
    } else {
        console.log(`A máquina ${this.nome} está parada.`)
    }
}

maquina.exibirStatus();

// Imagine que você está desenvolvendo uma funcionalidade de importação de dados para uma empresa. Os dados chegam como um array de pares, onde cada par representa uma chave e seu respectivo valor, e você precisa transformar isso em um objeto estruturado, que será usado pelo sistema para preencher os campos automaticamente.

// Sua tarefa é:

// Criar uma função chamada montarObjeto que receba como parâmetro um array de pares chave-valor, como este:


function montarObjeto(arrPares) {
    const resultado = {}
 
    for (const [chave, valor] of arrPares) {
        resultado[chave] = valor
    }
 
    return resultado
}
 
const dados = [
    ['nome', 'João'],
    ['idade', 30],
    ['cidade', 'Curitiba']
]
 
console.log(montarObjeto(dados))


// Você foi a pessoa encarregada de desenvolver uma funcionalidade para o sistema de inspeções técnicas de uma fábrica. Cada máquina inspecionada gera automaticamente um relatório de medições, contendo dados como temperatura, vibração, pressão e nível de ruído. Essas informações são organizadas dentro de um objeto, onde cada chave representa uma categoria avaliada e o valor representa o nível registrado na inspeção.

// Exibir todas as categorias avaliadas;
// Exibir todos os valores registrados;
// Percorra todas as medições (pares categoria/valor) e imprima um detalhamento com status, seguindo a seguinte lógica:
// Se o valor for maior que 50, mostre a mensagem (alerta)
// Caso contrário, mostre (ok)

const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30
}

console.log(`categorias validas: `, Object.keys(relatorio))

console.log('Valores registrados', Object.values(relatorio))

const entradas = Object.entries(relatorio)

console.log("\nDetalhamento:")

for (let [chave, valor] of entradas) {
  const status = valor > 50 ? "alerta" : "ok"
  console.log(`${chave}: ${valor} (${status})`)
}

