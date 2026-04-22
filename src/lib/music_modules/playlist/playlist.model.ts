import AlbumOBJ from '../albums/album.obj'
import TrackOBJ from '../tracks/tracks.model'

interface Playlist{
    id:number
    name:String
    albumID?:number[]
    albums?:Array<AlbumOBJ>
    trackID?:number[]
    tracks?:Array<TrackOBJ>
}

export default class PlaylistOBJ implements Playlist{
    id:number
    name:String
    albumID?:number[]
    albums?:Array<AlbumOBJ>
    trackID?:number[]
    tracks?:Array<TrackOBJ>

    constructor(data:Record<string, any>){
        this.id = data.id
        this.name = data.name
    }
}

export class altPlaylistOBJ{
    id:number
    name:String
    albumID?:number[]
    albums?:Array<AlbumOBJ>
    trackID?:number[]
    tracks?:Array<TrackOBJ>

    constructor(name:string, id:number=0){
        this.id = id
        this.name = name
    }
}