import Image from "next/image";
import styles from "./page.module.css";
import {allAlbums} from "@/lib/db";
import Card from "@/lib/Card/Card";
import NavBar from "@/lib/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from "@/lib/SearchForm/SearchForm";
import { connection } from 'next/server';

async function Page(){
  await connection()
  const albums = await allAlbums()
  const deck = albums.map((AlbumOBJ) => {
     const handleSelectionOne = (albumId:number) => {
      console.log("Selected ID is " + albumId);
    };

      return <Card
          key={AlbumOBJ.albumId}
          albumID={AlbumOBJ.albumId}
          albumTitle={AlbumOBJ.title}
          albumDescription={AlbumOBJ.description}
          buttonText="Cool"
          imgURL={AlbumOBJ.image}
          onClick={handleSelectionOne}
        />
    });

  console.log(albums)

  return <>{deck}</>;
}


export default function Home() {
  return (
    <div className="container">
      <NavBar />
      <SearchForm />
      <div className="row no-gutters">
        {Page()}
      </div>
    </div>
  );
}
