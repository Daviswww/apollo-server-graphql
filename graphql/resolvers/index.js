import { authorQueries, authorMutations } from './author';
import { versionQueries } from './version';

const resolvers = {
  Query: {
    ...versionQueries,
    ...authorQueries,
  },
  Mutation: {
    ...authorMutations,
  },
};

export default resolvers;