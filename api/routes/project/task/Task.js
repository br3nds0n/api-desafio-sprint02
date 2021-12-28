const TabelaTask = require('../../../../models/TabelaTask')

class Task {
  constructor ({ id, title, taskRelevance, completed, projectId, createdAt, updatedAt  }) {
    this.id = id
    this.title = title
    this.taskRelevance = taskRelevance
    this.completed = completed
    this.projectId = projectId
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  validar () {
    if (typeof this.title !== 'string' || this.title.length === 0){
      throw new Error('O campo title está inválido!')
    }

    if (typeof  this.taskRelevance !== 'number' || this.completed === 0) {
      throw new Error('O campo taskRelevance está inválido!')
    }

    if (typeof this.completed !== 'boolean'){
      throw new Error('O campo completed está inválido!')
    }
  }

  async criar () {
    this.validar()
    const resultado = await TabelaTask.inserir({
      title: this.title,
      taskRelevance: this.taskRelevance,
      completed: this.completed,
      projectId: this.projectId
    })

    this.id = resultado.id
    this.createdAt = resultado.createdAt
    this.updatedAt = resultado.updatedAt

  }

  apagar () {
    return TabelaTask.remover(this.id, this.projectId)
  }

  async carregar () {
    const task = await TabelaTask.pegarPorId(this.id, this.projectId)
    this.title = task.title
    this.taskRelevance = task.taskRelevance
    this.completed = task.completed
    this.projectId = task.projectId
    this.createdAt = task.createdAt
    this.updatedAt = task.updatedAt
  }
}

module.exports = Task