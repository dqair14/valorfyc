// Define constants for login credentials
const storedUsername = "user123";
const storedPassword = "password123";

// Login attempt counter
let loginAttempts = 0;

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check login credentials
    if (username === storedUsername && password === storedPassword) {
        window.location.href = "products.html";  // Redirect to products page
    } else {
        loginAttempts++;
        document.getElementById('error-message').textContent = "Invalid login. Try again.";
        
        if (loginAttempts >= 3) {
            window.location.href = "error.html";  // Redirect to error page after 3 tries
        }
    }
});
