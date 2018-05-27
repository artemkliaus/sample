'use strict'

const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	const html = fs.readFileSync('index.html', 'utf-8');
	res.send(html);
})

app.listen(port, (err) => {
	if (err) {
		return console.log('Error is: ', err)
	}

	console.log(`server is listening on ${port}`)
})
