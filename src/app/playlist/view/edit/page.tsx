import 'bootstrap/dist/css/bootstrap.min.css';   
import './page.css'
import { DBAlbum, DBTrack } from '@/lib/db';
import EditAlbum from '@/lib/EditForm/Album/Form';
import AlbumOBJ from '@/lib/music_modules/albums/album.obj';
import TrackOBJ from '@/lib/NavBar/tracks/tracks.model';
import { Card, Container, Col, Row } from 'react-bootstrap';
import EditTrack from '@/lib/EditForm/Track/Form';
import NewTrack from '@/lib/AddForm/Track/Add';

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
    
        const currAlbum = (
            await DBAlbum.READ(
                null, parseInt(searchParams.id)
                )
            ).map(
                (data:Record<string, any>) => 
                    {return new AlbumOBJ(data)}
                )[0];
        const form = EditAlbum(currAlbum)
        const tracks:TrackOBJ[] = (await DBTrack.READ(query)).map((data:Record<string, any>) => {
                return new TrackOBJ(data)
            })
        const trackforms = tracks.map((track:TrackOBJ) => {return EditTrack(track)})

   return (
    <div>
        <Container>
            <Row>
                <Col sm={6}>
                    <Card>
                        <h2>Album Details</h2>
                        {form}
                    </Card>
                </Col>
                <Col sm={6}>
                    <Card>
                        <h2>Tracks</h2>
                        {trackforms}
                    </Card>
                    <Card>
                        <h2>Add a Track</h2>
                        <NewTrack albumID={query} />
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
 };