import 'bootstrap/dist/css/bootstrap.min.css';   
import AddAlbum from '@/lib/AddForm/Album/Form';
import { RoleCheck } from '@/lib/AddForm/AddPlaylist/editorRender';

export default async function Page (){
   const form = AddAlbum()
   return (
    <div>
        <RoleCheck />
        {form}
    </div>
  )
 };