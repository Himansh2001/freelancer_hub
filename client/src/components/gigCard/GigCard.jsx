import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Link } from 'react-router-dom'
import newRequest from '../../utils/newRequest';
import "./GigCard.scss"
const GigCard= ({item})=>{

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigUser"],
    queryFn: () =>
      newRequest
        .get(
          `/users/${item.userId}`
        )
        .then((res) => {
          return res.data;
        }),
  });


    return (
      <Link to={`/gig/${item._id}`} className="link">
        <div className="gigCard">
          <img src={item.cover} alt="" />
          <div className="info">
            {isLoading ? (
              "loading"
            ) : error ? (
              "something went wrong!"
            ) : (
              <div className="user">
                <img src={data.img} alt="" />
                <span>{data.username}</span>
              </div>
            )}
            <p>{item.desc}</p>
            <div className="star">
              <img
                src="https://static4.depositphotos.com/1026550/376/i/450/depositphotos_3763236-stock-photo-gold-star.jpg"
                alt=""
              />
              <span>
                {!isNaN(Math.round(item.totalStars / item.starNumber)) &&
                  Math.round(item.totalStars / item.starNumber)}
              </span>
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