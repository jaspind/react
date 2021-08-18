import React from "react";

const Shop = () => {
  return (
    <div className="shop">
      
      <div className="container">
      <h1>DINE IN</h1>
        <div className="row">
          <div className="col-6">
          <img className="dine2" src="/img/dine3.jpg" alt="Pizza"  width="450px;"/>
          
          <h2 className="take"> TAKEAWAY <br>
            </br>  DEALS</h2>
            <p className="deal">Deals from £11.99</p>
            </div>
            <div className="col-6">
            <img className="dine3"  src="/img/dine2.jpg" alt="Pizza"  width="450px;"/>
           
            <h2 className="share"> THE INDIVIDUAL MEAL</h2>
            <p className="drink"> DRINK + SALAD £15.00 </p>
          </div>
        </div>
            <div className="row">
              <div className="col-6">
             <img className="dine1" src="/img/dine1.jpg" alt="Pizza"  width="450px;"/>
              <h2 className="big"> THE BIG SHARER</h2>
            <p className="biggi">  FOR 2 £29.99</p>
              </div>
              <div className="col-6">
              <img  className="arrow" src="/img/arrow.jpg" alt="Pizza"  width="450px;"/>
              <h2 className="arrows"> 20% STUDENT DISCOUNT </h2>
        
              </div>
              </div>
      </div>
    </div>
  );
};

export default Shop;
