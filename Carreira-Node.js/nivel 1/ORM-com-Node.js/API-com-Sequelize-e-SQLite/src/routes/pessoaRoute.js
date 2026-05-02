const { Router } = require('express');
const PessoaController = require('../controllers/pessoaController');

const router = Router();

router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.post('/pessoas', PessoaController.createPessoa);

module.exports = router;