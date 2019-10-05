const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const cheerio = require('cheerio')
app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/scrape', (req, res) => {
    axios.get('https://na.leagueoflegends.com/en/news/')
    .then(function (response) {
    // handle success
    const $ = cheerio.load(response.data);
    const results = [];
    // const title = $('#collection-world > div.css-4svvz1.ekkqrpp0 > section.css-18l1u7x.e46isfb1 > div.css-gfgt40.ekkqrpp1 > ol > li:nth-child(2) > article > div > h2 > a')
    // result =  {
    //     title: 'hello'
    // }
    
    $('.node-article').each( (i, element) => {
        // #riot-101 > div.section-wrapper > div.section-wrapper-content > div > div > div > div.panelizer-view-mode.node.node-teaser.node-article.node-132478 > div > div > div > div.default-2-3 > h4 > a
        const article = $(element).children().find('.default-2-3 > h4 > a').text();
        // const title = $(article).children().find('a').val();

        // $(element).children().find()
        results.push({
            article: article
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