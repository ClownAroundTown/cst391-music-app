 import * as React from 'react';
 import Link from 'next/link'
 import { fetchAlbums, fetchOneAlbum } from "../../music_modules/db";
 import AlbumOBJ from "../../music_modules/albums/album.obj";
 import NewAlbum from './AddAlbum';
 import SearchForm from '../SearchForm/SearchForm';
 import { Suspense } from 'react';

 /*
  async function GetAlbums(){
    const res = await fetchAlbums();
    const rendered = AlbumList({albumList:res, buttonText:"Cool"});

    return rendered;
  }*/

  async function updateAlbums(query:string){
    return NewAlbum();
  }

  export async function OneAlbum(query:number){
    console.log(query)
    const res = await fetchOneAlbum(query);

    return res;
  }

  export default updateAlbums;