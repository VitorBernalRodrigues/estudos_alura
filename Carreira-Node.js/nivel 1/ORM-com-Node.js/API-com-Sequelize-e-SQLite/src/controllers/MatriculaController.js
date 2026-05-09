const Sequelize = require('sequelize');
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
            const listaMatriculasPorEstudante = await matriculaServices.pegaEContaRegistros({ where: {
                estudante_id: Number(estudanteId),
                status: 'confirmada'
            },
            limit: 2,
            order: [['id', 'ASC']] });
            
            res.status(200).json({ listaMatriculasPorEstudante, totalMatriculas });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao pegar matrículas do estudante' });
        }
    }

    async pegaCursosLotados(req, res) {
        const lotacaoCurso = 2;
        try {
            const cursosLotados = await matriculaServices.pegaEContaRegistros({ 
                where: {
                    status: 'matriculado'
                },
                attributes: ['curso_id'],
                group: ['curso_id'],
                having: Sequelize.literal(`COUNT(curso_id) >= ${lotacaoCurso}`)
            });

        } catch (error) {
            res.status(500).json({ error: 'Erro ao pegar cursos lotados' });
        }
    }
}

module.exports = new MatriculaController();