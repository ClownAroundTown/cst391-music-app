'use server'

import { DBTrack, DBAlbum, DBPlaylist } from "@/lib/db";
import TrackOBJ from "@/lib/music_modules/tracks/tracks.model";
import AlbumOBJ from "@/lib/music_modules/albums/album.obj";
import PlaylistOBJ, { altPlaylistOBJ } from "@/lib/music_modules/playlist/playlist.model";
import { redirect } from 'next/navigation'

export async function allAlbumsAndTracks(){
    const albumData = await DBAlbum.READ();
    const albums:AlbumOBJ[] = albumData.map((data:Record<string, any>) => {
        return new AlbumOBJ(data);
    })
    var renderedData = new Array<[AlbumOBJ, TrackOBJ[]]>;
    for (const a of albums){
        const trackData = await DBTrack.READ(a.albumId);
        const tracks = trackData.map((data:Record<string, any>) => {return new TrackOBJ(data)})
        renderedData.push([a, tracks])
    }
    var formattedData = new Array<[string, Array<[string,number]>]>()
    renderedData.forEach((data:[AlbumOBJ, TrackOBJ[]]) => {
        const title = data[0].title
        const tracks = new Array<[string,number]>();
        data[1].forEach((track:TrackOBJ) => {
            tracks.push([track.title, track.id])
        })
        formattedData.push([title, tracks])
    });
    return formattedData
}

async function renderTrack(id:number){
    const track = await DBTrack.READONE(id) 
    const rendered = new TrackOBJ(track[0])
    return rendered
}

export async function Submit(formData:FormData){
    function isString(value: FormDataEntryValue | null): value is string {
            return value !== null && typeof value === 'string';
    }
    function isNumber(value: string){
        try{
            Number.parseInt(value);
            return true
        }
        catch{
            return false
        }
    }
    const tracks = new Array<TrackOBJ>();
    var title = "Null";
    const rawTitle = formData.get("title")
    if (isString(rawTitle)){
        title=rawTitle
    }
    for (const d of formData.keys()){
        if (isString(d) && d!='nan' && d!='NaN' && isNumber(d) && !Number.isNaN(Number.parseInt(d))){
            const track = await renderTrack(Number.parseInt(d))

            tracks.push(track)
        }
    }

    console.log(title)
    console.log("TRACKS: ", tracks)
    const newPlaylist = new altPlaylistOBJ(title)
    DBPlaylist.CREATE(newPlaylist);
    const playlist = (await DBPlaylist.READ(null, title)).map((data:Record<string, any>) => { return new PlaylistOBJ(data)})
    try{
        DBPlaylist.ADD_TRACKS(playlist[playlist.length - 1], tracks)
    }
    catch (error){
        console.log("An Error occurred: ", error)
        console.log("Attempting one more time...")
        try{
            if (playlist.length > 1){
            DBPlaylist.ADD_TRACKS(playlist[playlist.length - 1], tracks)
        }
        }
        catch (error){
            console.log("Could not add playlist! Details: ", error)
        }
    }

    redirect(`/playlist`) 
}