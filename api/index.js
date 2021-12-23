const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')
const roteador = require('./routes/project')

app.use(bodyParser.json())

app.use('/api/project', roteador)

app.listen(config.get('api.porta'), () => console.log('api funcionando!'))