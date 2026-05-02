const database = require('../models');

class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try {
            const listasPessoas = await database.Pessoa.findAll();
            res.status(200).json(listasPessoas);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao pegar pessoas' });
        }
    }

    static async createPessoa(req, res) {
        try {
            const { nome, idade } = req.body;
            const novaPessoa = await database.Pessoa.create({ nome, idade });
            res.status(201).json(novaPessoa);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar pessoa' });
        }
    }   
}
        