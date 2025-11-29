// Imagine que você está criando uma página de boas-vindas para um site de cursos online. Ao acessar a plataforma, o sistema precisa exibir uma mensagem de saudação para cada usuário. Às vezes, porém, o nome da pessoa pode estar ausente — e, nesse caso, uma saudação genérica deve ser exibida.

// Sua tarefa é criar uma função chamada saudacao que receba um nome como parâmetro, mas que funcione mesmo quando nenhum nome for informado, exibindo uma saudação genérica. Use o parâmetro pré-definido para lidar com isso.

function saudacao(nome) {
    if(nome === undefined) {
        return console.log('Olá, Seja bem vindo!!!')
    } else {
        return console.log(`Olá ${nome}, Seja bem vindo!!!`)
    } 
}

saudacao()
saudacao('Vitor')


// Imagine que você está criando um sistema para um e-commerce que vende livros.Toda vez que o cliente aplica um cupom de desconto, o sistema precisa calcular quanto ele vai pagar com base no valor original e na porcentagem de desconto.

// Sua missão é criar uma função chamada calcularDesconto que receba dois parâmetros:

// o preço original do produto,
// a porcentagem de desconto (com um valor padrão de 10%).

function calcularDesconto(precoOriginal, porcentagem) {
    if (porcentagem === undefined || 0) {
        let porcentagem = 10
        let precofinal = precoOriginal * (1 - porcentagem / 100)
        return console.log(`Preço final com desconto de ${porcentagem}% é: R$${precofinal}`)
    } else {
        let precofinal = precoOriginal * (1 - porcentagem / 100)
        return console.log(`Preço final com desconto de ${porcentagem}% é: R$${precofinal}`)
    }

}

calcularDesconto(100, );


// Imagine que você está criando uma pequena ferramenta para alunos acompanharem seu desempenho escolar. A ideia é que o aluno insira suas duas notas principais e o sistema exiba a média aritmética entre elas.

// Sua tarefa é criar uma arrow function chamada calcularMedia que receba duas notas e retorne a média entre elas.

const calcularMedia = (a, b) => {return console.log((a + b) / 2)}


calcularMedia(7, 9);


// Imagine que você está desenvolvendo uma funcionalidade para um sistema de quiz matemático. Cada vez que o jogador digita um número, o sistema precisa informar se ele é par ou ímpar — mas a lógica precisa estar encapsulada em uma arrow function.

// Sua missão é criar uma arrow function chamada verificarParidade que receba um número como parâmetro e retorne a string:

// "Par" se o número for par
// "Ímpar" se for ímpar

let verificarParidade = (numero) => {
    if(numero % 2 === 0) {
        return console.log('par');
    } else {
        return console.log('impar');
    }
}

verificarParidade(8);


// Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. Para cada pedido, o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. A regra é a seguinte:

// Até 5 km: frete fixo de R$ 5
// De 5.1 km até 20 km: R$ 0,50 por quilômetro
// Acima de 20 km: frete fixo de R$ 20
// Seu desafio é escolher o tipo de função mais adequado para resolver este problema. Função tradicional? Arrow Function? E aí? Como vai implementar esse desafio?


function calcularFrete(distancia) {
    let frete = 0
    if(distancia <= 5) {
        frete = 5
        return console.log(distancia * frete)
    } else if( distancia > 5 && distancia <= 20) {
        frete = 0.50
        return console.log(distancia * frete)
    }  else {
        frete = 20
        return console.log(distancia * frete)
    }
}


// Imagine que você está criando uma função que simula o processamento de um pedido em um site. Após o processamento, você quer que uma mensagem personalizada seja exibida — mas essa mensagem pode variar dependendo do tipo de cliente: comum, vip ou novo usuário.

// Sua tarefa é criar uma função chamada processarPedido, que receba dois parâmetros:

// o nome do cliente, e
// uma função de callback responsável por exibir uma mensagem após o pedido ser processado.


function processarPedido(nome, tipoCliente, callback) {
    console.log(`Processando pedido de ${nome}...`)
    callback(nome, tipoCliente)
}
 
function mensagemPersonalizada(nome, tipo) {
    if (tipo === "vip") {
        console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`)
    } else if (tipo === "novo") {
        console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`)
    } else {
        console.log(`Obrigado pela sua compra, ${nome}!`)
    }
}
 
processarPedido("Lucas", "vip", mensagemPersonalizada)

// Imagine que você está desenvolvendo uma interface de atendimento online.Quando o usuário envia uma pergunta, o sistema precisa simular que está "pensando" ou "processando a resposta", e só depois exibir a resposta final.

// Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:

// o nome do usuário, e
// uma função de callback que será executada após 3 segundos.

function responderUsuario(nome, callback) {
    console.log("Processando sua pergunta...")
    setTimeout(() => {
        callback(nome)
    }, 3000)
}
 
function mostrarResposta(nome) {
    console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`)
}
 
responderUsuario("Camila", mostrarResposta)

// Imagine que você está desenvolvendo um sistema de avaliação para um jogo educativo.Ao final de cada fase, o jogador acumula uma pontuação total, e o sistema precisa avaliar se ele:

// Foi aprovado, se a pontuação for igual ou maior que 70
// Precisa de reforço, se a pontuação estiver entre 50 e 69
// Foi reprovado, se a pontuação for menor que 50
// Sua tarefa é criar uma função chamada avaliarDesempenho, que receba dois parâmetros:

// a pontuação final do jogador
// uma função de callback que será usada para exibir uma mensagem personalizada com base no resultado da avaliação.

function avaliarDesempenho(pontuacao, callback) {
    let status = ""
 
    if (pontuacao >= 70) {
        status = "aprovado"
    } else if (pontuacao >= 50) {
        status = "reforco"
    } else {
        status = "reprovado"
    }
 
    callback(pontuacao, status)
}
 
function gerarMensagem(pontuacao, status) {
    console.log(`Pontuação: ${pontuacao}`)
 
    if (status === "aprovado") {
        console.log("Parabéns! Você foi aprovado!")
    } else if (status === "reforco") {
        console.log("Atenção! Você precisa de reforço.")
    } else {
        console.log("Infelizmente, você foi reprovado. Tente novamente.")
    }
}
 
avaliarDesempenho(82, gerarMensagem)

// Você está desenvolvendo um sistema para ajudar pessoas a entenderem melhor o consumo de energia elétrica de seus aparelhos eletrônicos. O sistema deve calcular o consumo mensal estimado com base no uso diário, classificar o consumo (baixo, moderado ou alto) e exibir uma mensagem clara para o usuário.

// Sua missão é criar três funções separadas, com responsabilidades bem definidas:

// calcularConsumo(potencia, horasPorDia): Retorna o consumo mensal em kWh, com base na fórmula: consumo = (potencia × horasPorDia × 30) / 1000
// classificarConsumo(consumo): Retorna a classificação com base na tabela:

function calcularConsumo(potencia, horasPorDia) {
    return (potencia * horasPorDia * 30) / 1000
}

function classificarConsumo(consumo) {
    if (consumo < 50) {
        return "Baixo consumo"
    } else if (consumo < 200) {
        return "Consumo moderado"
    } else {
        return "Alto consumo"
    }
}

function exibirResumo(nomeAparelho, consumo, classificacao) {
    console.log(`${nomeAparelho} tem consumo de ${consumo.toFixed(1)} kWh/mês e é classificada como ${classificacao}.`)
}

const nomeAparelho = "Geladeira"
const consumo = calcularConsumo(150, 4)
const classificacao = classificarConsumo(consumo)
exibirResumo(nomeAparelho, consumo, classificacao)