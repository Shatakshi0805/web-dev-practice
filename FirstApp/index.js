const express = require('express');
const app = express();//setting express server
// console.dir(app);

// app.use((req, res) => {
//     console.log("yo, i just received a request");
//     // res.send("<h1>hello!</h1>");
//     res.send("heeelo");
// })

app.listen(8000, () => {
    console.log("listening on port 8000!");
})

// app.get('*', (req, res) => {
//     res.send("<h1>i dont the page your requesting for!</h1>");
// })

app.get('/' , (req, res) => {
    res.send("<h1>This is homepage!,demn</h1>")
})

app.get('/page1', (req, res) => {
    res.send("<h1>this is page1</h1>");
})

app.get('/page2', (req, res) => {
    res.send("<h1>this is request for page2!</h1>");
})

// app.get('*', (req, res) => {//for all paths except the ones we have used in our app
//     res.send("<h1>i have no idea abt this route, sorry :( </h1>");
// })//this type of path is to be written at last cause if written at top before all 
//other paths, then all other paths will be ignored!!!!

app.post('/cats', (req, res) => {
    res.send("this is post request for /cats path");
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;//storing request parameter into subreddit variable
    res.send(`<h1>your on ${postId} on ${subreddit} subreddit</h1>`);
})

app.get('*' , (req, res) => {
    res.send("i have no idea abt this route, sorry :(");
})