import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        getAllPosts: [Post!]!
    }

    extend type Mutation {
        createNewPost(input: NewPost): Post!
        updatePost(id:ID, input: NewPost): Post
        deletePost(id:ID!): Post
    }

    input NewPost {
        title:          String!
        content:        String!
        featuredImage:  String
    }
     
    type Post {
        _id:            String
        title:          String!
        content:        String!
        createdAt:      String
        updatedAt:      String
        featuredImage:  String
    }
`;