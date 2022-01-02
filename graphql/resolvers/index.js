import { authorQueries, authorMutations } from './author'
import { versionQueries } from './version'
import { counterSubscription } from './counter'

const resolvers = {
  Query: {
    ...versionQueries,
    ...authorQueries
  },
  Mutation: {
    ...authorMutations
  },
  Subscription: {
    ...counterSubscription
  }
}

export default resolvers
