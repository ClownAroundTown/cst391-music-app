"use client"

import { useState } from 'react';
import TrackOBJ from '@/lib/NavBar/tracks/tracks.model';
import { Button, Card, CardBody, CardHeader, Col, Form, Row } from 'react-bootstrap';
import AlbumOBJ from '@/lib/music_modules/albums/album.obj';
import './Card.css'

const TrackSlot = (title:string, id:number) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    return(
        <Form.Check
              name={id.toString()}
              label={title}
              onChange={handleChange}
              id={id.toString()}
              feedbackTooltip
            />
    )
}

export const PlaylistCardFull = (props:{cardTitle:string, TrackData:Array<[string, number]>}) => {
    const tracks = props.TrackData.map((value:[string,number]) =>{
        return TrackSlot(value[0], value[1])
    })
    return (
        <Col md={3}>
            <Card className='albumCard'>
                <CardHeader>
                    {props.cardTitle}
                </CardHeader>
                <CardBody className='trackCards'>
                    {tracks}
                </CardBody>
            </Card>
        </Col>
    )
}