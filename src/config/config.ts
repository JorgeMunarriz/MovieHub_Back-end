import dotenv from 'dotenv';
import { Tconfig } from '../types/config';

if(process.env.NODE_ENV === 'production'){
    dotenv.config({path: '.env.production'});
} else {
    dotenv.config({path: '.env.development'})
}

const ENV = process.env.NODE_ENV ?? 'development';

const CONFIG: Tconfig = {
    development: {
        app: {
            PORT: process.env.PORT || 3006
        },
        db:{ 
           PORT: process.env.MONGO_DB_URI || 'mongodb://127.0.0.1:27017/express'
        },
    },
    production:{
        app:{
            PORT: process.env.PORT || 3011
        },
        db:{ 
           PORT: process.env.MONGO_DB_URI || 'mongodb://127.0.0.1:27017/express'
        },
    }
}
export default CONFIG[ENV];