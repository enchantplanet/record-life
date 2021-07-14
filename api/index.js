const bodyParser = require('body-parser');
const app = require('express')();

const recordData = require('./json/record-list.json');

app.use(bodyParser.json());
app.all('/getJSON', (req, res) => {
  res.json(recordData)
})

app.get('/record/record-list', function(req, res) {
    res.json(recordData)
});

app.get('/record/record-detail', function(req, res) {
    res.json(recordData)
});

module.exports = app