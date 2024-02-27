document.addEventListener("DOMContentLoaded", function() {
    // Form validation (client-side, basic, and immediate feedback)
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      let isValid = true;
  
      // Roll number validation (e.g., numeric pattern)
      const rollNo = document.getElementById("rollNo");
      const rollNoPattern = /^\d+$/;
      validateField(rollNo, rollNoPattern);
      isValid = isValid && rollNo.classList.length === 0; // Check if valid
  
      // College email validation (e.g., valid email format)
      const email = document.getElementById("email");
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      validateField(email, emailPattern);
      isValid = isValid && email.classList.length === 0; // Check if valid
  
      // Password validation (e.g., minimum length, special characters)
      const password = document.getElementById("password");
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      validateField(password, passwordPattern);
      isValid = isValid && password.classList.length === 0; // Check if valid
  
      if (!isValid) {
        event.preventDefault(); // Prevent form submission if invalid
        alert("Please fix the highlighted errors before submitting.");
      }
    });
  
    // Input field focus/blur styling (optional)
    const inputFields = document.querySelectorAll("input[type=text], input[type=email], input[type=password]");
    inputFields.forEach(field => {
      field.addEventListener("focus", function() {
        field.classList.add("focused");
      });
      field.addEventListener("blur", function() {
        field.classList.remove("focused");
      });
    });
  
    // Password visibility toggle (optional)
    const passwordToggle = document.getElementById("passwordToggle");
    if (passwordToggle) {
      passwordToggle.addEventListener("click", function() {
        const passwordInput = document.getElementById("password");
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        passwordToggle.textContent = passwordInput.type === "password" ? "Show Password" : "Hide Password";
      });
    }
  
    // Additional JavaScript features (optional, consider best practices and security)
    // - AJAX form submission for immediate feedback and server-side validation
    // - Form autocompletion or password visibility options
    // - Dynamic content updates (e.g., showing error messages in specific locations)
    // - Integration with university authentication systems (handle securely)
  });
  
  function validateField(field, pattern) {
    if (!field.value.match(pattern)) {
      field.classList.add("error");
      field.nextElementSibling.textContent = "Invalid format.";
    } else {
      field.classList.remove("error");
      field.nextElementSibling.textContent = "";
    }
  }