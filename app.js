var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index', {title:"CV - Sebastian Arriola"});
});

app.listen(port, () => console.log('listening on port ' + port));