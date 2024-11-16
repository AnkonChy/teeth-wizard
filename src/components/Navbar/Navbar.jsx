import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="min-h-20 bg-blue-800 text-white flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold ml-4">TEETH WIZARD</h1>
      </div>
      <div className="text-lg font-medium flex gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allTreatments">All Treatments</NavLink>
        <NavLink to="/myAppointments">My Appointments</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div>
        <button className="btn mr-4">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
