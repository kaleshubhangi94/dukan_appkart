import React, { useState } from "react";

const RegistrationStep1 =({ nextStep, updateFormData, formData }) => {
  const [showHobbyDropdown, setShowHobbyDropdown] = useState(false);
  const hobbiesList = ["Reading", "Gaming", "Traveling", "Cooking", "Sports"];

    const handleChange = (e) => {
      
      const { name, value } = e.target;
      updateFormData({
        userInfo: { ...formData.userInfo, [name]: value },
      });
    };

    const handleGenderChange = (e) => {
      updateFormData({
        userInfo: { ...formData.userInfo, gender: e.target.value },
      });
    };
    const toggleHobbyDropdown = () => setShowHobbyDropdown(!showHobbyDropdown);

    const handleHobbyChange = (e) => {
      const { value, checked } = e.target;
      const updatedHobbies = checked
        ? [...formData.userInfo.hobby, value]
        : formData.userInfo.hobby.filter((hobby) => hobby !== value);
  
      updateFormData({
        userInfo: { ...formData.userInfo, hobby: updatedHobbies },
      });
    };
  
    return (
      <div>
        <h2>Step 1: User Info</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.userInfo.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.userInfo.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.userInfo.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.userInfo.password}
          onChange={handleChange}
        />
      <input
        type="text"
        name="contactNo"
        placeholder="Contact Number"
        value={formData.userInfo.contactNo}
        onChange={handleChange}
      />
        {/* Gender Selection */}
      <div>
        <h3>Gender</h3>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.userInfo.gender === "Male"}
            onChange={handleGenderChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.userInfo.gender === "Female"}
            onChange={handleGenderChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={formData.userInfo.gender === "Other"}
            onChange={handleGenderChange}
          />
          Other
        </label>
      </div>

      {/* Hobby Selection */}
      <div>
        <h3>Hobbies</h3>
        <button type="button" onClick={toggleHobbyDropdown}>
          Select Hobbies
        </button>
        {showHobbyDropdown && (
          <div style={{ border: "1px solid #ccc", padding: "8px", marginTop: "8px" }}>
            {hobbiesList.map((hobby, index) => (
              <label key={index} style={{ display: "block" }}>
                <input
                  type="checkbox"
                  value={hobby}
                  checked={formData.userInfo.hobby.includes(hobby)}
                  onChange={handleHobbyChange}
                />
                {hobby}
              </label>
            ))}
          </div>
        )}
      </div>
      <button onClick={nextStep}>Next</button>

      </div>
      
    );
  };

export default RegistrationStep1;
