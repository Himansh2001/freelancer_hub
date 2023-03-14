import React from 'react'
import { Link } from 'react-router-dom'
import "./GigCard.scss"
const GigCard= ({item})=>{
    return (
      <Link to="/gig/123" className='link'>
        <div className="gigCard">
          <img src={item.img} alt="" />
          <div className="info">
            <div className="user">
              <img src={item.pp} alt="" />
              <span>{item.username}</span>
            </div>
            <p>{item.desc}</p>
            <div className="star">
              <img
                src="https://static4.depositphotos.com/1026550/376/i/450/depositphotos_3763236-stock-photo-gold-star.jpg"
                alt=""
              />
              <span>{item.star}</span>
            </div>
          </div>
          
          <div className="details">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png"
              alt=""
            />
            <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
            </div>
          </div>
        </div>
      </Link>
    );
}
export default GigCard