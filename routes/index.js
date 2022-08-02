
const axios = require('axios').default;

const express = require('express');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/watches', async function(req, res, next) {
  let watches = await getAnyDate();
  watches.length = 15;
  res.render('watches', { watches });
});

router.get('/admin', async function(req, res, next) {

  res.render('admin', { title: 'askdhjk'});
});
router.post('/admin/send', async function(req, res, next) {
  res.send(200);
});


async function getAnyDate(){ // must to refactoring
  return  (await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
}

module.exports = router;
