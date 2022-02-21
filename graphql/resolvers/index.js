import { versionQueries } from './version'

const resolvers = {
  Query: {
    ...versionQueries,
  }
}

export default resolvers
