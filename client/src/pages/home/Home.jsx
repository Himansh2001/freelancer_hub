import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {<CatCard item={cards[0]} />}
        {<CatCard item={cards[1]} />}
        {<CatCard item={cards[2]} />}
        {<CatCard item={cards[3]} />}
        {<CatCard item={cards[4]} />}
        {<CatCard item={cards[5]} />}
        {<CatCard item={cards[6]} />}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/743/514/original/green-check-mark-icon-in-a-circle-free-vector.jpg"
                alt=""
              />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/743/514/original/green-check-mark-icon-in-a-circle-free-vector.jpg"
                alt=""
              />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/743/514/original/green-check-mark-icon-in-a-circle-free-vector.jpg"
                alt=""
              />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/743/514/original/green-check-mark-icon-in-a-circle-free-vector.jpg"
                alt=""
              />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="" controls></video>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>friverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/743/514/original/green-check-mark-icon-in-a-circle-free-vector.jpg"
                alt=""
              />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/743/514/original/green-check-mark-icon-in-a-circle-free-vector.jpg"
                alt=""
              />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/743/514/original/green-check-mark-icon-in-a-circle-free-vector.jpg"
                alt=""
              />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Friverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {<ProjectCard item={projects[0]} />}
        {<ProjectCard item={projects[1]} />}
        {<ProjectCard item={projects[2]} />}
        {<ProjectCard item={projects[3]} />}
        {<ProjectCard item={projects[4]} />}
        {<ProjectCard item={projects[5]} />}
        {<ProjectCard item={projects[6]} />}
      </Slide>
    </div>
  );
};
export default Home;
