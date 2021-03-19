import express, { Application } from 'express';
import { ApolloServer, PubSub } from 'apollo-server-express'
import  mongoose  from 'mongoose';
import consola from 'consola';
import { PORT, IN_PROD, DB } from './config'
import { typeDefs, resolvers } from './graphql';

import * as AppModels from './models'

const pubsub = new PubSub();
const server = new ApolloServer({ 
      typeDefs, 
      resolvers,
      playground:IN_PROD, 
      context: { ...AppModels, pubsub } 
});

const app: Application = express()

const startApp = async () => {

    try {
        await mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
        consola.success({ 
            badge:true, 
            message: `[DATABASE]: Succesfully connected`,
        })
        server.applyMiddleware({ app });
        app.listen(PORT, () => consola.success({ 
            badge:true, 
            message: `[SERVER]: Server is Running at PORT: ${PORT}`,
        }))
    } catch (error) {
        consola.error({
            badge:true, 
            message: `[SERVER]: ${error.mesagge}`
        })  
    }
}

startApp()