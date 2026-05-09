const Services = require('./Services');

class PessoaServices extends Services {
    constructor() {
        super('Pessoa');
        this.matriculaServices = new Services('Matricula');
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

    async cancelaPessoaEMatriculas(estudanteId) {
        await super.atualizaRegistro({ ativo: false }, { id: estudanteId });
        await this.matriculaServices.atualizaRegistro({ status: 'cancelada' }, { estudante_id: estudante_id });

    };
}
