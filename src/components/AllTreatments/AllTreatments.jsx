import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const AllTreatments = () => {
  const services = useLoaderData();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto max-w-[1200px] gap-6 my-6">
      {services.map((service) => (
        <ServiceCard service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default AllTreatments;
