# NodeJS Clean Architecture Backend

This architecture is used in most of my projects made in NodeJS, it separates the network, controller and store logic to have versatility when integrating different database engines and services such as emails, authentication, special middlewares, etc...








## Usage

Mongo - init database with docker

```sh

sudo systemctl start docker
docker compose up -d

# Create database
docker exec -it [CONTAINER] bash
mongosh --username [USERNAME]
use db;
db.[collection].insertOne({})

```


Starting App

```sh

pnpm run dev

```

Use Postman to test endpoints


