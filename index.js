// env file 
require('dotenv/config')

const express = require('express');
const app = express();
const port = process.env.PORT || 5000

const { graphqlHTTP } = require('express-graphql');

// graphql schema
const schema = require('./schema');
const root = {
  item: () => {
    return {
      id: 'XYU2546',
      text: 'LED TV',
      timeISO: '15/05/2022',
      time: 1548754568,
      title: 'Electronics',
      deleted: false
    }
  },
  user: () => {
    return {
      firstName: 'Jhon',
      lastName: 'Doe',
      emails: [
        { email: 'abc@gmail.com' },
        { email: 'kbc@yahoo.com' },
        { email: 'xyz@aol.com' },
        { email: 'tpb@netflix.com' }
      ]
    }
  }
}

// bodyParser setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set graphql middleware
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
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