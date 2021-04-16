'use strict'

const Fastify = require('fastify')
const mercurius = require('mercurius')

const app = Fastify()

app.register(mercurius, {
  gateway: {
    services: [{
      name: 'user',
      url: 'http://localhost:3001/graphql'
    }, {
      name: 'post',
      url: 'http://localhost:3002/graphql'
    }]
  }
})

app.listen(3000)
