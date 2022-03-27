const { Usuario } = require("../models");
const { Op } = require("sequelize");
module.exports = (app) =>{

// ------------------------ Users --------------------------//
/* Métodos get -- Pegar*/

// Retorna toda a tabela usuarios do schema biblioteca banco de dados Mysql
const getUsers = async (req, res) => {
    try {
      const usuarios = await Usuario.findAll();
      res.status(200).json(usuarios);
    } catch (err) {
      res.status(500).json({ erro: true, mag: "Usuarios não encontrados" });
    }
  };
// Retorna apenas um usuário filtrando por o id
const getUsersById = async (req, res) => {
    const userId = req.params.id;
    try {
      const usuarios = await Usuario.findOne({
        where: { id_usuario: userId },
      });
      if (!usuarios) throw new Error();
      res.status(200).json(usuarios);
    } catch (err) {
      res.status(400).json({ error: true, msg: "Usuário não encontrado!!" });
    }
  }
/* Métodos Post -- enviar*/
// Adiciona apenas um usuário na tabela usuario do schema Biblioteca
const postUser = async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
      if (!nome || !email || !senha)
        throw new Error("Preencha os dados corretamente");
      await Usuario.create({ nome, email, senha });
      res.status(201).json({ msg: "Usuário criado com sucesso!" });
    } catch (err) {
      res.status(400).json({ error: true, ...err });
    }
  }
// Adiciona X usuários na tabela usuario do schema Biblioteca
const postBulkUsers = async (req, res) => {
    const usuarios = req.body;
    try {
      await Usuario.bulkCreate(usuarios);
      res.status(201).json({ msg: "Usuários cadastrados com sucesso!" });
    } catch (err) {
      res.status(400).json({error: true,msg: "Não foi possível cadastrar os usuários!",...err, });
    }
  }
/* Método Put == atualizar */
// Atualiza usuários por id da tabela usuarios do schema biblioteca
const updateUsers = async (req, res) => {
    const userId = req.params.id;
    const { nome, email, senha } = req.body;
    try {await Usuario.update
      ({ nome, email, senha },{ where: { id_usuario: userId } } );
      res.status(200).json({ msg: "Usuário atualizado com sucesso!" });
    } catch (err) {
      res.status(400).json({ error: true, ...err, msg: "Usuário não pode ser atualizado" });} };

/*Método delete --- excluir */
const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
      await Usuario.destroy({ where: { id_usuario: userId } });
      res.status(204).json({ msg: "Usuário deletdo com sucesso!" });
    } catch (err) {res.status(400).json({ error: true, msg: "Usuário não encontrado"});
    }
  }

  return {getUsers, getUsersById, postUser,postBulkUsers,updateUsers,deleteUser}
}