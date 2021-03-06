const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    item: HackerNewsItem
    user: User,
    users: [User],
    getUser(id: ID): User
  }

  type HackerNewsItem {
    id: String
    text: String
    timeISO: String
    time: Int
    title: String
    deleted: Boolean
  }
  
  enum Gender {
    MALE
    FEMALE
    OTHERS
  }

  type User {
    id: ID
    firstName: String!
    lastName: String!
    email: String!
    age: Int!
    gender: Gender
    items: [HackerNewsItem]
  }

  input HackNewsItemInput {
    id: String
    text: String
    timeISO: String
    time: Int
    title: String
    deleted: Boolean
  }

  input UserInput {
    id: ID
    firstName: String!
    lastName: String!
    email: String
    age: Int!
    gender: Gender
    items: [HackNewsItemInput]
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`);

module.exports = schema;