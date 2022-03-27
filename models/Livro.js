module.exports = (sequelize, DataType) => {
    const Livro = sequelize.define('Livro', {
        id_livro: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: DataType.STRING,
        ano: DataType.STRING,
        editora: DataType.STRING,
        qtd_paginas: DataType.STRING
    }, {
        timestamps: false
    })
  
    return Livro  
  }