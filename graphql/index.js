import { ApolloServer } from 'apollo-server-express'
import { env, secret } from '../config/environment'
import schema from './utils/schema'
import subscriptionServer from './utils/subscription'

const apolloServer = new ApolloServer({
  schema,
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
  }]
})

export default apolloServer
