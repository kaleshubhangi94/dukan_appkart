import React, { useState } from "react";
import Step1 from "./RegistrationStep1";
import Step2 from "./RegistrationStep2";
import Step3 from "./RegistrationStep3";
import Summary from "./Dashboard";
import axios from "axios";

const RegistrForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      userInfo: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        contactNo: "",
        gender: "",
        hobby: [],
      },
      addressInfo: {
        country: "",
        state: "",
        city: "",
        address1: "",
        address2: "",
        location: "",
        zipcode: "",
      },
      educationInfo: [
        {
          educationType: "",
          passingYear: "",
          schoolCollege: "",
          percentage: "",
        },
      ],
    });
  
    const [error, setError] = useState("");
  
    // Function to handle form submission (API Call)
    const handleSubmit = async () => {
      try {
        // Make the API call to register the user
        const response = await axios.post(
          "http://localhost:5000/api/users/register",
          formData
        );
  
        // Check response and handle success
        if (response.status === 201) {
          alert("User registered successfully!");
          console.log("Registered user data:", response.data.data);
        }
      } catch (err) {
        // Handle error response
        console.error("Error during registration:", err.response?.data || err);
        setError(err.response?.data?.message || "Something went wrong.");
      }
    };
  
    // Function to handle "Next" and "Previous" buttons
    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);
  
    // Function to handle form data updates
    const updateFormData = (newData) => {
      setFormData((prev) => ({
        ...prev,
        ...newData,
      }));
    };
  
    // Render form steps
    switch (step) {
      case 1:
        return <Step1 nextStep={nextStep} updateFormData={updateFormData} formData={formData} />;
      case 2:
        return <Step2 nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} formData={formData} />;
      case 3:
        return <Step3 nextStep={nextStep} prevStep={prevStep} updateFormData={updateFormData} formData={formData} />;
      case 4:
        return (
          <Summary
            formData={formData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
            error={error}
          />
        );
      default:
        return <div>Invalid Step</div>;
    }
  };

export default RegistrForm;
