# CRUD NodeJS
> CRUD básico de usuário utilizando NodeJS, express e mongoDB.

[![NPM](https://img.shields.io/badge/node-v10.16.3-sucess)](https://nodejs.org/en/download/)

## Passo a passo

### Banco de dados

Antes de iniciar o servidor, é preciso configurar o banco de dados.

Para isso entre em [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), e crie uma conta.

1. Na aba Clusters clique em "Build a Cluster".

2. Na tela seguinte altere apenas a opção "Cluster Name" para um nome de sua preferência e clique em "Create Cluster".

Pega um café e espera um tempinho aí irmão...

--------------------------------------------------------------------------------

Com o servidor criado, agora é hora de criar um usuário para acessar seu banco, para isso:

1. Clique em "Database Access".

2. Clique em "Add new user".

3. Selecione "Read and write to any database", adicione um usuário e senha (se você for uma pessoa esquecida como eu, anote isso em algum lugar, sério você vai precisar depois) e por fim clique em "Add User".

--------------------------------------------------------------------------------

Usuário criado, agora vamos liberar acesso para seu ip (talvez para todos) acessarem esse servidor.

1. Vá para "Network Access".

2. Clique em "ADD IP ADDRESS".

3. Caso vá utilizar este banco para cadastrar dados ultra secretos e não quer que ninguém mais tenha acesso a ele, clique em "ADD CURRENT IP ADDRESS" para adicionar apenas o seu ip atual.

4. Caso esteja apenas testando seu projeto, clique em "ALLOW ACCESS FROM ANYWHERE" e não tenha mais dores de cabeça.

5. Clique em "Confirm".

Agora dá tempo de pegar um copo d'água também...

--------------------------------------------------------------------------------

Por fim apenas adicione suas credênciais à api, para isso:

1. Volte para "Clusters" e clique em "CONNECT"

2. Clique em "Connect Your Application"

3. Selecione "Node.js" e "3.0 or later" e por ultimo clique em "Copy"

4. Na api, vá até ./src/index.js e no local onde está "sua url aqui" cole sua url:

5. Substitua os campos < username > e < password > pela suas credenciais (aquelas que falei para salvar em algum lugar, chegou a hora de usar).

6. Na mesma url onde está escrito ".mongodb.net/test" substitua a palavra test pelo nome que deseja para seu banco de dados.

E está pronto o sorvetinho.