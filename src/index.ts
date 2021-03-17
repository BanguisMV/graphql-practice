import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express'
import  mongoose  from 'mongoose';
import consola from 'consola';


import { PORT, IN_PROD, DB } from './config'
import { typeDefs, resolvers } from './graphql';

import * as AppModels from './models'


const { error, success } = consola

const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    playground:IN_PROD, 
    context: { ...AppModels } 
});

const app: Application = express()
const startApp = async () => {

    try {
        await mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true });
        success({ 
            badge:true, 
            message: `[DATABASE]: Succesfully connected`,
        })
        server.applyMiddleware({ app });
        app.listen(PORT, () => success({ 
            badge:true, 
            message: `[SERVER]: Server is Running at PORT: ${PORT}`,
        }))
    } catch (error) {
        error({
            badge:true, 
            message: `[SERVER]: ${error.mesagge}`
        })  
    }

   
}

startApp()