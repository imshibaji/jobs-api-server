# Jobs Portal API Server Application

This is the Fullstack Jobs Portal Applications APIs. If you wanted to launch your own Jobs Portal then you can use this for your application backend. It is An Open Source Project.

## Description

[Jobs Portal API](https://github.com/imshibaji/jobs-api-server) is based on a [NestJS](https://github.com/nestjs/nest) framework TypeScript starter repository. It is an open source project that anyone can use to launch their own Jobs Portal. Here you can find all the resources you need to get started with the project. 

As a NestJS developer, you can use this project as a starting point for your own projects. If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS.

## Quick Start

```bash
# Clone the repository
$ git clone https://github.com/imshibaji/jobs-api-server.git

# Move into the directory
$ cd jobs-api-server

# Create .env file
$ cp .env.example .env

# Install dependencies
$ pnpm install

# Run the development server
$ pnpm run start:dev

# Run the production server
$ pnpm run start:prod
```

## Environment Variables

To run this project, you will need to create a `.env` file and add the following environment variables:

```bash
APP_NAME="Jobs API Server"
APP_VERSION="1.0.0"
APP_ENVIRONMENT=development
APP_PORT=3300
APP_SECRET_KEY=<your-secret-key>

DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USER=root
DB_PASS=password
DB_NAME=jobs_api_server
DB_SYNC=true

REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_USER=default
REDIS_PASS=password
REDIS_DB=1234

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587 # or 465
SMTP_USER=admin@gmail.com
SMTP_PASS=password
SMTP_SECURITY=TLS # or SSL


WHATSAPP_NUMBER=<your-number>
SMS_NUMBER=<your-number>
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## How to use

1. Register a new user
2. Then login to your account
3. Get Access Token and Set Authorization Header
4. Then you can use the API endpoints

## API Endpoints

```bash
# Register a new user
POST /auth/register

# Login a user
POST /auth/login

# Get all jobs
GET /jobs

# Get a single job
GET /jobs/:id

# Create a new job
POST /jobs

# Update a job
PUT /jobs/:id

# Delete a job
DELETE /jobs/:id

# Many more API endpoints are available in the project source code
```

## Hosting on VPS
You can deploy your Project on VPS with [Hostinger](https://www.hostinger.in/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=SHIBAJIDEBNATH&referral_id=019b06a2-98e8-7397-8bd6-f7b0e0cb1dc6). It a very cost-effective and easy-to-use platform for deploying NestJS applications on Hostinger.

If want to get offer then you can use [Hostinger Offer](https://www.hostinger.in/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=SHIBAJIDEBNATH&referral_id=019b06a2-98e8-7397-8bd6-f7b0e0cb1dc6) for your project from this link.


## Setup Jobs API Server on VPS

1. Create a VPS on [Hostinger](https://www.hostinger.in/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=SHIBAJIDEBNATH&referral_id=019b06a2-98e8-7397-8bd6-f7b0e0cb1dc6)
2. Choose your plan and click on checkout
3. Enter your details and click on checkout
4. Setup your VPS with Docker
5. Then Follow this Process to [Setup Jobs API Server](https://github.com/imshibaji/jobs-api-server#deployment-process-with-docker) on Docker Easily

## Deployment with Docker

You can deploy This Project on Docker with [Docker](https://www.docker.com/). It a very cost-effective and easy-to-use platform for deploying NestJS applications on Docker.

## Deployment Process with Docker
If you wanted to Quickly deploy this Project on Docker then you can follow these steps:

create a `docker-compose.yml` file in the root directory of the project.

then copy the following content into the file:
```yaml
server:
    image: imshibaji/jobs-api-server:latest
    container_name: jobs-server
    restart: unless-stopped
    env_file:
      - .env
    environment:
      NODE_ENV: production
    ports:
      - 3300:3300
    volumes:
      - ./uploads:/app/uploads:rw
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_healthy

  db:
    image: postgres:17
    restart: always
    user: postgres
    volumes:
      - db_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=jobs_api_server
      - POSTGRES_PASSWORD=Spaceranger@123
    ports:
      - 5433:5432
    healthcheck:
      test: [ "CMD", "pg_isready" ]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:latest
    restart: always
    ports:
      - 6378:6379
    volumes:
      - redis_data:/data
    healthcheck:
      test: [ "CMD", "redis-cli", "ping" ]
      interval: 10s
      timeout: 5s
      retries: 5
    environment:
      - REDIS_PASSWORD=Spaceranger@123

volumes:
  server_app:
    driver: local
  db_data:
  redis_data:

networks:
  proxy:
    external:
      name: proxy
```

then run the following command:

1. copy .env.example file to .env file
2. Then run `docker compose up -d` command
3. Then run `docker compose logs -f` command
4. Then open `http://localhost:3300` in your browser
5. Check Project Status with `docker compose ps` command
6. For upgrading the project then run `docker compose down` command
7. Then run `docker compose pull` command
8. Then run `docker compose up -d` command


Use this Process to deploy this Project on Docker Easily.

You can also modify the `Dockerfile` to fit your needs.

But if you wanted to more control then you can modify the `docker-compose.yaml` file.

## Resources

You wanted to Modify and Contribute to this Project then you can find all the resources you need to get started with the project:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.

- Visit the [Docker documentation](https://docs.docker.com) to learn more about Docker. 
- For deployment, you can use [Docker Compose](https://docs.docker.com/compose/).



## Stay in touch
If you have any questions or feedback about this project.

Also you need any setup help, please don't hesitate to reach out to me.

- Author - [Shibaji Debnath](https://shibajidebnath.com)
- Project - [Jobs API Server](https://github.com/imshibaji/jobs-api-server)
- LinkedIn - [LinkedIn](https://www.linkedin.com/in/shibaji/)

## License

Jobs API Server is [MIT licensed](https://github.com/imshibaji/jobs-api-server/blob/main/LICENSE).

![License: GNU GPL v3](https://img.shields.io/badge/License-gpl3.0-blue.svg)
