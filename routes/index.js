module.exports = (app) =>{
  // ------------------------ Users --------------------------//
/* Métodos get -- Pegar*/
// Retorna toda a tabela usuarios do schema biblioteca banco de dados Mysql

app.get("/users", app.api.usuario.getUsers);

// Retorna apenas um usuário filtrando por o id
app.get("/users/:id", app.api.usuario.getUsersById);

/* Métodos Post -- enviar*/
// Adiciona apenas um usuário na tabela usuario do schema Biblioteca
app.post("/users", app.api.usuario.postUser);

app.post("/users/bulk", app.api.usuario.postBulkUsers);

/* Método Put == atualizar */

// Atualiza usuários por id da tabela usuarios do schema biblioteca
app.put("/users/:id", app.api.usuario.updateUsers);

/*Método delete --- excluir */

app.delete("/users/:id", app.api.usuario.deleteUser);
 
// ------------------------ Livros --------------------------//
/* Métodos get*/
// Retorna toda a tabela livros do schema biblioteca banco de dados Mysql
app.get("/books", app.api.livro.getBooks);

// Retorna um livro filtrando por o ano
app.get("/books/release/:year", app.api.livro.getYearBook);

//Retorna o livro filtrando por a quantidade de paginas
app.get("/books/pages/:qtd", app.api.livro.getPageBook);
/* Métodos Post*/
// Adiciona um livro na tabela usuario do schema Biblioteca
app.post("/books", app.api.livro.createBook);
// Adiciona x Livros na tabela usuario do schema Biblioteca

app.post("/books/bulk", app.api.livro.createBulkBooks);

/* Método Put == atualizar */
// Atualiza livros por id da tabela livros do schema biblioteca
app.put("/books/:id", app.api.livro.updateBookById)

  /*Método delete --- excluir */
  app.delete("/books/:id",)
}