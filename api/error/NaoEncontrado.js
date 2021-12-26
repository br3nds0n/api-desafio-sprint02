// tratar os erros 

class NaoEncontrado extends Error {
  constructor () {
    super('Projeto não encontrado!')
    this.name = 'NaoEcontrado'
    this.idErro = 0
  }
}

module.exports = NaoEncontrado