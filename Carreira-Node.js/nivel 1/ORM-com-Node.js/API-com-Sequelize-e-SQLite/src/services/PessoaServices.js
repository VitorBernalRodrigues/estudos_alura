const Services = require('./Services');

class PessoaServices extends Services {
    constructor() {
        super('Pessoa');
    }

    async pegaMatriculasAtivasPorEstudante(estudanteId) {
        const estudante = await super.pegaUmRegistroPorId(estudanteId);
        const listaMatriculas = await estudante.getAulasMatriculadas();
        return listaMatriculas;
    }

    async pegaTodasAsMatriculasPorEstudante(estudanteId) {
        const estudante = await super.pegaUmRegistroPorId(estudanteId);
        const listaMatriculas = await estudante.getTodasAsMatriculadas();
        return listaMatriculas;
    }

    async pegaPessoasEscopoTodos() {
        return super.pegaTodosOsRegistrosPorEscopo('todosOsRegistros');
    }
}