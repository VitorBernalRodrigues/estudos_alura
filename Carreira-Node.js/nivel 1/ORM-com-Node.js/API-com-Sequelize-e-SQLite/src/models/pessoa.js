'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    
    static associate(models) {
      Pessoa.hasMany(models.Curso, { foreignKey: 'docente_id', scope: { status: 'matriculado' }, as: 'aulasMatriculadas' });
      Pessoa.hasMany(models.Matricula, { foreignKey: 'estudante_id' });
    }
  }
  Pessoa.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas',
  });
  return Pessoa;
};