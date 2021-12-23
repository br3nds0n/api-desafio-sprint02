const Modelo = require("../../../models/ModeloTabelaProject")

module.exports = {
  listar() {
    return Modelo.findAll()
  },
  inserir(project) {
    return Modelo.create(project)
  }
}