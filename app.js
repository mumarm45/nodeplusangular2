var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var renderFile = require('ejs').renderFile;
var cors = require('cors');

var index = require('./routes/index');
var task = require('./routes/task');

var app = express();
var port = process.env.PORT || '3000';

// View Engine
app.set('views', path.join(__dirname, 'view'));
app.set('app engine', 'ejs');
app.engine('html', renderFile);

//set static Folder

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index);
app.use('/api', task);

app.listen(port, () => {
    console.log('App server running on ' + port);
})