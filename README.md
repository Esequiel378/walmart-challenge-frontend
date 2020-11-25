# Walmart challenge - Web App

## Description

A [Lider](https://www.lider.cl/supermercado/) demo web
app built with [Docker](https://www.docker.com/why-docker),
[Nuxt](https://nuxtjs.org/) and [Vuetify](https://vuetifyjs.com/en/)

Live demo [lider.co](http://165.22.3.102)

## Setup

This project need a .env file in the root directory, with the next variables

```Python
BASE_URL=http://0.0.0.0:5000/api
```

## Deployment

First you need to get the source code

```shell
git clone https://github.com/Esequiel378/walmart-challenge-frontend.git
```

Since the project use docker-compose, you can deploy locally by running

```shell
# build api and database images
docker-compose -f local.yml build

# create api and database containers
docker-compose -f local.yml up
```

Now you can visit http://localhost:3000/

## Testing

You can run the test docker

```shell
docker-compose -f local.yml run frontend npm test
```

## Related Projects

+ Lider demo backend https://github.com/Esequiel378/walmart-challenge-backend

+ Deployment solution https://github.com/Esequiel378/walmart-challenge-deployment

## TODO

- [ ] Add more test to components

- [ ] Add pagination

- [ ] Add cart functionality
