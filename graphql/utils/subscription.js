import { execute, subscribe } from 'graphql'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import schema from './schema'
import { httpServer } from '../../app'

const subscriptionServer = SubscriptionServer.create({
  schema,
  execute,
  subscribe
}, {
  server: httpServer,
  path: '/graphql'
})

export default subscriptionServer
