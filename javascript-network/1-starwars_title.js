#!/usr/bin/node

const request = require("request");

episode = process.argv[2];
API_URL = `https://swapi-api.hbtn.io/api/films/`;

request(API_URL + episode, function(err, response, body) {
	if (err) {
		console.log(err);
	} else if (response.statusCode === 200) {
		const responseJSON = JSON.parse(body);
		console.log(responseJSON.title);
	} else {
		console.log("Error code:" + response.statusCode);
	}
});
