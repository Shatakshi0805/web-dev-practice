const express = require('express');
const app = express();
const path = require('path');//useful for code line 14... path.join() funcn

app.set('view engine', 'ejs');//after using view engine, it assumes there must be 
//a views folder containing templates to be rendered

app.get('/', (req, res) => {
    // res.send("hi");
    res.render('home.ejs');//'views' folder is created the content of which acts a
    //template to display. OR use 'home'
})

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', {rand: num});//passing random number num variable as argument
    //to random.ejs file and must be in key: value pair
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;//here const subreddit is a key to which 
    //value is being passed through the value- :subreddit routing path
    res.render('subreddit', {subreddit});
})

app.set('views', path.join(__dirname, '/views'))//use to run this app or index.js file
//from anywhere  either from different directories

app.listen(8080, () => {
    console.log("LISTENING!");
})