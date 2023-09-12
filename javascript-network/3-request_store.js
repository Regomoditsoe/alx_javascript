#!/usr/bin/node

const fs = require("fs");

request = require("request");
request(process.argv[2]).pipe(fs.createWriteStream(process.arv[3]));
