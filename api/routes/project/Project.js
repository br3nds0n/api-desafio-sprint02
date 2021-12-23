// representar a tabela 

const TabelaProject = require('./TabelaProject')

class Project {
  constructor ({ id, title, description, task, createdAt, updatedAt}) {
      this.id = id
      this.title = title
      this.description = description
      this.task = task
      this.createdAt = createdAt
      this.updatedAt = updatedAt
  }

  async criar () {
      const resultado = await TabelaProject.inserir({
        title: this.title,
        description: this.description,
        task: this.task
      })

      this.id = resultado.id
      this.createdAt = resultado.createdAt
      this.updatedAt = resultado.updatedAt
  }
  
  async carregar () {
      const encontrado = await TabelaProject.pegarPorId(this.id)
      this.title = encontrado.title
      this.description = encontrado.description
      this.task = encontrado.task
      this.createdAt = encontrado.createdAt
      this.updatedAt = encontrado.updatedAt
  }
}


module.exports = Project