import express from 'express';
import livros from './livrosRoutes.js';
import autores from '../models/Autor.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).json({ message: 'Bem-vindo à API de livros!' });
    });
    app.use(
        express.json(),
        livros, autores
    );
}

export default routes;