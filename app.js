var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var renderFile = require('ejs').renderFile;
var cors = require('cors');


var index = require('./routes/index');
var task = require('./routes/task');

var app = express();
var port = process.env.PORT || '3000';
var http = require('http').createServer(app);
var io = require('socket.io')(http);
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


http.listen(port, () => {
    console.log('App server running on ' + port);
})

io.on("connection", socket => {



    socket.on('disconnect', function() {
        console.log('USER DISCONNECTED');
    });
    socket.on("add-message", message => {
        console.log(message);
        socket.broadcast.emit("message", message);
    })
})

io.emit("message", "Welcome to Chat");