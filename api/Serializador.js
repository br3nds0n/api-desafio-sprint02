// aqui recebo e converto o conteúdo para JSON

const ValorNaoSuportado = require('./error/ValorNaoSuportado')

class Serializador {
  json (dados) {
   return JSON.stringify(dados)
  }

  serializar (dados) {
    if(this.contentType === 'application/json') {
      return this.json(dados)
    }

    throw new ValorNaoSuportado(this.contentType)
  }
}

module.exports = {
  Serializador: Serializador,
  formatosAceitos: ['application/json']
}