const express = require('express');
const app = express();
const path = require('path');
var fs = require('file-system')
const router = express.Router();

app.use(express.static('client'))

var reviews = {

    "reviewers": [
                 {
                    "id":           1,
                    "name":         "Kofi Outlaw",
                    "Title":        "John Wick",
                    "Genre":        "Action, Crime, Thriller",
                    "Score":        68,
                    "Review":       "'John Wick' excels, unapologetically, at what it seeks to be: a fun, pulpy, violent B-movie action romp, built upon a cool mythology within a compelling Noir world."
                 },
                 {
                   "id":           2,
                   "name":         "Bob Hoose",
                   "Title":        "Harry Potter and the Deathly Hallows: Part 2",
                   "Genre":        "Adventure, Drama, Fantasy, Mystery",
                   "Score":        87,
                   "Review":       '"Harry Potter. The boy who lived, come to die."" Those chilling words from Lord Voldemort bear the truth of the eighth and final installment in the Harry Potter franchise. But they also hint at a lie.'
                 },
                 {
                   "id":           3,
                   "name":         "Bob Hoose",
                   "Title":        "The Lion King",
                   "Genre":        "Animation, Adventure, Drama, Family, Musical",
                   "Score":        83,
                   "Review":       "Lions, hyenas and the circle of life. Oh my! The Lion King rules the animation world with a story that's fun and instructive"
                 }
    ]
}


function readFile(filename)
{
  var contents = fs.readFileSync(filename);
  return contents.toString()
}

app.get('/home', function (_req, resp){
    resp.header("Access-Control-Allow-Origin","*")
    resp.send(readFile('client/index.html'));

});

app.get('/homeStyle.css', function(_req, res){
   res.send('homeStyle.css'); res.end();
 });

 app.get('/index.js', function(_req, res){
    res.send('index.js'); res.end();
  });

app.get('/moviesearch', function (_req, resp){
    resp.header("Access-Control-Allow-Origin","*")
    resp.send(readFile('client/movie_search.html'));
});

app.get('/newreview', function (_req, resp){
    resp.header("Access-Control-Allow-Origin","*")
    resp.send(readFile('client/new_review.html'));
});

app.get('/reviews', function (_req, resp){
    resp.header("Access-Control-Allow-Origin","*")
    resp.send(readFile('client/reviews.html'));
});

app.listen(4000);

console.log('Running at Port 4000');
