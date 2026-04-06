import React from 'react';
import shin from './shingodzilla.red.jpg';
import './Card.css';

const Card = (props) => {
    return (
          <div className="card col-md-3">
            <h5 className="card-header">{props.albumTitle}</h5>
            <img src= {props.imageURL} alt="title"></img>
            <p className="card-text">{props.albumDescription}</p>
            <button href="#" className="btn btn-primary">{props.buttonText}</button>
          </div>
      );
};

export default Card;