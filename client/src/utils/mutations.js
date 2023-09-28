import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        username
      }
      token
    }
  }`;

export const ADD_USER = gql `
mutation CreateUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}`;

export const SAVE_BOOK = gql `
mutation SaveBook ($bookId: ID!, $title: String!) {
  saveBook(bookID: $bookId, title: $title) {
    _id
    username
    email
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}`;

export const REMOVE_BOOK = gql`
mutation RemoveBook ($bookId: ID!) {
  removeBook(bookID: $bookId) {
    _id
    username
    email
    savedBooks {
      bookId
      authors
      description
      image
      link
      title
    }
  }
}`