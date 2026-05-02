const database = require('../models');

class Services {
    constructor(nomeDoModelo) {
        this.model = nomeDoModelo;
    }  

    async pegaTodosOsRegistros() {
        return database[this.model].findAll();
    }

    async pegaUmRegistroPorId(id) {
        return database[this.model].findByPk((id));
    }

    async criaRegistro(dadosDoRegistro) {
        return database[this.model].create(dadosDoRegistro);
    }

    async atualizaRegistro(dadosAtualizados, id) {
       const ListaDeRegistrosAtualizados = await database[this.model].update(dadosAtualizados, { where: { id: (id) } });
        if (ListaDeRegistrosAtualizados[0] === 0) {
            return false
        }
       return true
    }

    async excluiRegistro(id) {
        return database[this.model].destroy({ where: { id: (id) } });
    }

}

module.exports = Services;