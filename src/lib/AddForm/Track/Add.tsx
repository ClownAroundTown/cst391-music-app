'use client'

import React, { useState } from "react";
import AlbumOBJ from "@/lib/music_modules/albums/album.obj";
import { Card } from 'react-bootstrap';
import Form from 'next/form'
import createTrack from "./Logic";

const NewTrack = (album:{albumID:number}) => {
    return (
      <Card>
        <Form action={createTrack}>
         <div className="form-group">
               <label htmlFor="exampleInputEmail1">ID</label>
               <input className="form-control" id="id" name="id" defaultValue={album.albumID}/>
         </div>
         <div className="form-group">
               <label htmlFor="exampleInputEmail1">Title</label>
               <input className="form-control" id="title" name="title"/>
         </div>
         <div className="form-group">
               <label htmlFor="exampleInputEmail1">Number</label>
               <input className="form-control" id="year" name="year"/>
         </div>
         <div className="form-group">
               <label htmlFor="exampleInputEmail1">Video</label>
               <input className="form-control" id="year" name="year"/>
         </div>
         <div className="form-group">
               <label htmlFor="exampleInputEmail1">Lyrics</label>
               <input className="form-control" id="year" name="year"/>
         </div>
         <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </Card>
    );
 };

 export default NewTrack