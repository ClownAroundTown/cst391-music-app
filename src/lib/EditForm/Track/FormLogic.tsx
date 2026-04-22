'use server'
import { redirect } from 'next/navigation'
import { altTrackOBJ }from '@/lib/music_modules/tracks/tracks.model';
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

    console.log(formData)

    var cId = 0;
    var cTitle = "";
    var cNumber = 0;
    var cVideo = "";
    var cLyrics = "";

    console.log(formData)

    if (isString(rawID)) {
      cId = parseInt(rawID);
    } else {
      console.log('ID is not a string');
    }
    if (!Number.isNaN(rawNumber)) {
      console.log(Number(rawNumber))
      cNumber = Number(rawNumber);
    } else {
      console.log('Number is not a number');
    }
    if (isString(rawTitle)) {
      cTitle = rawTitle;
    } else {
      console.log('Title is not a string');
    }
    if (isString(rawVideo)) {
      console.log(rawVideo.replaceAll("'", "''"))
      cVideo = rawVideo.replaceAll("'", "''");
    } else {
      console.log('Video is not a string');
    }
    if (isString(rawLyrics)) {
      cLyrics = rawLyrics;
    } else {
      console.log('Lyrics are not a string');
    }

    const newTrack = new altTrackOBJ(cId, cTitle, cNumber, cVideo, cLyrics
    );

    console.log("UPDATED TRACK: ", newTrack)
    

    DBTrack.UPDATE(newTrack)
    redirect(`/`)
}