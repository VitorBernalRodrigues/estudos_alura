const database = require('../models');

class Services {
    constructor(nomeDoModelo) {
        this.model = nomeDoModelo;
    }  

    async pegaTodosOsRegistros() {
        return database[this.model].findAll();
    }
}

module.exports = Services;