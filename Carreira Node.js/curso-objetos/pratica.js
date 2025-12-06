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