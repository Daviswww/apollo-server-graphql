import { ApolloServer } from 'apollo-server-express'
import { env, secret } from '../config/environment'
import { httpServer } from '../app'
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginInlineTrace, ApolloServerPluginInlineTraceDisabled } from 'apollo-server-core'
import schema from './utils/schema'
import subscriptionServer from './utils/subscription'

const apolloServer = new ApolloServer({
  schema,
  tracing: true,
  secret: secret,
  playground: env.development,
  plugins: [{
    async serverWillStart () {
      return {
        async drainServer () {
          subscriptionServer.close()
        }
      }
    }
  },
  ApolloServerPluginDrainHttpServer({ httpServer }),
  env.development
    ? ApolloServerPluginInlineTrace()
    : ApolloServerPluginInlineTraceDisabled()
  ]
})

export default apolloServer
