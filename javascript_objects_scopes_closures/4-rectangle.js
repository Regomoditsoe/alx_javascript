#!/usr/bin/node

class Rectangle {
	constructor(w, h) {
		if ((w > 0) && (h > 0)) {
			this.width = w;
			this.height = h;
		}
	}

	print() {
		for (let a = 0; a < this.height; a++) {
			let size = '';
			for (let b = 0; b < this.width; b++) {
				size += 'X';
			}
			console.log(size);
		}
	}
	rotate() {
		const temp = this.width;
		this.width = this.height;
		this.height = temp;
	}
	double() {
		this.height *= 2;
		this.width *= 2;
	}
}
module.exports = Rectangle;
