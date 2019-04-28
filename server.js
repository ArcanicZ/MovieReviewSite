const express = require('express');
const app = express();
const path = require('path');
var fs = require('file-system')
const router = express.Router();

app.use(express.static('client'))

function readFile(filename)
{
  var contents = fs.readFileSync(filename);
  return contents.toString()
}

app.get('/home', function (req, resp){
    resp.send(readFile('client/test.html'));
});

app.listen(4000);

console.log('Running at Port 4000');
