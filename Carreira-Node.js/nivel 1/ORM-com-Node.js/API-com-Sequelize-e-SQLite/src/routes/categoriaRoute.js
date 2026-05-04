const { Router } = require('express');
const CategoriaController = require('../controllers/CategController');

const router = Router();

const categoriaController = new CategoriaController();

router.get('/categorias', (req, res) => categoriaController.pegaTodasAsCategorias(req, res));
router.get('/categorias/:id', (req, res) => categoriaController.pegaUmaPorId(req, res));
router.post('/categorias', (req, res) => categoriaController.criaNova(req, res));
router.put('/categorias/:id', (req, res) => categoriaController.atualizaRegistro(req, res));
router.delete('/categorias/:id', (req, res) => categoriaController.excluiRegistro(req, res));

module.exports = router;