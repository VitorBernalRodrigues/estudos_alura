const { Router } = require('express');
const CursoController = require('../controllers/CursoController');

const router = Router();

const cursoController = new CursoController();

router.get('/cursos', (req, res) => cursoController.pegaCursos(req, res));
router.get('/cursos/:id', (req, res) => cursoController.pegaUmPorId(req, res));
router.post('/cursos', (req, res) => cursoController.criaNovo(req, res));
router.put('/cursos/:id', (req, res) => cursoController.atualizaRegistro(req, res));
router.delete('/cursos/:id', (req, res) => cursoController.excluiRegistro(req, res));

module.exports = router;