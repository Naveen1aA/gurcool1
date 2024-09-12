import React, { useState, useEffect } from 'react';
import AddressInfo from '../AdressInfo';
import Confirmation from '../Confirmation';
import PersonalInfo from '../PersonalInfo';
import './index.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });



  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  // Save data to localStorage on every change
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  // Handle field change
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };
  
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Form Submitted: ", formData);
    alert("data submitted successfully.....")
  };

  
  switch (step) {
    case 1:
      return (
        <PersonalInfo
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <AddressInfo
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Confirmation
          formData={formData}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
        />
      );
    default:
      return null;
  }
};


export default MultiStepForm