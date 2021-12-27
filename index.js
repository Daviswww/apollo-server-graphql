import { port } from './config/environment';
import express from 'express';
import graphqlServer from './graphql';

const start = async () => {
  try {
    const app = express();
    await graphqlServer.start();
    graphqlServer.applyMiddleware({ app, path: '/graphql' });
    app.listen(port, ()=>{
      console.log(`Server is now running on http://localhost:${port}/graphql`);
    });
    
  } catch {
    console.log('Not able to run GraphQL server');
  }
};

start();