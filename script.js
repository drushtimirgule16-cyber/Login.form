// Get the form
const loginForm = document.getElementById("loginForm");

// Wait for the user to click Login
loginForm.addEventListener("submit", function(event) {

    // Stop the form from refreshing the page
    event.preventDefault();

    // Get the values entered by the user
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    // Check if email is empty
    if (email === "") {

        alert("Please enter your email.");

        return;
    }


    // Check if password is empty
    if (password === "") {

        alert("Please enter your password.");

        return;
    }


    // Check email format
    if (!email.includes("@")) {

        alert("Please enter a valid email address.");

        return;
    }


    // Check password length
    if (password.length < 6) {

        alert("Password must be at least 6 characters long.");

        return;
    }


    // Everything is valid
    alert("Login successful!");

});