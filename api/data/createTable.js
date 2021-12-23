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