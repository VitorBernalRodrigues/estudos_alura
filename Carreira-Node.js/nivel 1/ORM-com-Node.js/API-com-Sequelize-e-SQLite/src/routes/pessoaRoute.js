const { Router } = require('express');
const PessoaController = require('../controllers/pessoaController');
const MatriculaController = require('../controllers/matriculaController'); 

const router = Router();
const matriculaController = new MatriculaController()


const pessoaController = new PessoaController();

router.get('/pessoas', (req, res) => pessoaController.pegaTodasAsPessoas(req, res));
router.get('/pessoas/todos', (req, res) => pessoaController.pegaTodasAsPessoas(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.pegaUmPorId(req, res));
router.post('/pessoas', (req, res) => pessoaController.criaNovo(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualizaRegistro(req, res));
router.put('/pessoas/:estudante_id/cancelar', (req, res) => pessoaController.cancelaRegistroEstudante(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.excluiRegistro(req, res));
router.get('/pessoas/:estudante_id/matriculas', (req, res) => pessoaController.pegaMatriculaAtiva(req, res));
router.get('/pessoas/:estudante_id/matriculas/todas', (req, res) => pessoaController.pegaTodasAsMatriculas(req, res));
router.get('/pessoas/:estudante_id/matriculas/confirmadas', (req, res) => matriculaController.pegaMatriculaPorEstudante(req, res));
router.get('/pessoas/:estudante_id/matriculas/cursos-lotados', (req, res) => matriculaController.pegaCursosLotados(req, res));
router.get('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.pegaUm(req, res));
router.post('/pessoas/:estudante_id/matriculas', (req, res) => matriculaController.criaNovo(req, res));
router.put('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.atualizaRegistro(req, res));
router.delete('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.excluiRegistro(req, res));

module.exports = router;