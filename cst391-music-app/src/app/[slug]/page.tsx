import React from 'react';
import './page.css'
import 'bootstrap/dist/css/bootstrap.min.css';   
import  Link from 'next/link';
import { fetchOneAlbum } from '@/lib/db';

export default async function OneAlbum(
    props: {
        searchParams: Promise<{
            id: string;
            page?: string;
        }>;
        }
){

    const searchParams = await props.searchParams;
    //console.log("SearchParams: ", searchParams);
    const query = parseInt(searchParams.id);
    const currentPage = Number(searchParams?.page) || 1;

    const album = await fetchOneAlbum(query);
    //console.log("Album Pulled: ", res[0]);

    return(
        <div>
            <div className='contained'>
            <div className="container row">
                <div className='col-lg-7'>
                    <h2>Album Details for {album.title}</h2>
                    <div className="card">
                        <img 
                            src={album.image}
                            className='card-img-top'
                            alt={album.title}
                        />
                        <div className="card-body">
                            <h5 className='card-title'>
                                {album.title}
                            </h5>
                            <p className='card-text'>
                                {album.description}
                            </p>
                            <div className="list-group">
                                <ul>
                                    <li>
                                        Show the album tracks here.
                                    </li>
                                </ul>
                            </div>
                            <Link href={`${album.title}/edit?id=${album.albumId}`} passHref>
                                <button className="btn btn-primary" type="button">Edit this Album</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className='card'>
                        <p>Show the lyrics of select track here</p>
                    </div>
                    <div className="card">
                        <p>Show the Youtube video of the track here</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};