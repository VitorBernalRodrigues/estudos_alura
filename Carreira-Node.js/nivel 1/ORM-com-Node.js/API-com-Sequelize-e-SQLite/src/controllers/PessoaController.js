class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try {
            const pessoas = [
                { id: 1, nome: 'João', idade: 30 },
                { id: 2, nome: 'Maria', idade: 25 },
            ];
            res.status(200).json(pessoas);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao pegar pessoas' });
        }
    }

    static async createPessoa(req, res) {
        try {
            const { nome, idade } = req.body;
            // Lógica para criar uma nova pessoa (exemplo usando um modelo fictício)
            const novaPessoa = { id: Date.now(), nome, idade };
            // Aqui você pode salvar a nova pessoa em um banco de dados
            res.status(201).json(novaPessoa);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar pessoa' });
        }
    }   
}