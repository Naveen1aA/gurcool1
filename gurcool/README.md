# poject title 

Multi-Step Form with React

This project implements a responsive multi-step form using React.js. The form collects personal information, address details, and provides a final confirmation step to review the entered data. It includes client-side validation, error handling, local storage persistence, and responsive design for mobile and desktop screens.

# Features

1. Multi-Step Form: Three steps to collect user information.

  1. Personal Information (Name, Email, Phone)

  2. Address Information (Address Line 1, Address Line 2, City, State, Zip Code)

  3. Confirmation (Review and submit entered data)

2. Form Validation: Client-side validation to ensure required fields are filled out before moving to the next step. Error messages are shown for invalid inputs.

3. Local Storage Persistence: Data is saved in the local storage when navigating between steps, allowing users to refresh the page or revisit the form without losing progress.

4. Responsive Design: The form is fully responsive, ensuring a seamless experience on desktop, tablet, and mobile devices.

5. Navigation: Includes back and next buttons to navigate between steps, with a submit button on the last step.

# Technologies Used

 1. React.js: Core framework for building the UI.

 2. React Hooks: useState, useEffect for state management and data persistence.

 3. CSS: Custom styling with a focus on responsiveness.

 4. LocalStorage: Used to store form data persistently.

 5. JavaScript: For form validation and interactivity.

 # usage 
  Step 1: Enter your name, email, and phone number. Validation is enforced to ensure all fields are filled and the email is in a valid format.

  Step 2: Enter your address information. Fields for city, state, and zip code are required.
  
  Step 3: Review the information you’ve entered. You can navigate back to make changes, or submit the form.

  Once submitted, the data is logged to the console for further processing (in a real-world app, this would be sent to a server).