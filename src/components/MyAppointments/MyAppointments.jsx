import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyAppointments = () => {
  const contextValue = useContext(AuthContext);
  console.log(contextValue);
  return <div>My Appointments</div>;
};

export default MyAppointments;
