import { config, DotenvParseOutput } from 'dotenv'


const parsed: DotenvParseOutput | any = config().parsed

export const {
    PORT,
    MODE,
    DB = 'mongodb://localhost/graphql',
    IN_PROD = MODE !== 'production',
    BASE_URL,
    URL = `${BASE_URL}${PORT} `
} = parsed
