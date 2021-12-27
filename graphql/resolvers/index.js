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

// console.log(resolvers);
// export default resolvers;

module.exports = { resolvers };