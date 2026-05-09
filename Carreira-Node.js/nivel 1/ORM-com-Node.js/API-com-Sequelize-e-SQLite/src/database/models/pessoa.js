'use strict';
const isCpfValido = require('../utils/validaCpfHelper');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {

    static associate(models) {
      Pessoa.hasMany(models.Curso, { foreignKey: 'docente_id' });
      Pessoa.hasMany(models.Matricula, { 
        foreignKey: 'estudante_id', 
        scope:{status: 'matriculado'}, as: 'aulasMatriculadas' 
      });
      Pessoa.hasMany(models.Matricula, { 
        foreignKey: 'estudante_id', 
        as: 'todasAsMatriculadas' 
      });
    }
  }
  Pessoa.init({
    nome: {
      type: DataTypes.STRING,
      validate: { 
        len: {
          args: [3, 30],
          msg: 'O campo nome deve conter entre 3 e 30 caracteres.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'O campo email deve conter um endereço de email válido.'
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        cpfEhValido: (cpf) => {
          if(!isCpfValido(cpf)) throw new Error('O campo CPF deve conter um número válido.');
        }
      }
    }
  }),
  {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas',
    paranoid: true,
    defaultScope: {
      where: {
        ativo: true
      }
    },
  }
}
    