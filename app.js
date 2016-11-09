var express = require('express')
var app = express()

var todos = [
	{ _id: 1, text: 'Clean house' },
	{ _id: 2, text: 'Clean car' },
	{ _id: 3, text: 'Clean office' }
];

var databases = [
	{ _id: 1, name: 'PT18' },
	{ _id: 2, name: 'SNTP' }
];

app.get('/', function (req, res) {
  res.send('API!')
})

// API
app.get('/api/todos', function (req, res) {
	var query = req.query;

	// Some validation
	if (query.fail) {
		res.status(500).send('Invalid query parameters');
	} else {
		res.send(todos);
	}
});

app.get('/api/databases', function (req, res) {
	res.send(databases);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
