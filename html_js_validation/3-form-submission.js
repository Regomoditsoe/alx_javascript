// Implementing JavaScript to handle form submissions and validations before submitting

function handleFormSubmit(event) {
	event.preventDefault();
	
	let name = document.getElementById("name").value;
	let email = doument.getElementById("email").value;
	let sucessElement = document.getElementById("sucess");
	let errorElement = document.getElementById("error");

	sucessElement.textContent = ""; 
	errorElement.textContent = "";

	if (!name || !email) {
		errorElement.textContent = "Please fill in all required fields.";
		return;
	} else {
		sucessElement.textContent = "Form submitted sucessfully!";
	}
}

document.getElementById("submitForm").addEventListener("submit", handleFormSubmit);
