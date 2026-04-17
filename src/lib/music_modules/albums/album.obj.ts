import { Album } from './albums.model'
import { Track } from '../tracks/tracks.model'

export default class AlbumOBJ implements Album{
    albumId: number
    title: string
    artist: string
    description: string
    year: number
    image: string
    tracks: Track[]

    constructor(data:Record<string, any>){
        this.albumId=data.id;
        this.title=data.title;
        this.artist=data.artist;
        this.description=data.description;
        this.year=data.year;
        this.image=data.image;
        this.tracks = [];
    }
}

export class altAlbumOBJ implements Album{
    albumId: number
    title: string
    artist: string
    description: string
    year: number
    image: string
    tracks: Track[] | undefined

    constructor(albumId: number,
    title: string,
    artist: string,
    description: string,
    year: number,
    image: string,
    tracks?: Track[])
    {
        this.albumId=albumId
        this.title=title;
        this.artist=artist;
        this.description=description;
        this.year=year;
        this.image=image;
        this.tracks = tracks;
    }
}