import { Track } from '../tracks/tracks.model';

export interface Album{
    albumId: number,
    title: string,
    artist: string,
    description: string,
    year: number,
    image: string,
    tracks: Track[]
}