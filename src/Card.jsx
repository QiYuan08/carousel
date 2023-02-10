import React from "react";

const Card = ({ img, header }) => {
  return (
    <div className="card-container">
      <img src={img} alt="image" className="card-img" />
      <h2 className="card-header">{header}</h2>
      <p className="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <a href="#" className="card-link">
        Learn More
      </a>
    </div>
  );
};

export default Card;
