'use server'
import { redirect } from 'next/navigation'
import TrackOBJ from '@/lib/music_modules/tracks/tracks.model';
import { DBTrack } from '../../db';
import { isNumberObject } from 'util/types';

export default async function updateTrack(formData: FormData) {
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
    if (!Number.isNaN(rawNumber)) {
    // Now TypeScript knows 'value' is a string
      console.log(Number(rawNumber))
      cNumber = Number(rawNumber);
    } else {
      console.log('Number is not a number');
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

    const newTrack = new TrackOBJ({
      id:cId,
      title:cTitle,
      number:cNumber,
      video:cVideo,
      lyrics:cLyrics
    });

    console.log(newTrack)
    

    DBTrack.UPDATE(newTrack)
    redirect(`/`)
}