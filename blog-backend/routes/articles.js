var express = require('express');
var router = express.Router();
var ArticleModel = require('../models/article');



/* GET users listing. */
router.get('/', function(req, res, next) {
	ArticleModel.find().exec().then(
		function (articles) {
			res.json(articles);
		}, function (err) {
			console.log(err);
		}
	);
});

router.post('/new', function(req, res, next) {
	console.log(req);
	var article = new ArticleModel;
	article.title = req.param("title");
	article.body = req.param("body");
	article.save(function (err, article) {
		if(err) {
			res.send("新建文章失败：" + err);
		}else{
			res.send("新建文章成功：" + JSON.stringify(article));
		}
	})
});

router.get('/:id', function(req, res, next) {
	ArticleModel.findOne({_id: req.params.id}).exec().then(
		function (article) {
			res.json(article);
		}, function (err) {
			console.log(err);
		}
	);
});

module.exports = router;
