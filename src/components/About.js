import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1>Our Most Popular Deals</h1>
      <div className="container">
        <div className="row">
              <div className="col-6 ">
                <div className="src">
                  <img  className="prom" src="/img/promo1.jpg" alt="Pizza"  width="550px;"/>
                </div>
              </div>
           
            <div className="col-6">
                <div className="about__img">
                  <img className="promo"src="/img/promo.jpg" alt="Pizza"  width="550px;"/>
                </div>
          </div>
          <div className="about__btn">
              <a href="" className="btn btn-smart">
                View all deals
              </a>
            </div>
        </div>
      </div>
 </div>
  );
};

export default About;
