import { useState } from "react";
import './index.css'

const PersonalInfo = ({ formData, handleChange, nextStep }) => {
    const [errors, setErrors] = useState({});

  //validating weather all the fields are filled
    const validate = () => {
      const newErrors = {};
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email ) newErrors.email = 'Valid email is required';
      if (!formData.phone) newErrors.phone = 'Phone is required';
      return newErrors;
    };
  
    //if all fields are filled we will move to the next page
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
        <h2>Step 1: Personal Information</h2>
        <div className='personal-information-container'>
        <input
          type="text"
          value={formData.name}
          onChange={handleChange('name')}
          placeholder="Name"
        />
        {errors.name && <p>{errors.name}</p>}
        
        <input
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email}</p>}
  
        <input
          type="phone"
          value={formData.phone}
          onChange={handleChange('phone')}
          placeholder="Phone"
        />
        {errors.phone && <p>{errors.phone}</p>}
  
        <button onClick={handleNext}>Next</button>
      </div>
      </div>
    );
  };
  
  export default PersonalInfo