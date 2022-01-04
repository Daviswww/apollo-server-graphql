import { execute, subscribe } from 'graphql'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { httpServer } from '../../app'
import schema from './schema'

const subscriptionServer = SubscriptionServer.create({
  schema,
  execute,
  subscribe
}, {
  server: httpServer,
  path: '/graphql'
})

export default subscriptionServer
