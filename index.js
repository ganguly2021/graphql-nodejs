// env file 
require('dotenv/config')

const express = require('express');
const app = express();
const port = process.env.PORT || 5000

const { graphqlHTTP } = require('express-graphql');

// graphql schema
const schema = require('./schema');
const resolvers = require('./resolvers');

// bodyParser setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set graphql middleware
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}));


// default route
app.get('/', (req, res) => {
  return res.status(200).json({
    msg: 'Default api route.',
    status: true
  });
});


// start server 
app.listen(port, () => {
  console.log(`Server running at ${port}.`);
});