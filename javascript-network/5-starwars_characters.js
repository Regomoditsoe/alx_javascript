#!/usr/bin/node

const request = require("request");

const id = process.argv[2];
url = `https://swapi-api.hbtn.io/api/films/`;
request.get(url + id, function(error, response, body) {
	if (error) {
		console.log(error);
	}
	
	const data = JSON.parse(body);
	const nameChar = data.characters;

	for (const b of nameChar) {
		request.get(b, function(error, response, bodyA) {
		if (error) {
		console.log(error);
		}
			const dataA = JSON.parse(bodyA);

			console.log(dataA.name);
		});
	}
});
