document.addEventListener("DOMContentLoaded", function() {
    const profileForm = document.querySelector(".profileForm");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const loginButton = document.getElementById("loginButton");

    if (profileForm) {
        profileForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const username = usernameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            const confirmPassword = confirmPasswordInput.value.trim();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (username === "" || email === "" || password === "" || confirmPassword === "") {
                alert("Please fill in all fields.");
            } else if (!email.match(emailRegex)) {
                alert("Please enter a valid email address.");
            } else if (password !== confirmPassword) {
                alert("Passwords do not match.");
            } else {
                window.location.href = "index.html";
            }
        });
    }

    function onChange() {
        const password = document.querySelector('input[name=password]');
        const confirmPassword = document.querySelector('input[name=confirmPassword]');
        if (confirmPassword && password && confirmPassword.value === password.value) {
            confirmPassword.setCustomValidity('');
        } else if (confirmPassword) {
            confirmPassword.setCustomValidity('Passwords do not match');
        }
    }

    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', onChange);
    }

    if (loginButton) {
        loginButton.addEventListener("click", function() {
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === "" || password === "") {
                alert("Please fill in all fields.");
            } else if (!email.match(emailRegex)) {
                alert("Please enter a valid email address.");
            } else {
                window.location.href = "index.html";
            }
        });
    }
});


