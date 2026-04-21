import { DBAlbum } from "@/lib/db";
import Card from "@/lib/Card/Album/Card";
import NavBar from "@/lib/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from "@/lib/SearchForm/SearchForm";
import { connection } from 'next/server';
import { Row, Col } from "react-bootstrap";
import React from 'react';
import { RoleTitle } from "@/lib/Title";

async function Page(props: {
        searchParams: Promise<{
            query?:string
        }>;
        }){
  await connection()

  const searchParams = await props.searchParams
  const query = searchParams.query;
  console.log(searchParams)

  if (query != undefined){
    const album = await DBAlbum.READ(null, null, query)
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
  else
  {const album = await DBAlbum.READ()
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
  return <React.Fragment key={1}>{deck}</React.Fragment>;}
}

export default async function Home(
  props: {
        searchParams: Promise<{query?:string}>;
        }) {
  await connection()
  return (
    <>
    <RoleTitle />
    <NavBar />
      <div className="CONTAINER">
        <Row className="YIXI">
          <Col md={4}>
            <SearchForm />
          </Col>
          <Col lg={8}>
            <div className="SONGS">
              <Row>
                {Page(props)}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
