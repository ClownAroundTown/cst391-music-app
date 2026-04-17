import 'bootstrap/dist/css/bootstrap.min.css';   
import AddAlbum from '@/lib/AddForm/Album/Form';

export default async function Page (){
    const form = AddAlbum()
   return (
    <div>
        {form}
    </div>
  )
 };