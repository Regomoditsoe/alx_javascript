#!/usr/bin/node

function welcomeMessage(fullName) {
	return function() {
		alert("welcome " + fullName);
	};
}
var guilluame = welcomeMessage("Guilluame");
var alex  = welcomeMessage("Alex");
var fred = welcomeMessage("Fred");
