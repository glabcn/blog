var express = require('express');
var router = express.Router();
var ArticleModel = require('../models/article');

// 获取所有文章
router.get('/', function(req, res, next) {
	ArticleModel.find().exec().then(
		function (articles) {
			res.json(articles);
		}, function (err) {
			console.log(err);
		}
	);
});

// 新建文章
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

// 根据id查找文章
router.get('/:id', function(req, res, next) {
	ArticleModel.findOne({_id: req.params.id}).exec().then(
		function (article) {
			res.json(article);
		}, function (err) {
			console.log(err);
		}
	);
});

// 更新文章
router.put('/update', function(req, res, next) {
	ArticleModel.findOne({_id: req.param("id")}).exec().then(
		function (article) {
			article.title = req.param("title");
			article.body = req.param("body");
			article.save(function (err, article) {
				if(err) {
					res.send("修改文章失败：" + err);
				}else{
					res.send("修改文章成功：" + JSON.stringify(article));
				}
			});
		}, function (err) {
			console.log(err);
		}
	);
});

// 删除文章
router.delete('/delete', function(req, res, next) {
	ArticleModel.remove({_id: req.param("id")},
		function (err) {
			res.send("删除文章成功");
		}
	);
});

module.exports = router;
