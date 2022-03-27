const express = require("express");
const app = express();
const {Usuario, Livro} = require('./models')
const consign = require('consign')
// Habilita o json
app.use(express.json());

//Consign 
consign()
.include('./api')
.then('routes')
.into(app)

// ------------------------ runner --------------------------//
app.listen(3000, () => {
  console.log("Runner Server :D");
});
