const { Livro } = require("../models");
const { Op } = require("sequelize");
module.exports = (app) =>{
    /* Métodos get*/
    // Retorna toda a tabela livros do schema biblioteca banco de dados Mysql
    const getBooks  = async (req, res) => {
        try {
        const books = await Livro.findAll();
        res.status(200).json(books);
        } catch (err) {
        res.status(500).json({ erro: true, mag: "Livros não encontrados" });
        }
    }
    const getYearBook = async (req, res) => {
        const year = req.params.year;
        try {
        const livros = await Livro.findAll({
            where: { ano: { [Op.eq]: year } },
        });
        res.status(200).json(livros);
        } catch (err) {
        res.status(500).json({ error: true, ...err });
        }
    }
    const getPageBook = async (req, res) => {
        const qtd = req.params.qtd;
        try {
        const livros = await Livro.findAll({
            where: { qtd_paginas: { [Op.eq]: parseFloat(qtd) } },
        });
        res.status(200).json(livros);
        } catch (err) {
        res.status(500).json({ error: true, ...err });
        }
    }

    const createBook = async (req, res) => {
        const { titulo, ano, editora, qtd_paginas } = req.body;
        try {
        if (!titulo || !ano || !editora || !editora || !qtd_paginas)
            throw new Error("Preencha os dados corretamente");
        await Livro.create({ titulo, ano, editora, qtd_paginas });
        res.status(201).json({ msg: "Livro criado com sucesso!" });
        } catch (err) {
        res.status(400).json({ error: true, ...err });
        }
    }

    const createBulkBooks = async (req, res) => {
        const books = req.body;
        try {
        await Livro.bulkCreate(books);
        res.status(201).json({ msg: "Livros cadastrados com sucesso!" });
        } catch (err) {
        res.status(400).json({error: true,msg: "Não foi possível cadastrar os livros!",...err, });
        }
    }
    const updateBookById = async (req, res) => {
        const livroId = req.params.id;
        const { titulo, ano, editora, qtd_paginas } = req.body;
        try {
        await Livro.update({ titulo, ano, editora, qtd_paginas },{ where: { id_livro: livroId } })
        res.status(200).json({ msg: "Livro atualizado com sucesso" });
        } catch (err) {
        res.status(400) .json({ error: true, ...err, msg: "Livro não pode ser atualizado" });
        }
    }
    const deleteBook =  async (req, res) => {
        const livrosId = req.params.id;
        try {
        await Livro.destroy({ where: { id_livro: livrosId } });
        res.status(204).send();
        } catch (err) {  res.status(400).json({ error: true, msg: "Usuário não encontrado!" });
        }}

    return {getBooks , getYearBook, getPageBook, createBook, createBulkBooks, updateBookById,deleteBook}
}