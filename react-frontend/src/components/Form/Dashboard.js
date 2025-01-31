import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ formData, prevStep, handleSubmit, error }) => {
  const { userInfo, addressInfo, educationInfo } = formData;
  console.log("userInfo==", userInfo);
  console.log("userformDataInfo==", formData);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/logout"
      );

      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>

      <h2>Confirm Your Details</h2>
      <h3>User Info:</h3>
      <p>First Name: {userInfo.firstName}</p>
      <p>Last Name: {userInfo.lastName}</p>
      <p>Email: {userInfo.email}</p>
      <p>Contact No: {userInfo.contactNo}</p>
      <p>Gender: {userInfo.gender}</p>
      <p>Hobbies: {userInfo.hobby.join(", ")}</p>

      <h3>Address Info:</h3>
      <p>Country: {addressInfo.country}</p>
      <p>State: {addressInfo.state}</p>
      <p>City: {addressInfo.city}</p>
      <p>Address1: {addressInfo.address1}</p>
      <p>Address2: {addressInfo.address2}</p>
      <p>Location: {addressInfo.location}</p>
      <p>Zipcode: {addressInfo.zipcode}</p>

      <h3>Education Info:</h3>
      {educationInfo.map((edu, index) => (
        <div key={index}>
          <p>Education Type: {edu.educationType}</p>
          <p>Passing Year: {edu.passingYear}</p>
          <p>School/College: {edu.schoolCollege}</p>
          <p>Percentage: {edu.percentage}</p>
        </div>
      ))}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={prevStep}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Dashboard;
