const express = require('express');
const pessoaRoute = require('./pessoaRoute');

module.exports = app => app.use(express.json(), router);