const express = require('express')
const app = express()
const PORT = 3001
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('./routes/products'))
app.listen(PORT, () => console.log('escuchando en el puerto', PORT))
