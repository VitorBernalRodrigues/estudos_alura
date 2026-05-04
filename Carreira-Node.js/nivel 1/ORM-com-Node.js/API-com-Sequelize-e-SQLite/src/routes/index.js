const express = require('express');
const pessoaRoute = require('./pessoaRoute');
const cursoRoute = require('./cursosRoute');
const categoriaRoute = require('./categoriaRoute');
const matriculaRoute = require('./matriculaRoute');

module.exports = app => app.use(express.json(), pessoaRoute, cursoRoute, categoriaRoute, matriculaRoute);