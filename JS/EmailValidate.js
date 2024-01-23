function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(email);
  }
  
  const emailToValidate = document.getElementById('email').value;
  if (validateEmail(emailToValidate)) {
    console.log("Valid email address");
  } else {
    console.log("Invalid email address");
  }
  