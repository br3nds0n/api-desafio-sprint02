//criando conexão com o banco de dados e as tabelas 

const modelos = [
   require('../../models/ModeloTabelaProject'),
   require('../../models/ModeloTask')
]

async function criarTabelas () {
   for (let i = 0; i < modelos.length; i++) {
      const modelo = modelos[i]
      await modelo.sync()
   }
}

criarTabelas()