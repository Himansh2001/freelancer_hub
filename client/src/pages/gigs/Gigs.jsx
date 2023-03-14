import React, { useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data";
const Gigs = () => {
       const [sort,setSort]=useState("sales")  ;
      const  [open,setOpen] =useState(false) ;

     const reSort = (type)=>{
        setSort(type) ;
        setOpen(false) ;
      }
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">GRAPHICS & DESIGN  </span>
        <h1>AI Artist</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAADm5ubz8/MkJCQwMDD19fXw8PBXV1dQUFBZWVlTU1MuLi4pKSlYWFgmJiZeXl5mZmbExMRLS0vd3d2Dg4MfHx+tra2YmJjQ0NDh4eEODg6MjIxvb2/r6+toaGgYGBhDQ0M6OjoUjT9JAAAEKUlEQVR4nO3c6VbqMBQFYApaJgcUUVQcru//kBdvjCXNTihthhPu/n63y5yVM6QFHI2IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIqHj3m9l6tX3IvYwTPWxX69nmvsOVL6vqn9ddHX1VAe1e1bJXR3fm4brSbiYplhbG2++qX5/9V74/Vo35NM3yBqs/Dlb9+O69dlMdmheSqHfGqje+S6efxrXVrIhE/TAX/elLvfuqZSk/UeuP9qJ9DfWpfbH8EOs7a81PnsvtCKul8ES1A/RG+GxfXs1EtxsrRfd886K+BTcIHhogRavqwrslW3CH3ESFAVZb/z1/0D1ChwYOcH2kqsbX6C6RIeIAr/xHmr3xJUxUebWIA7wcH79zjLpNtZTWUesVWuZthwD3IV6gexeyQsQ7eNEpQFeiiqpFvINdUlQRH+LQAF2JKuZ0gwPsmqIKbjdCahHXYLcm0xCcqMNTVHGM/vy7iAO8PjlAsYk6ZA62ja9giHkTFQd41StAkbUYqgY1cUOjXqAFnTYmTDjEVa4QQ8zBNlGJOoE72D9FFdxubnLsIk7Rvk2mIWZohBwTJjz6k9diuEFvw7WYeC5OZmgRQ2tQw7uYtBZrGGCYHfyGazFhouImE6IGNccBLlWIkxv054d30UOOWkwTYtwa1DK+nsI1OOwkg2Q7wIU/i7rgRI3+dYbpMkWKKlnazQQGGLbJNDIMDdxkQo4JU/IDHA4w3KC3JT7ApaxBDSdqpKf+yTxtiioJhwZO0RhjwpQsUadwB+OmqJJoLuYLMNEBDs/B+CmqJJiLqedgW/Q3cDlTVIn8sQ0eEzEHvS3qG7jcKapE/NgGn2RiHbbdotVi/hrUIn1sg2sw1ZgwRZmLuY5qWIRElZOiCm43A0LEAaZvMo3AiZr3qIbh0d8zRBxg2kFvC1iL0mpQw7vY48uaEo5qWKADnIyjGhako0o5qmEBalFqDWqDD3CSjmrYwLko66iGDfqGv/QUVXC76fRrG3lHNaz323B8kpExJkw9f22Dx4SEQW/rVYtl1KDW49c2eT586Q8PDc9Xi0oYEyZHR3Ulaild9NBJtVhWDWo4UWEtSnyi78IxF+2hIflxyQ8nqvVz6TJTVMHtZm7uIh4TsptMo0OilnNUw44+9ct+ou/iyNAouQY1nKg/tVjaUQ1zvNj4DrG8oxrmHBrnkKKK44z6UnyTaeBEhQVaXooquN2gqAsN0FWLlhJrUMPvblpkvpPpqkOilpuiCu6oB8rsooeO1GLJNajhofGj1DFh8oR4HgF6EvUcUlRxtJvym0wDDo3Sx4QJjP6yB73NqsXzqUGttYvntoPfjKFxLmPCNP76DfDrLAMcjab6f1K/yfsfhaE87xbrxe7If9wmIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiov/cX08aJw5PInkjAAAAAElFTkSuQmCC"
              alt=""
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="rightmenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          <GigCard item={gigs[0]} />
          <GigCard item={gigs[1]} />
          <GigCard item={gigs[2]} />
          <GigCard item={gigs[3]} />
          <GigCard item={gigs[4]} />
          <GigCard item={gigs[5]} />
          <GigCard item={gigs[6]} />
          <GigCard item={gigs[7]} />
          <GigCard item={gigs[0]} />
          <GigCard item={gigs[1]} />
          <GigCard item={gigs[2]} />
        </div>
      </div>
    </div>
  );
};
export default Gigs;
