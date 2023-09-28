

const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
    bookCount: Int!
  }
  type Book {
    authors: [String]
    description: String
    bookId: ID
    image: String
    link: String
    title: String!
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(authors: [String], description: String, bookID: ID!, image: String, link: String, title: String!): User
    removeBook(bookID: ID!): User
  }
`

module.exports = typeDefs;