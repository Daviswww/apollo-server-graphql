import { authorQueries, authorMutations } from './author';
import { helloQueries } from './hello';

const resolvers = {
  Query: {
    ...authorQueries,
    ...helloQueries,
  },
  Mutation: {
    ...authorMutations,
  },
};

module.exports = { resolvers };