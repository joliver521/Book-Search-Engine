const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book{}
type User{}
type Query{}
type Mutation{}
type Auth{}
`;

module.exports = typeDefs;
