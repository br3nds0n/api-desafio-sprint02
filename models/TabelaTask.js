const Modelo = require('./ModeloTask')

module.exports = {
  listar (idProject) {
    return Modelo.findAll({
      where: {
        projectId: idProject
      }
    })
  },
  inserir (dados) {
    return Modelo.create(dados)
  }
}