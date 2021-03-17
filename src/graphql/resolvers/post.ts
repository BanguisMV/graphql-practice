import { InputPost, Post, PostNotification } from "../interface/interfaces"


export default {
    Query: {

        getAllPosts: async ( _:any, {}:any , context:any ): Promise<Post[]> => {
            const PostModel = context.default.Post
            return await PostModel.find()
        },

        getPost: async ( _:any, { id }:any , context:any ): Promise<Post> => {
            const PostModel = context.default.Post
            return await PostModel.findById(id).exec()
        }
    },

    Mutation: {

        createPost: async ( _:any, { input }:InputPost , context:any ): Promise<Post> => {
            const PostModel = context.default.Post
            return await PostModel.create(input)
        },
        
        updatePost: async ( _:any, { id, input }:InputPost , context:any): Promise<Post> => {
            const PostModel = context.default.Post
            return await PostModel.findByIdAndUpdate(id, input, { new:true })
        },

        deletePost: async ( _:any, { id }:InputPost , context:any): Promise<PostNotification> => {
            const PostModel = context.default.Post
            await PostModel.deleteOne({ _id: id })

            return {
                id: id,
                success: true,
                message: "Your post is DELETED"
            }

        }


    }
}