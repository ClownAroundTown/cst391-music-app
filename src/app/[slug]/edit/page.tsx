import Form from 'next/form'
import 'bootstrap/dist/css/bootstrap.min.css';   
import { fetchOneAlbum } from '@/lib/db';
import EditAlbum from '@/lib/EditForm/Form';

export default async function Page (
     props: {
        searchParams: Promise<{
            id: string;
            page?: string;
        }>;
        }
){
    const searchParams = await props.searchParams;
        console.log("SearchParams: ", searchParams);
        const query = parseInt(searchParams.id);
        const currentPage = Number(searchParams?.page) || 1;
    
        const currAlbum = await fetchOneAlbum(query);
        const form = EditAlbum({CurrentAlbum:currAlbum})

   return (
    <div>
        {form}
    </div>
  )
 };