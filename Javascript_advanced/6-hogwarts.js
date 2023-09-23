#!/usr/bin/node

const studentHogwarts = (function () {
	var privateScore = 0;
	var name = null;

	fuction(changeScoreBy(points) {
		privateScorePoints += points;
	}
	return {
		setName: function(newName) {
			name = newName;
		},
		rewardStudent: function() {
			changeScoreBy(1);
		},
		penalizeStudent: function() {
			changrScoreBy(-1);
		},
		getScore: function() {
			return name + ': ' + privateScore;
		},
	};
})();

var Harry = Object.create(studentHogwarts);
harry.setName("Harry");

harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

var Draco = Object.create(studentHogwarts);
draco.setName("Draco");

draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
