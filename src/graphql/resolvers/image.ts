import { GraphQLScalarType } from 'graphql';
import { createWriteStream } from 'fs'
import { parse, join } from 'path'
import { URL } from '../../config'

export default {
    Query: {
        info:() => "Hello Image Uploader"
    },

    Mutation: {
        imageUploader: async (_:any, { file }:any )=> {

            const { filename, createReadStream }  = await file
            const stream = createReadStream()
            let { ext, name } = parse(filename)

            name = name.replace(/([^a-z0-9 ]+)/gi,"-").replace(" ", "_")

            let serverFile = join(__dirname, `../../uploads/${name}-${Date.now()}${ext}`)

            let writeStream = createWriteStream(serverFile)

            await stream.pipe(writeStream)

            serverFile = `${URL}${serverFile.split('uploads')[1]}`;
            return serverFile
        }
    }
}