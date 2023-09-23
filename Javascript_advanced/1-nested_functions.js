#!/usr/bin/node


var globalVariable = "welcome";
function outer() {
	// alerts contents of the variable globalVariable
	alert(globalVariable);

	// create variable named course
	var course = "Holberton";

	function inner() {
		alert(globalVariable + " " + course);
		var exclamation = "!";

		function inception() {
			alert(globalVariable + " " + course + exclamation);
		}
		inception();
	}
	inner();
}
outer();
