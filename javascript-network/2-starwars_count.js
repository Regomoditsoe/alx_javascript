#!/usr/bin/node

const request = require("request");

request(process.argv[2], function(error, response, body) {
	if (!error) {
		const results = JSON.parse(body).results;

		console.log(results.reduce((count, movie) => {
			return movie.characters.includes('https://swapi-api.hbtn.io/api/films/18')
			? count + 1
			: count;
		}, 0))
	}
});
