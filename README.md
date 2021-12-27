
<p align="center">
<img height="290" width="700" src="https://user-images.githubusercontent.com/82064724/147239690-c00a27b5-f63f-474c-abaa-00b70bf745c5.jpg">
</p>

<img align="right" src="https://img.shields.io/static/v1?label=project&message=Compass&color=FFA429&style=for-the-badge&logo=ghost"/>

# 🚀 Nodejs compass challenge

Bem-vindo(a). Este é o desafio da 2° sprint!

Meu nome é Brendson, venho através desse repositório entregar o desafio do programa de bolsas.
É muito gratificante ter concluído o desafio, com todo conteúdo aprendido nessa 2° Sprint, que foi colocado
em prática no desenvolvimento dessa api.

Agora vamos nessa! <code>#dreambigger🚀🧡</code>



<br>

> <b>Status code:</b> 🚧 Em construção...  🚧
 
 ---
 
 ## 🧠 Contexto
 
 No primeiro desafio do programa de bolsas, será a criação de uma API cuja funcionalidade assemelha-se ao Trello ou a um
 Bloco de notas.
 Neste projeto estou incluído os métodos http e relacionamento de tabelas , onde implemento os fluxos de:
 
 - Interação de métodos http. (Criar, buscar, editar e remover);
 - Interação com status http. (sucesso, erro cliente, erro servidor);
 - Relacionamento de tabelas;


 
### ⚔️ Desafio

| Atributo        | Tipo     |
| --------------- | -------- |
| Identificador   | `id`     |
| Titulo          | `texto`  |
| Descrição       | `texto`  |
| Data de criação | `data`   |
| Tarefas         | `lista`  |

**Operações necessárias:**

- [x] Criar - POST
- [x] Listar - GET
  - [x] Busca por id
- [x] Editar - PUT
- [x] Remover - DELETE

### 📓 Submissão

| Atributo                 | Tipo                   |
| ------------------------ | ---------------------- |
| Identificador            | `id`                   |
| Identificador das tarefas| `idTask`               |
| Relevancia da tarefa     | `texto`                |
| Data de criação          | `data`                 |
| Status                   | `Pending, Error, Done` |

**Operações necessárias**

- [x] Enviar
- [x] Listar
  - [ ] Filtro: task 
- [x] Status http

---

