const Controller = require('./Controller');
const PessoaServices = require('../services/PessoaServices');

const categoriaServices = new CategoriaServices();

class CategoriaController extends Controller {
    constructor() {
        super(categoriaServices);
    }       
}

module.exports = new CategoriaController();