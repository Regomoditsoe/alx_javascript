#!/usr/bin/node

const request = require("request");

request(process.argv[2], function(error, response, body) {
	if (!error) {
		const results = JSON.parse(body).results;

		const count = results.reduce((count, movie) => {
			return movie.characters.find((wedgeAntilles) => wedgeAntilles.endsWith('/18'))
			? count + 1
			: ocount;
		}, 0)
	}
});
