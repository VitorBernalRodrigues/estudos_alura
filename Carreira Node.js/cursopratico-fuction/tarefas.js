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