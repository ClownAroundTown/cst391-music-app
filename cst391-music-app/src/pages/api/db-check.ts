import type { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db";

const environment = process.env.NODE_ENV;
const dbURL = process.env.DATABASE_URL;

export default async function handler(req: NextApiRequest, res:NextApiResponse){
    try{
        const db = pool;
        let {rows} = await db.query('select now() as now');
        const now = rows[0]?.now;
        ({ rows } = await db.query('SELECT artist FROM albums LIMIT 1'));
        const artist = rows[0]?.artist;
        res.status(200).json({time: rows[0], message:`Database connection successful! Running in ${environment}, DATABASE_URL: ${dbURL}`});

    } catch (err){
        res.status(500).json({
            error: "Database connection failed!", details: (err as Error).message, message:`The database connection failed running in ${environment}, DATABASE_URL: ${dbURL}`
        })
    }
}
