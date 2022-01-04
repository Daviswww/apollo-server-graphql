import { authorQueries, authorMutations } from './author'
import { versionQueries } from './version'
import { counterQueries, counterMutations, counterSubscription } from './counter'

const resolvers = {
  Query: {
    ...versionQueries,
    ...authorQueries,
    ...counterQueries
  },
  Mutation: {
    ...authorMutations,
    ...counterMutations
  },
  Subscription: {
    ...counterSubscription
  }
}

export default resolvers
