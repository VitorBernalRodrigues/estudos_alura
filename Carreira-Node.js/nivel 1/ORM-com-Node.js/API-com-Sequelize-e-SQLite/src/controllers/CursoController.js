const Controller = require('./Controller');
const PessoaServices = require('../services/PessoaServices');

const cursoServices = new CursoServices();

class CursoController extends Controller {
    constructor() {
        super(cursoServices);
    }       
}

module.exports = new CursoController();