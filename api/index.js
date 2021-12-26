// Raiz do projeto

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')
const roteador = require('./routes/project')
const NaoEncontrado = require('./error/NaoEncontrado')
const CampoInvalido = require('./error/CampoInvalido')
const DadosNaoFornecidos = require('./error/DadosNaoFornecidos')

app.use(bodyParser.json())

app.use('/api/project', roteador)

app.use((erro, req, res, proximo) => {
  let status = 500

  if (erro instanceof NaoEncontrado) {
    status = 404
  }

  if (erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos) {
    status = 400
  }
 
  res.status(status)
  res.send(
    JSON.stringify({
      mensagem: erro.message,
      id: erro.idErro
    })
  )
})

app.listen(config.get('api.porta'), () => console.log('api funcionando!'))