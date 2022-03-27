module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      id_usuario: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: DataType.STRING,
      email: DataType.STRING,

      senha: DataType.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Usuario;
};
