import 'bootstrap/dist/css/bootstrap.min.css';   
import AddAlbum from '@/lib/AddForm/Album/Form';
import { RoleCheck } from '@/lib/AddForm/AddPlaylist/editorRender';
import NavBar from '@/lib/NavBar/NavBar';
import { Card } from 'react-bootstrap';

export default async function Page (){
   const form = AddAlbum()
   return (
    <>
    <NavBar />
    <div className='CONTAINER'>
        <RoleCheck />
        <Card className='FORM'>
            {form}
        </Card>
    </div>
    </>
  )
 };