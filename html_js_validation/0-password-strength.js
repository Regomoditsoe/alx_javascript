// implementing a JavaScript validation to check password strength.

function validatePassword() {
	let password = document.getElementById("password").value;
	let errorElement = document.getElementById("error");
	errorElement.textContent = "";

	let digitRegex = /[0-9]/;
	let specialCharRegex = /[!@#$%^&*]/;
	let lowercaseRegex = /[a-z]/;
	let uppercaseRegex = /[A-Z]/;
	let lengthRegex = /.{8,}/;

	// Check if password adheres to criteria
	let isDigitValid = digitRegex.test(password);
	let isSpecialCharValid = specialCharRegex.test(password);
	let isLowercaseValid = lowercaseRegex.test(password);
	let isUppercaseValid = uppercaseRegex.test(password);
	let isLengthValid = lengthRegex.test(password);

	if (
		isDigitValid &&
		isSpecialCharValid &&
		isLowercaseValid &&
		isUppercaseValid &&
		isLengthValid &&
	) {
		return true;
	} else {
		// Password is invalid
		errorElement.textContent =
			"Password must at least be 8 characters long, must contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.";
		return false;
	}
}
document.getElementById("validatePassword").addEventListener("submit", function (event) {
	if (!validatePassword()) {
		event.preventDefault();
	}
});

