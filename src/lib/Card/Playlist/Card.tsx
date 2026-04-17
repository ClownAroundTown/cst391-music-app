"use client"
import PlaylistOBJ from '@/lib/music_modules/playlist/playlist.model';
import TrackOBJ from '@/lib/music_modules/tracks/tracks.model';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { DBTrack } from '@/lib/db';
import Link from 'next/link';

async function getTracks(id:number){
    const tracks:TrackOBJ[] = (await DBTrack.READ(id)).map((data:Record<string, any>) => {
            return new TrackOBJ(data)
        })
    return tracks
}

function renderTracks(tracks:TrackOBJ[]){
    return tracks.map((track:TrackOBJ) => {
        return (
            <Row>
                <Col sm={1}>
                    CHECKBOX
                </Col>
                <Col md={2}>
                    {track.number}
                </Col>
                <Col md={4}>
                    {track.title}
                </Col>
                <Col md={5}>
                    {track.lyrics}
                </Col>
            </Row>
        )
    })
}

const PlaylistCard = (playlist:PlaylistOBJ) => {
    const tracks = getTracks(playlist.id);

    return (
        <div>
            <Row>
                <Col md={6}>
                    <h1>{playlist.name}</h1>
                </Col>
                <Col md={6}>

                </Col>
            </Row>
        </div>
    )
}

export default PlaylistCard