## 💻 Baixar e executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Postman](https://www.postman.com/downloads/) e o banco de 
dados [MySQL](https://www.mysql.com/downloads/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/br3nds0n/api-desafio-sprint02.git>

# Acesse a pasta do projeto no terminal
$ cd api-desafio-sprint

# Vá para a pasta api
$ cd api

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm start

# O projeto inciará na porta:3000 - acesse <http://localhost:3333/api/project> no postman
```

### 🗃 Conectando com o localHost (database)
Na pasta do projeto, procure pela pasta config.
dentro dessa pasta terá um arquivo `default.json`, nesse arquivo você passará a conexão do banco de dados. Exemplo:
```json 
{
  "mysql": {
    "banco-de-dados": "desafio",
    "usuario": "root", 
    "senha": "1234",
    "host": "127.0.0.1"
  },
  "api": {
    "porta": 3000
  }
}
```
OBS: Acima é apenas uma demonstração, você passará as informações da sua máquina.

### 📂 Criando as Tabelas (database)

```bash
# Acesse a pasta do projeto no terminal
$ cd api-desafio-sprint

# Execute o comando
$ node api/data/createTable.js

# As tabelas serão criadas no seu Banco de dados - acesse seu Workbench e confira
```

<br>

## 🛠 Tecnologias

As seguintes ferramentas/tecnologias foram usadas na construção e testagem do projeto. Clicando no icone da tecnologia, você será redirecionado para o site oficial para instalação: <br>



| logo               | Framework                  | Version      |
| :----------------- | :------------------------- | :----------: |
| <a href="https://nodejs.org/pt-br/download/" target="_blank"><img align="center" alt="nodeJs" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg"></a>                   | NodeJs                     |  `16.x`      |
| <a href="https://www.mysql.com/downloads/" target="_blank"><img align="center" alt="mysql" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original.svg"></a>            | MySQL                      |  `8.0`       | 
| <a href="https://www.postman.com/downloads/" target="_blank"><img align="center" alt="postman" height="30" width="30" src="https://user-images.githubusercontent.com/82064724/147416090-89b4e7a3-2b78-417a-a154-f47940d23e38.png">            | Postman                    |  `9.6`       | 
| <a href="https://code.visualstudio.com/download" target="_blank"><img align="center" alt="VsCode" height="25" width="35" src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original.svg"></a> | VsCode | `1.63.2` |


---
## **:star2: Agradecimentos**

<div align=left style="width:100%">
<table>
  <tr align=center>
    <th><strong>CompassUol</strong></th>
    <th><strong>Felipe da Silva</strong></th>
    <th><strong>Thais Nicodemus</strong></th>
   <th><strong>Diego Bueno <br>bigboy's friend</strong></th>
    <th><strong>Bruna Santos</strong></th>
    <th><strong>Giovanni Hoffmann</strong></th>
  </tr>
  <td>
      <a href="*">
        <img width="120" height="120" src="https://user-images.githubusercontent.com/82064724/147250813-a8ffeeaa-d1e0-464d-b157-5b1832419962.jpg">
      </a>
    </td>
    <td>
      <a href="*">
        <img width="120" height="120" src="https://user-images.githubusercontent.com/82064724/147247938-ad746eb0-6acb-493d-a5a1-f18ced1f79ea.jpeg">
      </a>
    </td>
    <td>
      <a href="*">
        <img width="120" height="120" src="https://user-images.githubusercontent.com/82064724/147248193-cb95b8e0-9b86-4788-9c99-1f7d81a67c5c.jpeg">
      </a>
    </td>
    <td>
      <a href="*">
        <img width="140" height="120" src="https://user-images.githubusercontent.com/82064724/147248671-1433631f-d30e-43ef-8a90-11f1eb0dad6e.jpeg">
      </a>
    </td>
    <td>
      <a href="*">
        <img width="120" height="120" src="https://user-images.githubusercontent.com/82064724/147249013-2461e045-8883-45b3-8aaa-54f25b0039a2.jpeg">
      </a>
    </td>
      <td>
      <a href="*">
        <img width="140" height="120" src="https://user-images.githubusercontent.com/82064724/147251080-3157eb74-fce3-4467-982b-8f04a33a62df.jpeg">
      </a>
    </td>
  </tr>
</table>

</div>

<br>

## ✏ Autor

Obrigado a todos citados a cima por me ajudarem nessa nova etapa de desafios, sou 
grato a cada um de vocês por todo apoio e atenção dada, ao decorrer da sprint.
É muito gratificante participar desse programa, e ter o apoido dessa equipe.<code>#dreambigger🚀🧡</code> <br>


<div align=left style="width:100%">
 
- <table>
 <p> Desenvolvido por:</p>
  <tr align=center>
    <th><strong> Brendson Victor 👨‍🚀</strong></th>
  </tr>
   <td>
      <a href="https://github.com/br3nds0n">
        <img style="border-radius: 50%" width="168" height="140" src="https://user-images.githubusercontent.com/82064724/147268606-4fd3c629-8cb1-422b-a025-cf20b44930c7.jpeg" > <p align="left">
   <a href="https://instagram.com/breendson/" alt="Instagram">
  <img src="https://img.shields.io/badge/-Instagram-DF0174?style=flat-square&labelColor=DF0174&logo=instagram&logoColor=white&link=[instagram]"/></a>
   <a href="https://www.linkedin.com/in/brendson/" alt="Linkedin">
  <img src="https://img.shields.io/badge/-Linkedin-0e76a8?style=flat-square&logo=Linkedin&logoColor=white&link=[linkedin]" /></a>                                     
</p>
      </a>
    </td>
  </tr>
</table>
</div>

---

## **:page_with_curl: LICENÇA**

Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório.
