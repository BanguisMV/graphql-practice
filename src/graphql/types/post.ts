import { gql } from 'apollo-server-express';

export default gql`

    extend type Query {
        getAllPosts: [Post]!
        getPost(id:ID!): Post
    }

    extend type Mutation {
        createPost(input: NewPost):Post!
        updatePost(id:ID, input: UpdatePost): Post
        deletePost(id:ID!): PostNotification!
    }

    input NewPost {
        title:          String!
        content:        String!
        featuredImage:  String
    }
    
    input UpdatePost  {
        title:          String
        content:        String
        featuredImage:  String
    }

    type Post {
        id:             ID
        title:          String!
        content:        String!
        createdAt:      String
        updatedAt:      String
        featuredImage:  String
    }

    type PostNotification {
        id:      ID
        message: String!
        success: Boolean
    }
`;