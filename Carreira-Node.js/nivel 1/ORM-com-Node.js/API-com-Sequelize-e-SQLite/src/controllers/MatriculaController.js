const Controller = require('./Controller');
const PessoaServices = require('../services/PessoaServices');
const MatriculaServices = require('../services/MatriculaServices');

const matriculaServices = new MatriculaServices();

class MatriculaController extends Controller {
    constructor() {
        super(matriculaServices);
    }  

    async pegaMatriculasPorEstudante(req, res) {
        const { estudanteId } = req.params;
        try {
            const listaMatriculasPorEstudante = await matriculaServices.pegaEContaRegistros({ estudante_id: Number(estudanteId), status: 'confirmada' });
            res.status(200).json({ listaMatriculasPorEstudante, totalMatriculas });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao pegar matrículas do estudante' });
        }
    }
}

module.exports = new MatriculaController();