import React from 'react';

const Confirmation = ({ formData, prevStep, handleSubmit }) => {
  return (
    <div>
      <h2>Step 3: Confirm Information</h2>
      <ul>
        <li><strong>Name:</strong> {formData.name}</li>
        <li><strong>Email:</strong> {formData.email}</li>
        <li><strong>Phone:</strong> {formData.phone}</li>
        <li><strong>Address Line 1:</strong> {formData.address1}</li>
        <li><strong>Address Line 2:</strong> {formData.address2}</li>
        <li><strong>City:</strong> {formData.city}</li>
        <li><strong>State:</strong> {formData.state}</li>
        <li><strong>Zip Code:</strong> {formData.zip}</li>
      </ul>

      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Confirmation;
