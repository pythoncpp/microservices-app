const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('hello world from node js')
})

app.listen(3000, '0.0.0.0', () => {
	console.log('server started on port 4000')
})



