'use server'

import { altAlbumOBJ } from '@/lib/music_modules/albums/album.obj';
import { DBAlbum } from '@/lib/db';
import { redirect } from 'next/navigation'

export default async function createAlbum(formData: FormData){
  console.log("Rendering...")
  const id = formData.get("id")
  const title = formData.get("title")
  const artist = formData.get("artist")
  const year = formData.get("year")
  const desc = formData.get("description")
  const image = formData.get("image")

  if (typeof id == 'string' && typeof year == 'string' && typeof title == 'string' && typeof desc == 'string' && typeof image == 'string' && typeof artist == 'string'){
    const newAlbumOBJ = new altAlbumOBJ(
      parseInt(id),
      title,
      artist,
      desc,
      parseInt(year),
      image,
    )
    DBAlbum.CREATE(newAlbumOBJ)
    redirect(`/`)
  }
}