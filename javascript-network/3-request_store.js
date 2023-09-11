#!/usr/bin/node

const fs = require("fs");
request = require("request");

if (process.argv[2].length !== 4){
	console.error("Usage: node fetchAndStore.js <https://swapi-api.hbtn.io/api/films/> <outpuFilePath>");
	process.exit(1);
}

const url = process.argv[2];
outputPath = process.argv[3];
request(url, (error, response, body) => {
	if (error) {
		console.error("Error fetching the URL:", error);
		process.exit(1);
	}
	if (response.statusCode !== 200) {
		console.error("Failed to fetch the URL. Status code:", response.statusCode);
		process.exit(1);
	}

	fs.writeFile(outputPath, body, { encoding: "utf-8" }, (err) => {
		if (err) {
			console.error("Error writing to the file:", err);
			process.exit(1);
		}
		console.log("Webpage content successfully saved to", outputPath);
	});
});
	
