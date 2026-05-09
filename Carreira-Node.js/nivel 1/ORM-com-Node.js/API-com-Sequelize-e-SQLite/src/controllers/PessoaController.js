const Controller = require('./Controller');
const PessoaServices = require('../services/PessoaServices');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
    constructor() {
        super(pessoaServices);
    }       

    async pegaTodasAsPessoas(req, res) {
        const { estudanteId } = req.params;
        try {
            const listaMatriculas = await pessoaServices.pegaMatriculasPorEstudante(Number(estudanteId));
            return res.status(200).json(listaMatriculas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async pegaTodasAsPessoas(req, res) {
        try {
            const listTodasAsPessoas = await pessoaServices.pegaPessoasEscopoTodos();
            return res.status(200).json(listTodasAsPessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }    
}

module.exports = new PessoaController();