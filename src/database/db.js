const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/challengemuvinai';

mongoose.connect(url)

const db = mongoose.connection
db.on('open', () => {
  console.log("Conectado a la bd")
})
db.on('error', () => {
  console.log("error al conectarse a la bd")
})

module.exports = db;
