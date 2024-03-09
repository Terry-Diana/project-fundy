document.addEventListener("DOMContentLoaded", function() {
    const profileForm = document.querySelector(".profileForm");
    const profileButton = document.getElementById("profileButton");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

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

    function onChange() {
        const password = document.querySelector('input[name=password]');
        const confirmPassword = document.querySelector('input[name=confirmPassword]');
        if (confirmPassword.value === password.value) {
            confirmPassword.setCustomValidity('');
        } else {
            confirmPassword.setCustomValidity('Passwords do not match');
        }
    }

    confirmPasswordInput.addEventListener('input', onChange);
    passwordInput.addEventListener('input', onChange);

    const contributeButton = document.getElementById("contributeButton");

    if (contributeButton) {
        contributeButton.addEventListener("click", function() {
            const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

            
            if (!selectedPaymentMethod) {
                alert("Please select a payment method.");
                return;
            }

            const paymentMethod = selectedPaymentMethod.value;

            // Simulate payment processing based on the selected payment method
            switch (paymentMethod) {
                case "paypal":
                    simulatePayPalPayment();
                    break;
                case "stripe":
                    simulateStripePayment();
                    break;
                case "mastercard":
                    simulateMastercardPayment();
                    break;
                default:
                    alert("Invalid payment method.");
                    break;
            }
        });
    } else {
        console.error("Button element with id 'contributeButton' not found.");
    }
});

function simulatePayPalPayment() {
    console.log("Processing payment via PayPal...");

    displayThankYouMessage();
}

function simulateStripePayment() {
    console.log("Processing payment via Stripe...");
    displayThankYouMessage();
}

function simulateMastercardPayment() {
    console.log("Processing payment via Mastercard...");
    displayThankYouMessage();
}

function displayThankYouMessage() {
    alert("Thank you for your contribution!");

}
