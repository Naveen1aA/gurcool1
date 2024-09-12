import React, { useState } from 'react';

const AddressInfo = ({ formData, handleChange, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  // Simple validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.address1) newErrors.address1 = 'Address Line 1 is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zip) newErrors.zip = 'Zip Code is required';
    return newErrors;
  };

  // Handle next button click
  const handleNext = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      nextStep();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <div>
        <input
          type="text"
          value={formData.address1}
          onChange={handleChange('address1')}
          placeholder="Address Line 1"
        />
        {errors.address1 && <p style={{ color: 'red' }}>{errors.address1}</p>}
      </div>

      <div>
        <input
          type="text"
          value={formData.address2}
          onChange={handleChange('address2')}
          placeholder="Address Line 2"
        />
      </div>

      <div>
        <input
          type="text"
          value={formData.city}
          onChange={handleChange('city')}
          placeholder="City"
        />
        {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
      </div>

      <div>
        <input
          type="text"
          value={formData.state}
          onChange={handleChange('state')}
          placeholder="State"
        />
        {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}
      </div>

      <div>
        <input
          type="text"
          value={formData.zip}
          onChange={handleChange('zip')}
          placeholder="Zip Code"
        />
        {errors.zip && <p style={{ color: 'red' }}>{errors.zip}</p>}
      </div>

      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default AddressInfo;
