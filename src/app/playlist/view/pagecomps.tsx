"use client"

import {Row, Col, Card } from 'react-bootstrap';
import React from 'react';
import { RoleTitle } from "@/lib/Title";
import { useSession } from 'next-auth/react';

interface props{
  id:number
  playlist:string
  tracks:Array<string>
}

const basePage = (props:props) => {
  const playlist = props.playlist
  const tracks = props.tracks.map((data:string) => {
    return (<li>{data}</li>)
  })
  return (
    <>
    <RoleTitle />
      <Row>
        <Col lg={8}>
          <Card>
            <h1>{playlist}</h1>
            <ul>
              {tracks}
            </ul>
          </Card>
        </Col>
      </Row>
    </>
  )
}

const Page = (props:props) =>{
  console.log(props)
  const {data:session} = useSession();
  const isAdmin=session?.user?.role === "admin";

  if (isAdmin){
    return basePage(props)
  }
  else{
    return basePage(props)
  }
}

export default Page;