// Implementing Javascript to generate a dynamic number of text input fields

function generateInputFields(inputFieldsNum) {
	let inputContainer = document.getElementById("inputContainer");
	inputContainer.innerHTML = "";

	for (let a = 1; a <= inputFieldsNum; a++) {
		let input = document.createElement("input");
		input.type ="text";
		input.name = `fiels${a}`;
		input.placeholder = `Field ${a}`;
		inputContaainer.appendChild(input);
	}
}

function validateForm(event) {
	event.preventDefault();
	let inputFieldsNum = document.getElementById("inputFieldsNum").value;

	for (let a = 1; a <= inputFieldsNum; a++) {
		let input = document.querySelector(`[name="field${a}"]`);
		if (!input.value) {
			alert("Please fill in all fields");
			return;
		}
	}
	document.getElementById("dynamicForm").submit();
}
// Add event listenrs
document.getElementById("inputFieldsNum").addEventListener("change", function () {
	let inputFieldsNum = this.value;
	generateInputFields(inputFieldsNum);
});

document.getElementById("dynamicForm").addEventlistener("submit", validateForm);

generateInputFields(1);
	
