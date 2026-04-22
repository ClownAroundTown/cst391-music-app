export interface Track{
    id: number;
    title: string;
    number: number;
    video: string;
    lyrics: string;
}

export default class TrackOBJ implements Track{
    id:number;
    title:string;
    number:number;
    video:string;
    lyrics:string;

    constructor(
        data:Record<string, any>
    ){
        this.id= data.id;
        this.title=data.title;
        this.number=data.number;
        this.video=data.video_url;
        this.lyrics=data.lyrics;
    }
}

export class altTrackOBJ{
    id:number|null;
    title:string|null;
    number:number|null;
    video:string|null;
    lyrics:string|null;
    albumid?:number|null;

    constructor(
        trackId:number|null=null,
        title: string|null=null,
        number: number|null=null,
        video: string|null=null,
        lyrics: string|null=null,
        albumid?: number
    ){
        this.id= trackId;
        this.title=title;
        this.number=number;
        this.video=video;
        this.lyrics=lyrics;
        this.albumid=albumid;
    }
}