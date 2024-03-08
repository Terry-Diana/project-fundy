const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

function onChange() {
  const password = document.querySelector('input[name=password]');
  const confirmPassword = document.querySelector('input[name=confirmPassword]');
  if (confirmPassword.value === password.value) {
    confirmPassword.setCustomValidity('');
  } else {
    confirmPassword.setCustomValidity('Passwords do not match');
  }
}

