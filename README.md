# Basic nodejs backend architecture

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


