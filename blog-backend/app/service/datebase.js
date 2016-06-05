var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB数据库连接失败'));
db.once('open', function(callback){
    console.log('MongoDB数据库连接成功!');
});

exports = module.exports = db;

