import { InputPost, Post } from "../interface/interfaces"


export default {
    Query: {
        getAllPosts: ( _:any, {}:any , context:any, {}:any ): Promise<Post> => {
            const PostModel = context.default.Post
            return PostModel.find()
        }
    },

    Mutation: {
        createNewPost: async ( _:any, { input }:InputPost , context:any, info:any ): Promise<Post> => {
            const PostModel = context.default.Post
            return await PostModel.create(input)
        },
        
        updatePost: async ( _:any, { id, input }:InputPost , context:any, info:any ) => {
            const PostModel = context.default.Post
            return await PostModel.findByIdAndUpdate(id, input, { new:true })
        },
        deletePost: async ( _:any, { id }:InputPost , context:any, info:any ) => {
            const PostModel = context.default.Post
            return await PostModel.remove({_id: id })
            
        }
    }
}