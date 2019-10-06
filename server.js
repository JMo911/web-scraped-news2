const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');
const cheerio = require('cheerio')

//MONGO SET UP
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/web-scraper-2', {useNewUrlParser: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log('connected to ' + db)
// });
var db = require("./models");
//END OF MONGO SET UP

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/savedarticles', (req, res) => {
  db.Article.find({})
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
})

app.post('/savearticle', (req, res) => {
  db.Article.create(req.body).then((dbArticle) => {
    console.log(dbArticle)
  })
})

app.get('/scrape', (req, res) => {
    axios.get('https://na.leagueoflegends.com/en/news/')
    .then(function (response) {
    // handle success
    const $ = cheerio.load(response.data);
    const results = [];
    
    $('.node-article').each( (i, element) => {
        
        const title = $(element).children().find('.default-2-3 > h4 > a').text();
        const summary = $(element).children().find('.teaser-content > div').text();
        const href = $(element).children().find('.default-2-3 > h4 > a').attr('href');
        // const title = $(article).children().find('a').val();

        // $(element).children().find()
        results.push({
            title: title,
            summary: summary,
            href: href
        })
    })
    res.send(results);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))