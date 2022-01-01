import { port } from './config/environment';
import express from 'express';
import graphqlServer from './graphql';
import connectDB from'./db';

const main = async () => {
  try {
    // Database
    await connectDB();

    // Apollo Server
    const app = express();
    await graphqlServer.start();
    graphqlServer.applyMiddleware({ app, path: '/graphql' });
    app.listen(port, () => {
      console.log(`Server is now running on http://localhost:${port}/graphql`);
    });
  } catch {
    console.log('Not able to run GraphQL server !');
  }
};

main();