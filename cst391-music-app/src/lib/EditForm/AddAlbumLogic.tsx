'use server'

import Form from 'next/form'
import { redirect } from 'next/navigation'
import AlbumOBJ from '../music_modules/albums/album.obj'
import { updateThisAlbum } from '../db'

export default async function updateAlbum(formData: FormData) {
  // Create a new post
  // ...

  function isString(value: FormDataEntryValue | null): value is string {
    return value !== null && typeof value === 'string';
  }

  const rawID = formData.get("id")
  const rawTitle = formData.get("title")
  const rawArtist = formData.get("artist")
  const rawDesc = formData.get("description")
  const rawImg = formData.get("image")
  const rawYear = formData.get("year")
  
  var cId = 0;
  var cTitle = "";
  var cArtist = "";
  var cDesc = "";
  var cImg = "";
  var cYear = 0;

  if (isString(rawID)) {
  // Now TypeScript knows 'value' is a string
    cId = parseInt(rawID);
  } else {
    console.log('Value is not a string');
  }
  if (isString(rawYear)) {
  // Now TypeScript knows 'value' is a string
    cYear = parseInt(rawYear);
  } else {
    console.log('Value is not a string');
  }
  if (isString(rawTitle)) {
  // Now TypeScript knows 'value' is a string
    cTitle = rawTitle;
  } else {
    console.log('Value is not a string');
  }
  if (isString(rawDesc)) {
  // Now TypeScript knows 'value' is a string
    cDesc = rawDesc;
  } else {
    console.log('Value is not a string');
  }
  if (isString(rawArtist)) {
  // Now TypeScript knows 'value' is a string
    cArtist = rawArtist;
  } else {
    console.log('Value is not a string');
  }if (isString(rawImg)) {
  // Now TypeScript knows 'value' is a string
    cImg = rawImg;
  } else {
    console.log('Value is not a string');
  }


  const newAlbum = new AlbumOBJ({
    id:cId,
    title:cTitle,
    artist:cArtist,
    year: cYear,
    image: cImg,
    description: cDesc,
  });
 
  updateThisAlbum(newAlbum);
  redirect(`/`)
}