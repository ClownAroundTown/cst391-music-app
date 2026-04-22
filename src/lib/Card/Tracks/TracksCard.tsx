"use client"

import { Nav, Tab, Row, Col } from 'react-bootstrap';
import { Suspense } from 'react';

interface tracks{
    data:Array<string[]>
}


const TracksNavTabs = (tracks:tracks) => {
    return tracks.data.map((str:string[]) => {
        return(
        <Nav.Item key={str[0]}>
              <Nav.Link eventKey={str[0].toString()}>{str[0]}</Nav.Link>
        </Nav.Item>
        )
    })
}
const TracksNavContent = (tracks:tracks) => 
    {
        return tracks.data.map((str:string[]) => {
            return (
            <Tab.Pane eventKey={str[0]} key={str[0]}>
              {str[1]}
              <hr/>
              <h4>Video</h4>
              <Suspense fallback={<p>Loading video...</p>}>
                <iframe 
                src={str[2]} 
                height="250" 
                width="450" 
                allowFullScreen
                loading="lazy" />
              </Suspense>
            </Tab.Pane>
            )
    })}

export const TrackAndLyric = (tracks:tracks) => {
    return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className='trackLIST'>
        <Col sm={4}>
            <h4>Tracks</h4>
          <Nav variant="pills" className="flex-column">
            <TracksNavTabs data={tracks.data}/>
          </Nav>
        </Col>
        <Col sm={8}>
            <h4>Lyrics</h4>
          <Tab.Content>
            <TracksNavContent data={tracks.data}/>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}