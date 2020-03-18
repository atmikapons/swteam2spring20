var express = require('express');
var mysql = require('mysql');
var http = require('http');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));

var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'zippypark',
    password: 'goyhVynIiLcJgHpN',
    database: 'zippypark'
});

var routes = require('./routes/index.js')(app,db);
db.connect( function (err) {
    if ( err ) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + db.threadId);
});

var httpServer = http.createServer( app );
httpServer.listen(8080);