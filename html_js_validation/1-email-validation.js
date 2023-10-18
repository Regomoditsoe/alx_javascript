function validateEmail() {
	let email = document.getElementById("email").value;
	let errorElement = document.getElementById("error");
	errorElement.textContent = "";

	// Basic email format check
	let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0.-]\.[a-zA-Z]{2,4}$/;

	if (emailRegex.test(email)) {
		return true;
	} else {
		errorElement.textContent = "Please enter a valid email address";
		return false;
	}
}

document.getElementById("emailForm").addEventListener("submit", function (event) {
	if (!validateEmail()) {
		event.preventDefault();
	}
});
