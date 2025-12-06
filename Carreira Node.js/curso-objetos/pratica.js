const pessoa = {
    nome: 'Roberta R',
    nascimento: '2020-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};

console.log(pessoa.trofeus[1])


delete pessoa.cpf

function exibirTrofeus(listaTrofeus) {
    for (const trofeu of listaTrofeus) {
        console.log(trofeu)
    }
}

exibirTrofeus(pessoa.trofeus)


// 2

// adicione ao obj um método para calcular a idade da pessoa e retornar o valor no terminal como string.

const user = {
    nome: 'Roberta R',
    nascimento: '1996-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};

user.calcularIdade = function calcularIdade() {
    const nascimento = parseInt(this.nascimento.slice(0, 4))
    const idade = new Date().getFullYear() - nascimento
    return console.log(idade)
}