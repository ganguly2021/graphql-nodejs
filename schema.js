const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String,
    name: String,
    email: String,
    age: Int
  }
`);

module.exports = schema;