import React from "react";

const RegistrationStep3 = ({ nextStep, prevStep, updateFormData, formData }) => {
  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducationInfo = formData.educationInfo.map((edu, i) =>
      i === index ? { ...edu, [name]: value } : edu
    );
    updateFormData({ educationInfo: updatedEducationInfo });
  };

  const addEducation = () => {
    const newEducation = {
      educationType: "",
      passingYear: "",
      schoolCollege: "",
      percentage: "",
    };
    updateFormData({
      educationInfo: [...formData.educationInfo, newEducation],
    });
  };

  const removeEducation = (index) => {
    const updatedEducationInfo = formData.educationInfo.filter(
      (_, i) => i !== index
    );
    updateFormData({ educationInfo: updatedEducationInfo });
  };

  return (
    <div>
      <h2>Step 3: Education Info</h2>
      {formData.educationInfo.map((edu, index) => (
        <div key={index} style={{ marginBottom: "16px", borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>
          <input
            type="text"
            name="educationType"
            placeholder="Education Type (e.g., High School, Bachelor's)"
            value={edu.educationType}
            onChange={(e) => handleEducationChange(index, e)}
          />
          <input
            type="text"
            name="passingYear"
            placeholder="Passing Year"
            value={edu.passingYear}
            onChange={(e) => handleEducationChange(index, e)}
          />
          <input
            type="text"
            name="schoolCollege"
            placeholder="School/College"
            value={edu.schoolCollege}
            onChange={(e) => handleEducationChange(index, e)}
          />
          <input
            type="text"
            name="percentage"
            placeholder="Percentage/Grade"
            value={edu.percentage}
            onChange={(e) => handleEducationChange(index, e)}
          />
          {index > 0 && (
            <button onClick={() => removeEducation(index)}>Remove</button>
          )}
        </div>
      ))}
      <button onClick={addEducation}>Add More Education</button>
      <div>
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};


export default RegistrationStep3;
