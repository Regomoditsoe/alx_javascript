#!/usr/bin/node

const SquarePr = require('./5-square');


class Square extends SquarePr {
	charPrint(i) {
		if (i == undefined) {
			i = 'X';
		}

		for (let a = 0; a < this.height; a++) {
			let b = '';
			for (let c = 0; c < this.width; c++) {
				b += i;
			}
			console.log(b);
		}
	}
}
module.exports = Square;
