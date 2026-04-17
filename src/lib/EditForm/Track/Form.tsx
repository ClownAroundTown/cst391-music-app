import Form from 'next/form'
import 'bootstrap/dist/css/bootstrap.min.css';   
import updateTrack from './FormLogic';
import TrackOBJ from '@/lib/music_modules/tracks/tracks.model';
import { Card } from 'react-bootstrap';


const EditTrack = (props:TrackOBJ) =>{
   return (
    <Card>
        <Form action={updateTrack}>
      <div className="form-group">
            <label htmlFor="exampleInputEmail1">ID</label>
            <input className="form-control" id="id" name="id" defaultValue={props.id}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input className="form-control" id="title" name="title" defaultValue={props.title}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Number</label>
            <input className="form-control" id="number" name="number" defaultValue={props.number}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Video</label>
            <input className="form-control" id="video" name="video" defaultValue={props.video}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Lyrics</label>
            <input className="form-control" id="lyrics" name="lyrics" defaultValue={props.lyrics}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </Form>
    </Card>
  )
 };

 export default EditTrack