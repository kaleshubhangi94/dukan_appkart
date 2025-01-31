    import React from "react";

    const RegistrationStep2 = ({ nextStep, prevStep, updateFormData, formData }) => {
      const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData({
          addressInfo: { ...formData.addressInfo, [name]: value },
        });
      };
    
      return (
        <div>
          <h2>Step 2: Address Info</h2>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.addressInfo.country}
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.addressInfo.state}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.addressInfo.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address1"
            placeholder="Address Line 1"
            value={formData.addressInfo.address1}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address2"
            placeholder="Address Line 2"
            value={formData.addressInfo.address2}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.addressInfo.location}
            onChange={handleChange}
          />
          <input
            type="text"
            name="zipcode"
            placeholder="Zipcode"
            value={formData.addressInfo.zipcode}
            onChange={handleChange}
          />
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      );
    };
    
export default RegistrationStep2;
