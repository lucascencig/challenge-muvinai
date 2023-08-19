const express = require("express");
const cors = require("cors");


// conexion base de datos
const db = require('./src/database/db.js')

// enrutador
const clientRoutes = require('./src/routes/routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/clients', clientRoutes)


app.listen(8000, () => {
  console.log('server conectado al puerto 8000')
})