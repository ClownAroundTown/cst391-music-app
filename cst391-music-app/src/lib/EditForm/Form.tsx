import Form from 'next/form'
import 'bootstrap/dist/css/bootstrap.min.css';   
import updateAlbum from './AddAlbumLogic';
import AlbumOBJ from '../music_modules/albums/album.obj';


interface EditProps{
  CurrentAlbum:AlbumOBJ
}

const EditAlbum = (props:EditProps) =>{

   return (
    <Form action={updateAlbum}>
      <div className="form-group">
            <label htmlFor="exampleInputEmail1">ID</label>
            <input className="form-control" id="id" name="id" defaultValue={props.CurrentAlbum.albumId}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input className="form-control" id="title" name="title" defaultValue={props.CurrentAlbum.title}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Year</label>
            <input className="form-control" id="year" name="year" defaultValue={props.CurrentAlbum.year}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Artist</label>
            <input className="form-control" id="artist" name="artist" defaultValue={props.CurrentAlbum.artist}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Description</label>
            <input className="form-control" id="description" name="description" defaultValue={props.CurrentAlbum.description}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Image</label>
            <input className="form-control" id="image" name="image" defaultValue={props.CurrentAlbum.image}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </Form>
  )
 };

 export default EditAlbum