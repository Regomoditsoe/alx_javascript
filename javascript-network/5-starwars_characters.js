#!/usr/bin/node

const request = require("request");

id =process.argv[2];
url = `https://swapi-api.alx-tools.com/`;
request.get(url + id, function(error, res, body) {
	if (error) {
		console.log(error);
	}
	
	const data = JSON.parse(body);
	const dd = data.characters;
	for (const b of dd) {
		request.get(b, function(error, res, body1) {
		if (error) {
		console.log(error);
		}
			const data1 = JSON.parse(body1);

			console.log(data1.name);
		});
	}
});
