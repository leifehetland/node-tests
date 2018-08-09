const express = require('express');

let app = express();

app.get('/', (req, res) => {
	res.status(404).send({
		error: "Page Not Found",
		name: 'ToDo App v0.0.1'
	});
});

//  HTTP get route

app.get('/users', (req, res) => {
	res.send([
		{ 
			name: 'Stephy'
		},
		{ 
			name: 'Benjam',
			age: 45
	 	},
		{ 
			name: 'Raz' 
		},
	]);
});

app.listen(3000);
module.exports.app = app;