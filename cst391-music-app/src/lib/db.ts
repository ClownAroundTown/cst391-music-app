import {Pool} from 'pg';
import dotenv from 'dotenv'

//let pool: Pool | undefined;

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
//dotenv.config({ path: `.env.development.local` })

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export default pool;

/*
export function getPool(): Pool{
    if (!pool){
        const URL = process.env.POSTGRES_URL ?? process.env.DATABASE_URL
        if (!URL) throw new Error ("POSTGRES_URL or DATABASE_URL is not set.");
    }

    pool =  new Pool({
        connectionString: `${URL}`,
        ssl: process.env.NODE_ENV === 'production'?{rejectUnauthorized:false}:undefined,
        max: 5,
    });
    console.log("Pool created successfully!")

    return pool;
}
*/