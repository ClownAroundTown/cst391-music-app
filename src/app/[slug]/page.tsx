import './page.css'
import 'bootstrap/dist/css/bootstrap.min.css';   
import  Link from 'next/link';
import { DBAlbum, DBTrack } from '@/lib/db';
import AlbumOBJ from '@/lib/music_modules/albums/album.obj';
import TrackOBJ from '@/lib/music_modules/tracks/tracks.model';
import { Nav, Tab, TabContainer, TabContent } from 'react-bootstrap';
import { TrackAndLyric } from './pagecomps';

export default async function OneAlbum(
    props: {
        searchParams: Promise<{
            id: string;
            page?: string;
        }>;
        }
){
    const searchParams = await props.searchParams;
    //console.log("SearchParams: ", searchParams);
    const query = parseInt(searchParams.id);
    const currentPage = Number(searchParams?.page) || 1;

    const album:AlbumOBJ = (await DBAlbum.READ(
                    null, parseInt(searchParams.id))
                )!.map(
                    (data:Record<string, any>) => 
                        {return new AlbumOBJ(data)}
                    )[0];

    const tracks:TrackOBJ[] = (await DBTrack.READ(query)).map((data:Record<string, any>) => {
        return new TrackOBJ(data)
    })
    const trackRend:Array<string[]> = new Array<string[]>()
    tracks.forEach((track:TrackOBJ) => {
        trackRend.push([track.title, track.lyrics])
    })

    return(
        <div>
            <div className='contained'>
            <div className="container row">
                <div className='col-md-5'>
                    <h2>Album Details for {album.title}</h2>
                    <div className="card">
                        <img 
                            src={album.image}
                            className='card-img-top'
                            alt={album.title}
                        />
                        <div className="card-body">
                            <h5 className='card-title'>
                                {album.title}
                            </h5>
                            <p className='card-text'>
                                {album.description}
                            </p>
                            <Link href={`${album.title}/edit?id=${album.albumId}`} passHref>
                                <button className="btn btn-primary" type="button">Edit this Album</button>
                            </Link>
                            <Link href={`/`} passHref>
                                <button className="btn btn-primary" type="button">Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-lg-7'>
                    <TrackAndLyric data={trackRend}/>
                </div>
            </div>
        </div>
        </div>
    );
};