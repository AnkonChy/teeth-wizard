import React from "react";
import Banner from "../Banner/Banner";
import { NavLink, useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import FeedBack from "../FeedBack/FeedBack";

const Home = () => {
  const { servicesData, feedbackData } = useLoaderData();
  console.log(servicesData);
  return (
    <div className="w-10/12 mx-auto max-w-[1200px]">
      <Banner></Banner>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
        {servicesData.slice(0, 4).map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
      </div>
      <button className="btn btn-info block mx-auto">
        <NavLink to="/allTreatments">Show more</NavLink>
      </button>

      <FeedBack feedbackData={feedbackData}></FeedBack>
    </div>
  );
};

export default Home;
