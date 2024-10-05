const { Sequelize, DataTypes, Model } = require('sequelize');
const connection = require("../database/database");
const Tipo = require("../models/Tipos");


const Peca = connection.define('peca',{

    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      preco:{
        type: DataTypes.FLOAT,
        allowNull: false,
      }
     
})
Peca.belongsTo(Tipo);
Peca.sync({force:false});
module.exports = Peca;