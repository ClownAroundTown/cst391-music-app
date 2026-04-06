import Image from "next/image";
import styles from "./page.module.css";
import {allAlbums} from "@/lib/db";
import Card from "@/lib/Card/Card";
import NavBar from "@/lib/NavBar/NavBar";
// Source - https://stackoverflow.com/a/44985246
// Posted by Praveen M P, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-05, License - CC BY-SA 4.0

import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from "@/lib/SearchForm/SearchForm";

async function Page(){
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
