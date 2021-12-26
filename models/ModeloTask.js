// representar a tabela 

const Sequelize = require('sequelize')
const instancia = require('../api/data')

const colunas = {
  title:{
      type: Sequelize.STRING,
      allowNull: false
  },
  taskRelevance: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  tarefas: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: require('./ModeloTabelaProject'),
      key: 'id'
    }
  }
}

const opcoes = {
  freezeTablename: true,
  tableName: 'tasks',
  timestamps: true
}

module.exports = instancia.define('tarefas', colunas, opcoes)