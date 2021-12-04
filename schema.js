const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    item: HackerNewsItem
    user: User
  }

  type HackerNewsItem {
    id: String
    text: String
    timeISO: String
    time: Int
    title: String
    deleted: Boolean
  }

  type User {
    firstName: String!
    lastName: String!
    emails: [Email]
  }

  type Email {
    email: String!
  }
`);

module.exports = schema;