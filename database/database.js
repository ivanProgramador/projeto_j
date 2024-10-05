const Sequelize = require("sequelize");

const connection = new Sequelize("projeto_j","root",'1234',{
    dialect: "mysql",
    host:"localhost"
});

module.exports = connection;