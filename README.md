# Trybesmith

# 👨‍💻 O que foi desenvolvido
Este projeto trata-se de uma API, utilizando Typescript.

Foi desenvolvido todas as camadas da aplicação (Models, Service e Controllers), por meio dessa aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou CRUD - Create, Read, Update e Delete).

Foram criados alguns endpoints que irão ler e escrever em um banco de dados, utilizando o MySQL.

## Técnologias usadas

Back-end:
> Desenvolvido usando: NodeJS, Express, MYSQL, TypeScript

Auxiliares:
> Desenvolvido usando: Zod, JWT(jsonwebtoken), dotenv, nodemon


## Instalando Dependências

> Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `trybesmith` e outro chamado `trybesmith_db`.
  - A partir daqui você pode rodar o container `trybesmith` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybesmith bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`

  ⚠ Atenção ⚠ **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container.

## Executando aplicação

* Para rodar o back-end:

  ```
  cd api/ && npm start
  ```
* Para rodar o front-end:

  ```
    cd src/ && npm start
  ```

## Executando Testes

* Para rodar todos os testes:

  ```
    npm test
  ```
