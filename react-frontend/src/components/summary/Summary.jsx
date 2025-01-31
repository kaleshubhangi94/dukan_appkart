import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Summary = () => {
  const { user, logout } = useContext(AuthContext);  
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login'); 
    } else {
      setUserDetails(user);  
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    logout(); 
    navigate('/login');  
  };
console.log("userDetails",userDetails);
console.log("user",user);


  return (
    <div>
      {userDetails ? (
        <div>
          <h2>Welcome to the Dashboard</h2>
          <p><strong>First Name:</strong> {userDetails.data.user.userInfo.firstName}</p>
          <p><strong>Last Name:</strong> {userDetails.data.user.userInfo.lastName}</p>
          <p><strong>Email:</strong> {userDetails.data.user.userInfo.email}</p>
          <p><strong>Contact No:</strong> {userDetails.data.user.userInfo.contactNo}</p>
          <p><strong>Gender:</strong> {userDetails.data.user.userInfo.gender}</p>
          <p><strong>Hobbies:</strong> {userDetails.data.user.userInfo.hobby.join(', ')}</p>

          <h3>Address Information</h3>
          <p><strong>Country:</strong> {userDetails.data.user?.addressInfo?.country}</p>
          <p><strong>State:</strong> {userDetails.data.user?.addressInfo?.state}</p>
          <p><strong>City:</strong> {userDetails.data.user?.addressInfo?.city}</p>
          <p><strong>Address 1:</strong> {userDetails.data.user?.addressInfo?.address1}</p>
          <p><strong>Address 2:</strong> {userDetails.data.user?.addressInfo?.address2}</p>
          <p><strong>Location:</strong> {userDetails.data.user?.addressInfo?.location}</p>
          <p><strong>Zipcode:</strong> {userDetails.data.user?.addressInfo?.zipcode}</p>

          <h3>Education Information</h3>
          {userDetails.data.user?.educationInfo?.map((edu, index) => (
            <div key={index}>
              <p><strong>Education Type:</strong> {edu?.educationType}</p>
              <p><strong>Passing Year:</strong> {edu?.passingYear}</p>
              <p><strong>School/College:</strong> {edu?.schoolCollege}</p>
              <p><strong>Percentage:</strong> {edu?.percentage}</p>
              <hr />
            </div>
          ))}

          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Summary;
