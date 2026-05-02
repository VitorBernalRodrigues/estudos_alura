const { Router } = require('express');
const PessoaController = require('../controllers/pessoaController');

const router = Router();

const pessoaController = new PessoaController();

router.get('/pessoas', (req, res) => pessoaController.pegaTodasAsPessoas(req, res));

module.exports = router;