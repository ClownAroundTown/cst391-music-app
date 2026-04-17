import { DBAlbum } from "@/lib/db";
import Card from "@/lib/Card/Album/Card";
import NavBar from "@/lib/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from "@/lib/SearchForm/SearchForm";
import { connection } from 'next/server';
import React from 'react';

async function Page(){
  await connection()
  const album = await DBAlbum.READ()
  const deck = album!.map((AlbumOBJ) => {
     const handleSelectionOne = (albumId:number) => {
      console.log("Selected ID is " + albumId);
    };

      return <Card
          key={AlbumOBJ.id}
          albumID={AlbumOBJ.id}
          albumTitle={AlbumOBJ.title}
          albumDescription={AlbumOBJ.description}
          buttonText="See More"
          imgURL={AlbumOBJ.image}
          onClick={handleSelectionOne}
        />
    });
  return <React.Fragment key={1}>{deck}</React.Fragment>;
}


export default async function Home() {
  await connection()
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
