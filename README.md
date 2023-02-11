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
> Após ter instalado as dependências acima
  - Rode `docker exec -it trybesmith bash`
  - Dentro da `bash` o rode o seguinte comando para ligar o server `npm run dev`
> Agora é so testar com programas ou browsers os HTTP request que são:
  - método `POST` endereço `/users` que cria um novo usuario recebendo:
    EX: 
    ```json
      {
	      "username": 'Blue Pen',
	      "vocation": "Bardo",
	      "level": 999,
	      "password": "12345678"
       }
    ```
  - método `POST` endereço `/login` a qual faz um login recebe um json:
    EX: 
    ```json
      {
	      "username": "reigal",
	      "password": "1dragaonoceu"
      }
    ``` 
  - método `POST` endereço `/products` a qual recebe um json com o produto para criar:
    EX: 
    ```json
      {
	      "name": "Sheild",
	      "amount": "15 peças de ouro"
      }
    ```
    ⚠ Atenção ⚠: para o método `POST` endereço `/orders` funcionar, precisa do token de Autorização gerado ao fazer login ou criar um usuário
  - método `POST` endereço `/orders` a qual recebe um json com a order para criar:
    EX: 
    ```json
      {
	      	"productsIds": [1,2]
      }
    ```
  - método `GET` endereço `/orders` lista todas as orders do banco.
  - método `GET` endereço `/products` lista todas os produtos do banco.

## Executando Testes

* Para rodar todos os testes:

  ```
    npm run test
  ```
