var assert = require('chai').assert,
    ArticleModel = require('../app/models/article');

var updateId;
describe('Article', function(){
    describe('#createArticle', function(done) {
        it('should create a new Article.', function(){
            var article = new ArticleModel;
            article.title = "ceshi";
            article.body = "content";
            article.save(function(err, article){
                if(err) return done(err);
                console.log(article);
                updateId = article._id;
                done();
            });
        });
    });
    describe('#queryArticle', function(done) {
        it('should query a article.', function(done){
            ArticleModel.find({ title: "ceshi"}).exec().then(
                function (article) {
                    console.log("query: " + JSON.stringify(article));
                    done();
                }, function(err){
                    done(err);
                }
            );
        });
    });

    describe('#updateArticle', function(done) {
        it('should update article.', function(done){
            ArticleModel.findOne({_id: updateId}).exec().then(
                function(article) {
                    console.log("update: " + article.title);
                    article.title = "modify";
                    article.save(function(err, article){
                        if(err) return done(err);
                        console.log("modify:" + article.title);
                        done();
                    });
                }
            );
        });
    });
});
