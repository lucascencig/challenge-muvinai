const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {

    Nombre: String,
    Apellido: String,
    Plan_activo: String,
    DNI: Number,
    Telefono: Number,
    Alta: String,
    Email: String,
    Nacimiento: String,
    Vigencia_actual: String,
    Fecha_proximo: String,

  },
  { collection: 'users' }, // Make sure 'clients' is a string in quotes

);

module.exports = mongoose.model('ClientModel', userSchema);
