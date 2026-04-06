'use client'

import React, { useState } from "react";
import './SearchForm.css';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import AlbumOBJ from "../../music_modules/albums/album.obj";
import { Track } from "../../music_modules/tracks/tracks.model";

 const NewAlbum = () => {
   const [albumTitle, setAlbumTitle] = useState('');
   const [artist, setArtist] = useState('');
   const [description, setDescription] = useState('');
   const [year, setYear] = useState(0);
   const [image, setImage] = useState('');

   const updateTitle = (e:any) => {
      setAlbumTitle(e.target.value)
   }

   const updateArtist = (e:any) => {
      setArtist(e.target.value)
   }
   const updateDescription = (e:any) => {
      setDescription(e.target.value)
   }
   const updateYear = (e:any) => {
      setYear(e.target.value)
   }
   const updateImage = (e:any) => {
      setImage(e.target.value)
   }

   const handleFormSubmit = (e:any) =>{
      const props = {
        id:0,
        title: albumTitle,
         artist: artist,
         description: description,
         year: year,
         image: image,
         tracks:[]
      }
      e.preventDefault();
      console.log("submit");
      const album = new AlbumOBJ(
        {id:props.id,
        title:props.title,
        artist:artist,
        description:description,
         year:year,
         image:image}
      );
      console.log(album);

      saveAlbum(album)
   }
   
   const saveAlbum = async (album:AlbumOBJ) =>{
      const response = console.log(album);
   }


    return (
      <div className='formContainer'>
            <form onSubmit={handleFormSubmit}>
            <div className="form-group">
               <label htmlFor="albumTitle">Album Title</label>
               <input type="text" className="form-control" id="albumTitle" placeholder='Enter a good title here!'onChange={updateTitle}/>
            </div>
            <div className="form-group">
               <label htmlFor="albumArtist">Artist</label>
               <input type="text" className="form-control" id="albumArtist" placeholder='Who is the artist?'onChange={updateArtist}/>
            </div>
            <div className="form-group">
               <label htmlFor="albumDescription">Description</label>
               <input type="text" className="form-control" id="albumDescription" placeholder='Anything to say about this album?'onChange={updateDescription}/>
            </div>
            <div className="form-group">
               <label htmlFor="albumYear">Year</label>
               <input type="number" className="form-control" id="albumYear" placeholder='When was this published?'onChange={updateYear}/>
            </div>
            <div className="form-group">
               <label htmlFor="albumImage">Image</label>
               <input type="text" className="form-control" id="albumImage" placeholder='Image URL goes here!'onChange={updateImage}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
      </div>
    );
 };

 export default NewAlbum;