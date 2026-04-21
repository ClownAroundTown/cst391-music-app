"use client"

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { TrackAndLyric } from '@/lib/Card/Tracks/TracksCard';
import { RoleTitle } from '@/lib/Title';
import NavBar from '@/lib/NavBar/NavBar';

interface props{
  title:string,
  image:string,
  description:string,
  ID:number,
  trackRend:Array<string[]>
}

const Page = (props:props) =>{
  const {data:session} = useSession();
  const isAdmin=session?.user?.role === "admin";
  console.log("ROLE: ", session?.user?.role);

  if (isAdmin){
  return(
    <div className="AlbumDetails container row">
                <div className='col-md-5'>
                    <h2>Album Details for {props.title}</h2>
                    <div className="card">
                        <img 
                            src={props.image}
                            className='card-img-top'
                            alt={props.title}
                        />
                        <div className="card-body">
                            <h5 className='card-title'>
                                {props.title}
                            </h5>
                            <p className='card-text'>
                                {props.description}
                            </p>
                            <Link href={`${props.title}/edit?id=${props.ID}`} passHref>
                                <button className="btn btn-primary" type="button">Edit this Album</button>
                            </Link>
                            <Link href={`/`} passHref>
                                <button className="btn btn-primary" type="button">Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-lg-7'>
                    <TrackAndLyric data={props.trackRend}/>
                </div>
            </div>
    );
  }
  else{
    return (
        <>
        <div className="container row">
                <div className='Card col-md-5'>
                    <h2>Album Details for {props.title}</h2>
                    <div className="card">
                        <img 
                            src={props.image}
                            className='card-img-top'
                            alt={props.title}
                        />
                        <div className="card-body">
                            <h5 className='card-title'>
                                {props.title}
                            </h5>
                            <p className='card-text'>
                                {props.description}
                            </p>
                            <Link href={`/`} passHref>
                                <button className="btn btn-primary" type="button">Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-lg-7'>
                    <TrackAndLyric data={props.trackRend}/>
                </div>
            </div>
        </>
    )
  }
}

export default Page;