#!/usr/bin/node

class Rectangle {
	constructor (w, d) {
		if ((w > 0) && (h > 0)) {
			this.width = w;
			this.height = h;
		}
	}
	print () {
		for (let a = 0; a < this.height; a++) {
			let size = '';
		for (let b = 0; b < this.height; b++) {
			size += 'X';
		}
			console.log(size);
		}
	}
}
module.exports = Rectangle;
