export default function Validation(values) {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Corrected email pattern
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // Corrected password pattern
  
    if (!values.name || values.name.trim() === '') {
      errors.name = "Name should not be empty";
    } else if (values.name.length < 3 || values.name.length > 30) {
      errors.name = "Name must be between 3 and 30 characters";
    } else {
      errors.name = "";
    }
  
    if (!values.email || values.email.trim() === '') {
      errors.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "Invalid Email";
    } else {
      errors.email = "";
    }
  
    if (!values.password || values.password.trim() === '') {
      errors.password = "Password should not be empty";
    } else if (!passwordPattern.test(values.password)) {
      errors.password = "Password must contain at least one lowercase, one uppercase, one digit, and be at least 8 characters long";
    } else {
      errors.password = "";
    }
  
    return errors;
  }
  