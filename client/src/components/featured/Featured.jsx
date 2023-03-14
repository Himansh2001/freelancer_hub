import React from 'react'
import './Featured.scss'

const Featured = ()=>{
    return (
      <div className="featured">
        <div className="container">
          <div className="left">
            <h1>Find the perfect <i>freelance</i> services for your business</h1>
            <div className="search">
              <div className="searchInput">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
                  alt=""
                />
                <input type="text" placeholder="try building mobile app" />
              </div>
              <button>Search</button>
            </div>
            <div className="popular">
              <span>Popular:</span>
              <button>Web Design</button>
              <button>Word</button>
              <button>Wordpress</button>
              <button>Logo Design</button>
              <button>Web Design</button>
            </div>
          </div>
          <div className="right">
            <img
              src=""
              alt=""
            />
          </div>
        </div>
      </div>
    );
}

export default Featured