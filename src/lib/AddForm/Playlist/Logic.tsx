'use server'

import { DBPlaylist } from '@/lib/db';
import { altPlaylistOBJ } from '@/lib/music_modules/playlist/playlist.model';
import { redirect } from 'next/navigation'

export default async function createTrack(
  formData: FormData) 

{
    function isString(value: FormDataEntryValue | null): value is string {
      return value !== null && typeof value === 'string';
    }

    const rawName = formData.get("name");

    var cName = "";

    if (isString(rawName)) {
    // Now TypeScript knows 'value' is a string
      cName = rawName;
    } else {
      console.log('Name are not a string');
    }

    const newPlaylist = new altPlaylistOBJ(cName);

    console.log(newPlaylist)

    DBPlaylist.CREATE(newPlaylist)
    redirect(`/`)
}