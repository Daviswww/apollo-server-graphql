import { execute, subscribe } from 'graphql'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import schema from './schema'
import httpServer from '../app'

const subscriptionServer = SubscriptionServer.create({
  schema,
  execute,
  subscribe
}, {
  // This is the `httpServer` we created in a previous step.
  server: httpServer,
  // Pass a different path here if your ApolloServer serves at
  // a different path.
  path: '/graphql'
})

export default subscriptionServer
