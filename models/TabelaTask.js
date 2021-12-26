const Modelo = require('./ModeloTask')

module.exports = {
  listar (idProject) {
    return Modelo.findAll({
      where: {
        projectId: idProject
      }
    })
  }
}