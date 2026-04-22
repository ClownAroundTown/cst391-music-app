'use server'

import { DBTrack } from '@/lib/db';
import { altTrackOBJ } from '@/lib/music_modules/tracks/tracks.model';
import { redirect } from 'next/navigation'

export default async function createTrack(
  formData: FormData) 

{
    function isString(value: FormDataEntryValue | null): value is string {
      return value !== null && typeof value === 'string';
    }

    const rawID = formData.get("id");
    const rawTitle = formData.get("title");
    const rawNumber = formData.get("number");
    const rawVideo = formData.get("video");
    const rawLyrics = formData.get("lyrics");

    var cId = 0;
    var cTitle = "";
    var cNumber = 0;
    var cVideo = "";
    var cLyrics = "";

    if (isString(rawID)) {
    // Now TypeScript knows 'value' is a string
      cId = parseInt(rawID);
    } else {
      console.log('ID is not a string');
    }
    if (isString(rawNumber)) {
    // Now TypeScript knows 'value' is a string
      cNumber= parseInt(rawNumber);
    } else {
      console.log('Number is not a string');
    }
    if (isString(rawTitle)) {
    // Now TypeScript knows 'value' is a string
      cTitle = rawTitle;
    } else {
      console.log('Title is not a string');
    }
    if (isString(rawVideo)) {
    // Now TypeScript knows 'value' is a string
      cVideo = rawVideo;
    } else {
      console.log('Video is not a string');
    }
    if (isString(rawLyrics)) {
    // Now TypeScript knows 'value' is a string
      cLyrics = rawLyrics;
    } else {
      console.log('Lyrics are not a string');
    }

    const newTrack = new altTrackOBJ(
      cId,
      cTitle,
      cNumber,
      cVideo,
      cLyrics,
    );

    console.log(newTrack)

    DBTrack.CREATE(newTrack)
    redirect(`/`)
}