import { Album } from './albums.model'
import { Track } from '../tracks/tracks.model'

class AlbumOBJ implements Album{
    albumId: number
    title: string
    artist: string
    description: string
    year: number
    image: string
    tracks: Track[]

    constructor(data:{id:number, title:string, artist:string, year:number, image:string, description:string, tracks?:[]}){
        this.albumId=data.id;
        this.title=data.title;
        this.artist=data.artist;
        this.description=data.description;
        this.year=data.year;
        this.image=data.image;
        this.tracks = [];
    }
}

export default AlbumOBJ;