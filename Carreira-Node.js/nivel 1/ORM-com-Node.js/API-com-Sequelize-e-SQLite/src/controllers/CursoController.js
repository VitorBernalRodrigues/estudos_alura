const Controller = require('./Controller');
const PessoaServices = require('../services/PessoaServices');

const cursoServices = new CursoServices();

class CursoController extends Controller {
    constructor() {
        super(cursoServices);
    }

    async pegaCursos(req, res) {
        const { data_inicial, data_final } = req.query;

        const where = {};

        data_inicial || data_final ? where.data_inicio = {} : null;
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
        data_final ? where.data_inicio[Op.lte] = data_final : null;
    }
}

module.exports = new CursoController();