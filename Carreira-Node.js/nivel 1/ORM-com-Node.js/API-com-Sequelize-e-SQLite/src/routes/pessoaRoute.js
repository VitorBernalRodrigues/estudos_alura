const { Router } = require('express');
const PessoaController = require('../controllers/pessoaController');

const router = Router();

const pessoaController = new PessoaController();

router.get('/pessoas', (req, res) => pessoaController.pegaTodasAsPessoas(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.pegaUmPorId(req, res));
router.post('/pessoas', (req, res) => pessoaController.criaNovo(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualizaRegistro(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.excluiRegistro(req, res));

module.exports = router;