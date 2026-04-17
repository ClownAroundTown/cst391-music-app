import Form from 'next/form'
import 'bootstrap/dist/css/bootstrap.min.css';   
import updateAlbum from './FormLogic';
import AlbumOBJ from '../../music_modules/albums/album.obj';


const EditAlbum = (props:AlbumOBJ) =>{

   return (
    <Form action={updateAlbum}>
      <div className="form-group">
            <label htmlFor="exampleInputEmail1">ID</label>
            <input className="form-control" id="id" name="id" defaultValue={props.albumId}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input className="form-control" id="title" name="title" defaultValue={props.title}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Year</label>
            <input className="form-control" id="year" name="year" defaultValue={props.year}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Artist</label>
            <input className="form-control" id="artist" name="artist" defaultValue={props.artist}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Description</label>
            <input className="form-control" id="description" name="description" defaultValue={props.description}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Image</label>
            <input className="form-control" id="image" name="image" defaultValue={props.image}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </Form>
  )
 };

 export default EditAlbum