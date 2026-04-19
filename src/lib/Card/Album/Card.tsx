import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import  Link from 'next/link';

interface CardProps{
  key:number;
  albumID:number;
  albumTitle:string;
  albumDescription:string;
  buttonText:string;
  imgURL:string;
  onClick:unknown;
}

const Card = (props:CardProps) => {
    return (
      <div className="card col-md-3">
            <div className="card-content">
              <div className="card2"></div>
            <h5 className="card-header">{props.albumTitle}</h5>
            <img src= {props.imgURL} alt="title"></img>
            <p className="card-text">{props.albumDescription}</p>
            <div className="d-grid gap-2 col-6 mx-auto">
              <Link href={`${props.albumTitle}?id=${props.albumID}`} passHref>
              <button className="btn btn-primary" type="button">{props.buttonText}</button>
              </Link>
            </div>
            </div>
          </div>)
      
};

export default Card;