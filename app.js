var express = require('express');

var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');
app.get('/', (req,res) => {
    res.status(200);
    // res.send('welcome to express framework.');
    // res.sendFile(__dirname + '/home.html')
    res.render('home')
})
app.get('/home', (req,res) => {
    res.status(200);
    // res.send('welcome to express framework.');
    // res.sendFile(__dirname + '/home.html')
    res.render('home')
})

app.get('/about', (req,res) => {
    res.status(200);
    // res.send('welcome to express framework.');
    // res.sendFile(__dirname + '/home.html')
    res.render('about')
})

app.get('/profile/:name', (req, res) => {
    res.status(200);
    // res.send('you requested to see profile for id: ' + req.params.id);
    var data = [
        {
            name: 'Hari',
            age: 23,
            job: 'angular dev'
        },
        {
            name: 'Krishna',
            age: 23,
            job: 'nodejs dev'
        }
    ];
    res.render('profile', {person: req.params.name, data: data})
})

app.listen(4000, '192.168.1.6');