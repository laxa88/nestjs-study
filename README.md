# Memo

Things learned along the way

## Setting up project for the first time

```bash
npm i -g @nestjs/cli
nest new project-name
```

## Quick start

```bash
# Install deps
yarn

# Start hot-reload dev server
yarn start:dev
```

## Quick create controller

```bash
nest g resource controller-name
```

## Initial Prisma database setup

Installation (for first time reference only):

```bash
npm install --save @prisma/client
npm install --save-dev prisma
```

Development quick-start:

```bash
# Start the DB docker container
docker-compose up

# Apply Prisma migrations
yarn prisma migrate dev
```

To create a new Prisma database migration:

```bash
yarn prisma migrate dev --name your_migration_name
```
