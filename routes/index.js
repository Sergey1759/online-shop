
const axios = require('axios').default;

const express = require('express');

var router = express.Router();

const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });


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

router.post('/admin/send', upload.array('gallery', 12),  function(req, res, next) {
  let response = req.files;
  console.log(req.params);
  console.log(response);
  console.log(req.body);
  res.send(response);
});


async function getAnyDate(){ // must to refactoring
  return  (await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
}

// 3 hours

module.exports = router;