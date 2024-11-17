import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, treatment, image, description, cost } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={treatment} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {treatment}
          <div className="badge badge-secondary">$ {cost}</div>
        </h2>
        <p title={description}>{description.slice(0, 200)}...</p>
        <div className="card-actions justify-end">
          <NavLink to={`/details/${id}`}>
            <button className="badge badge-outline p-4 bg-secondary text-white">
              Checkout More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
