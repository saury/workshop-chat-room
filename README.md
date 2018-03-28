# WORKSHOP - CHAT ROOM

> Building a whole app from scratch with a NodeJS API written in TypeScript and a ReactJS front-end, also written in
> TypeScript. Will deploy both of them to AWS ECS and will automate builds and deployments using Jenkins, Docker,
> Groovy, Bash and NodeJS.

## Usage:

All work with docker, else just find npm script in `package.json`

### Dev Environment

**BUILD**

`> docker-compose build`

**RUN**

`> docker-compose up`

### Production Environment

**BUILD**

`> docker build -t chatting-room -f production.Dockerfile .`

**RUN**

`> docker run --rm -p 8080:8080 chatting-room`
