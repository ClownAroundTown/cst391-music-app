import dotenv from 'dotenv'
import { neon } from '@neondatabase/serverless';
import AlbumOBJ from './music_modules/albums/album.obj';
import Card from './Card/Card';

dotenv.config()

async function getData() {
  const sql = neon(process.env.DATABASE_URL!);
  const response = await sql.query(`SELECT * FROM albums`);
  return response;
}

async function getOne(id:number) {
  const sql = neon('https://ep-withered-recipe-ai8efkcv.apirest.c-4.us-east-1.aws.neon.tech/neondb/rest/v1');
  const response = await sql.query(`SELECT * FROM albums WHERE id = $1`, [id]);
  return response;
}

export async function allAlbums() {
  const data = await getData();
  const albums = data.map((value:Record<string, any>) => new AlbumOBJ(value)) //dont worry about it.
  return albums
}

export async function fetchOneAlbum(id:number) {
  const data = await getOne(id);
  const albums = data.map((value:Record<string, any>) => new AlbumOBJ(value)) //dont worry about it.
  return albums[0]
}

export async function updateThisAlbum(album:AlbumOBJ){
  /*
  const finalStatement = `UPDATE albums SET title='${album.title}', artist='${album.artist}', year=${album.year}, image='${album.image}', description='${album.description}'
                            FROM (SELECT * FROM albums)
                            WHERE albums.id=${album.albumId}`;*/

  const sql = neon(process.env.DATABASE_URL!);
  const finalStatement = `UPDATE albums SET title='${album.title}', artist='${album.artist}', year=${album.year}, image='${album.image}', description='${album.description}'
                            FROM (SELECT * FROM albums)
                            WHERE albums.id=${album.albumId}`;
  
            
  try{
    const data = await sql.query(finalStatement);
    console.log(data);
  }
  catch (Error){
    console.log("An error occured: ", Error)
    console.log("Query: ", finalStatement);
  }
}