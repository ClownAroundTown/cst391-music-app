import './page.css'
import 'bootstrap/dist/css/bootstrap.min.css';   
import { DBAlbum, DBTrack } from '@/lib/db';
import AlbumOBJ from '@/lib/music_modules/albums/album.obj';
import TrackOBJ from '@/lib/NavBar/tracks/tracks.model';
import Page from './pagecomps';
import { RoleTitle } from '@/lib/Title';
import NavBar from '@/lib/NavBar/NavBar';

export default async function OneAlbum(
    props: {
        searchParams: Promise<{
            id: string;
            page?: string;
        }>;
        }
){
    const searchParams = await props.searchParams;
    const query = parseInt(searchParams.id);
    const currentPage = Number(searchParams?.page) || 1;

    const album:AlbumOBJ = (await DBAlbum.READ(
                    null, parseInt(searchParams.id))
                )!.map(
                    (data:Record<string, any>) => 
                        {return new AlbumOBJ(data)}
                    )[0];

    if (!Number.isNaN(query) && query.toString()!="NaN" && query.toString()!="nan"){
         const tracks:TrackOBJ[] = (await DBTrack.READ(query)).map((data:Record<string, any>) => {
        return new TrackOBJ(data)
        })
        const trackRend:Array<string[]> = new Array<string[]>()
        tracks.forEach((track:TrackOBJ) => {
            trackRend.push([track.title, track.lyrics])
        })

        return(
            <>
            <RoleTitle />
            <NavBar />
            <div className='CONTAINER'>
                <Page title = {album.title}  image = {album.image} description={album.description} ID={album.albumId}trackRend={trackRend} />
            </div>
            </>
        );
    }
    else{
        
    }
};