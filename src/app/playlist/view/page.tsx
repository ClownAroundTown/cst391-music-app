import './page.css'
import 'bootstrap/dist/css/bootstrap.min.css';   
import Page from './pagecomps';
import { DBPlaylist, DBTrack} from '@/lib/db';
import PlaylistOBJ from '@/lib/music_modules/playlist/playlist.model';
import TrackOBJ from '@/lib/NavBar/tracks/tracks.model';
import NavBar from '@/lib/NavBar/NavBar';

async function renderTrack(id:number){
    const track = await DBTrack.READONE(id) 
    const rendered = new TrackOBJ(track[0])
    return rendered
}

async function getPlaylistAndTracks(id:number){
    const playlist = (await DBPlaylist.READ(id)).map((data:Record<string, any>) => {return new PlaylistOBJ(data)})
    const trackIDs = (await DBPlaylist.TRACKS(id)).map((data:Record<string, any>) => 
        {
            return Number.parseInt(data.track_id)
        }
    )

    const tracks = new Array<string>();
    for (const id of trackIDs.values()){
        const tmp = await renderTrack(id);
        tracks.push(tmp.title)
    }


    return {name: playlist[0].name, 
        tracks: tracks}
}


export default async function OnePlaylist(
    props: {
        searchParams: Promise<{
            id: string;
            page?: string;
        }>;
        }
){
    const searchParams = await props.searchParams;
    const query = parseInt(searchParams.id);
    const playlistData = await getPlaylistAndTracks(query);

    return(
        <>
            <NavBar />
            <Page id={query} playlist={playlistData.name.toString()} tracks={playlistData.tracks} />
        </>
    )
};