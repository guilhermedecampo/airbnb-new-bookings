import http from 'http';
import express from 'express';
import graphqlHTTP from 'express-graphql';

import schemas from './schemas';

const app = express();

app.use('/data', graphqlHTTP({ schema: schemas, graphiql: true }));

let server = http.createServer(app);

server.listen(3000, function () {
  let { address, port } = server.address();

  console.log('Example app listening at http://%s:%s', address, port);
});
