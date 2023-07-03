## Install dependencies

```bash
pnpm add argon2 drizzle-orm pg pino pino-pretty zennv zod jsonwebtoken fastify-zod fastify-guard fastify
```

## Install dev dependencies

```bash
pnpm add zod-to-json-schema @types/jsonwebtoken typescript tsx drizzle-kit @types/pg -D
```

## Initialize TypeScript

```bash
npx tsc --init
```

## Run migrations

```bash
pnpm run migrate
```

## Run the application

```bash
pnpm run dev
```

## Build Docker image

```bash
docker build -t multitenancy:v1 -f Dockerfile.dev .
```

## Run Docker container for development

```bash
docker compose up
```

or

```bash
docker run --rm -p 8080:8080 -v $(PWD):/app -v /app/node_modules --name app-container multitenancy:v1

```
