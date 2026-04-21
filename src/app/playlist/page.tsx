import 'bootstrap/dist/css/bootstrap.min.css';  
import './page.css' 
import PlaylistOBJ from '@/lib/music_modules/playlist/playlist.model';
import { DBPlaylist } from '@/lib/db';
import MinPlaylistCard from '@/lib/Card/Playlist/MinCard';
import NavBar from '@/lib/NavBar/NavBar';
import { Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import { RoleTitle } from '@/lib/Title';
import { Actions } from './pagecomps';

export default async function Page (){
   const playlists = (await DBPlaylist.READ()).map((data:Record<string, any>) => new PlaylistOBJ(data))
   const cards = playlists.map((data:PlaylistOBJ) => {
    return <MinPlaylistCard id={data.id} name={data.name}/>;
   })
 
 return (
   <>
      <RoleTitle />
      <NavBar />
      <Row className='PLAYLISTS'>
         <Col className="LIST" md={6}>
         <h1>All Playlists</h1>
         {cards}
         </Col>
         <Col className='NEWPLAYLIST' md={3}>
            <h1>Actions</h1>
            <Actions />
         </Col>
      </Row>
   </>
 )
}