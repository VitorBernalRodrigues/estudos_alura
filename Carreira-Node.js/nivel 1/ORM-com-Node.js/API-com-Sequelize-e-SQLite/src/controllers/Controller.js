class Controller {
    constructor(service) {
        this.service = service;
    }

    async pegaTodasAsPessoas(req, res) {
        try {
            const listasDeRegistros = await this.service.pegaTodosOsRegistros();
            res.status(200).json(listasDeRegistros);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao pegar pessoas' });
        }
    }

    async pegaUmPorId(req, res) {
        const { id } = req.params;
        try {
            const registro = await this.service.pegaUmRegistroPorId(Number(id));
            return res.status(200).json(registro);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao pegar pessoa' });
        }
    }

    async criaNovo(req, res) {
        const novoRegistro = req.body;
        try {
            const registroCriado = await this.service.criaRegistro(novoRegistro);
            return res.status(201).json(registroCriado);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar pessoa' });
        }
    }

    async atualizaRegistro(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            const foiAtualizado = await this.service.atualizaRegistro(novasInfos, Number(id));
            if (!foiAtualizado) {
                return res.status(400).json({ error: 'registro não atualizado' });
            }
            return res.status(200).json({ message: 'Registro atualizado com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar pessoa' });
        }  
    }

    async excluiRegistro(req, res) {
        const { id } = req.params;
        try {
            await this.service.excluiRegistro(Number(id));
            return res.status(200).json({ message: 'Registro excluído com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao excluir registro' });
        }
    }
}

module.exports = Controller;