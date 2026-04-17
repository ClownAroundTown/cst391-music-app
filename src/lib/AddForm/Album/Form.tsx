import Form from 'next/form'
import 'bootstrap/dist/css/bootstrap.min.css';   
import createAlbum from './Logic';

const AddAlbum = () => {

   return (
    <Form action={createAlbum}>
      <div className="form-group">
            <label htmlFor="exampleInputEmail1">ID</label>
            <input className="form-control" id="id" name="id" type="number"/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input className="form-control" id="title" name="title"/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Year</label>
            <input className="form-control" id="year" name="year"/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Artist</label>
            <input className="form-control" id="artist" name="artist"/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Description</label>
            <input className="form-control" id="description" name="description" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Image</label>
            <input className="form-control" id="image" name="image" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </Form>
  )
 };

 export default AddAlbum