import { gql } from '@apollo/client';

export const GET_ME = gql`
query User {
    user {
      _id
      bookCount
      email
      savedBooks {
        authors
        bookID
        description
        image
        link
        title
      }
      username
    }
  }`;