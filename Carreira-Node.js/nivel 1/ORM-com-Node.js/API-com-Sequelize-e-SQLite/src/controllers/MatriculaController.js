const Controller = require('./Controller');
const PessoaServices = require('../services/PessoaServices');

const matriculaServices = new MatriculaServices();

class MatriculaController extends Controller {
    constructor() {
        super(matriculaServices);
    }       
}

module.exports = new MatriculaController();