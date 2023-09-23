#!/usr/bin/node

function createClassRoom(numberOfStudents) {
	function studentSeat(seat) {
		return function() {
			return seat;
		};
	}
	var students = [];
	for (var a = 0; a < numberOfStudents; a++) {
		var seatNumber = a + 1;
		var getSeatNumber = studentSeat(seatNumber);
		students.push(getSeatNumber);
	}
	return students;
}
classRoom = createClassRoom(10);
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
