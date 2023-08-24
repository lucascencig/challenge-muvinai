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
    profilePhotoUrl: String,
    isPay: String,
    active_noActive: String,
    type_of_pay: String,
    credit_card: String,
    card_number: Number
  },
  { collection: 'users' }, // Make sure 'clients' is a string in quotes

);

module.exports = mongoose.model('ClientModel', userSchema);
