import 'bootstrap/dist/css/bootstrap.min.css';   
import Editor from '@/lib/AddForm/AddPlaylist/playlistEditor';
import NavBar from '@/lib/NavBar/NavBar';
import './page.css'
import { RoleTitle } from '@/lib/Title';

export default async function Page(){
   return (
    <>
    <RoleTitle />
    <div>
        <Editor />
    </div>
    </>
  )
 };