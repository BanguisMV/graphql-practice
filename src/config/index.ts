import { config, DotenvParseOutput } from 'dotenv'


const parsed: DotenvParseOutput | any  = config().parsed

export const {
    PORT,
    MODE,
    DB = 'mongodb://localhost/trial-database',
    IN_PROD = MODE !== 'production'
} = parsed
