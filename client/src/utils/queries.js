import { gql } from '@apollo/client';

export const GET_ME = gql`
query User {
    user {
      _id
      bookCount
      email
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
      username
    }
  }`;