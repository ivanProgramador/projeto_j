const { Sequelize, DataTypes, Model } = require('sequelize');
const connection = require("../database/database");


const Tipos = connection.define('tipo',{

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
     
})

Tipos.sync({force:false});
module.exports = Tipos