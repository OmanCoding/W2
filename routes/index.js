var express = require('express');
var router = express.Router();
var Parser = require('rss-parser');

var parser = new Parser();
async function readnews(location) {
  var feed = await parser.parseURL(location);
  return feed;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/ONAEconomicNews', function(req, res, next) {
  var news = readnews('https://www.omannews.gov.om/RSSOna/rssar13.xml');
  news.then(function(data) {
        res.render('newsview', {title: 'أخبار وكالة الأنباء العمانية الاقتصادية  ', news: data });
  });
});

router.get('/AlwatanNews', function(req, res, next) {
  var news = readnews('http://alwatan.com/feed');
  news.then(function(data) {
        res.render('newsview', {title: 'أخبار الوطن', news: data });
  });
});

router.get('/OmanNews', function(req, res, next) {
  var news = readnews('http://omandaily.om/feed');
  news.then(function(data) {
        res.render('newsview', {title: 'أخبار عمان', news: data });
  });
});

router.get('/ShabibaEconomicNews', function(req, res, next) {
  var news = readnews('http://www.shabiba.com/rss-feed/4');
  news.then(function(data) {
        res.render('newsview', {title: 'أخبار الشبيبة الاقتصادية  ', news: data });
  });
});

module.exports = router;
