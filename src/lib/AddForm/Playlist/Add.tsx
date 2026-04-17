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
               <label htmlFor="exampleInputEmail1">Name</label>
               <input className="form-control" id="name" name="name"/>
         </div>
         <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </Card>
    );
 };

 export default NewTrack