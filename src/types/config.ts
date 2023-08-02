export type Tconfig = {
    [key: string]:EnvironmentConfig;
}

type EnvironmentConfig ={
 app: AppConfig;
 db: MongoDBConfig;
}
type AppConfig = {
    PORT: string | number;
}

type MongoDBConfig = {
    PORT: string
}