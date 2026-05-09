const database = require('../database/models');

class Services {
    constructor(nomeDoModelo) {
        this.model = nomeDoModelo;
    }  

    async pegaTodosOsRegistros(where = {}) {
        return database[this.model].findAll({ where: { ...where } });
    }

    async pegaTodosOsRegistrosPorEscopo(escopo) {
        return database[this.model].scope(escopo).findAll();
    }

    async pegaUmRegistroPorId(id) {
        return database[this.model].findByPk((id));
    }
    
    async pegaUmRegistro(where) {
        return database[this.model].findOne({ where: { ... where } });
    }

    async criaRegistro(dadosDoRegistro) {
        return database[this.model].create(dadosDoRegistro);
    }

    async atualizaRegistro(dadosAtualizados, where) {
       const ListaDeRegistrosAtualizados = await database[this.model].update(dadosAtualizados, { where: { ...where } });
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