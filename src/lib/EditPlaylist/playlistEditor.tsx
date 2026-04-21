import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { allAlbumsAndTracks, Submit } from "./editorLogic";
import{ PlaylistCardFull } from "@/lib/Card/Playlist/Card";

const data = await allAlbumsAndTracks();
const deck = data.map((cardData:[string,[string,number][]]) => {
    return (
        <PlaylistCardFull cardTitle={cardData[0]} TrackData={cardData[1]}/>
    )
})

export default async function Editor(){
    return(
        <Form className="playlistEditor" action={Submit}>
            <Col md={6}>
                    <label htmlFor="exampleInputEmail1">Playlist Title</label>
                    <input className="form-control" id="title" name="title" defaultValue={"Cool Playlist"}/>
            </Col>
            <Row>
                {deck}
            </Row>
            <Col md={6}>
                <Button type="submit">Confirm</Button>
            </Col>
        </Form>
    )
}