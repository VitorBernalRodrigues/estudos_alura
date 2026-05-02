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
}

module.exports = Controller;