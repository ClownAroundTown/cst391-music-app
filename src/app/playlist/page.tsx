import 'bootstrap/dist/css/bootstrap.min.css';   
import PlaylistOBJ from '@/lib/music_modules/playlist/playlist.model';
import { DBPlaylist } from '@/lib/db';
import MinPlaylistCard from '@/lib/Card/Playlist/MinCard';

export default async function Page (){
   const playlists = (await DBPlaylist.READ()).map((data:Record<string, any>) => new PlaylistOBJ(data))
   const cards = playlists.map((data:PlaylistOBJ) => {
    return MinPlaylistCard(data);
   })
 
 return (
    <div>
        {cards}
    </div>
 )
}