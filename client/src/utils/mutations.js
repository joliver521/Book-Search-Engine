import { gql } from '@apollo/client';

// will execute the loginUser mutation
export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

// will execute the addUser mutation
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                bookCount
                savedBooks {
                    bookId
                    authors
                    description
                    title
                    image
                    link
                }
            }
        }
    }
`;

// will execute the saveBook mutation
export const SAVE_BOOK = gql`
    mutation saveBook($content: BookContent) {
        saveBook(content: $content) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;

// will execute the removeBook mutation
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;
