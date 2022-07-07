const express = require('express');
// ↓express-graphql.graphqlHTTP
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js');
const resolvers = require('./resolvers.js');


const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        rootValue: resolvers,
        graphiql: true
    })
);

const port = process.env.PORT || 4200;

app.listen(port);

console.log(`🚀 Server ready at http://localhost:4200/graphql`);
