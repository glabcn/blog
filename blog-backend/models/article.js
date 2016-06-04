var mongoose = require('mongoose'),
    db  = require('../service/datebase'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;


var articleSchema = mongoose.Schema({
    order: ObjectId,
    title: {
        type: String,
        require: true,
        index: true,
        default: ""
    },
    category: {
        type: String,
        default: ""
    },
    body: {
        type: String,
        default: ""
    },
    author: {
        type: String,
        default: "Bin"
    },
    date: {
        type: Date,
        default: Date.now
    },
    comments: [{
        body: String,
        date: Date
    }],
    meta: {
        votes: {
            type: Number,
            default: 0
        },
        favs: {
            type: Number,
            default: 0
        }
    },
    tag: [{
        name: {
            type: String,
            default: ""
        },
        link: {
            type: String,
            default: ""
        }
    }],
    read: {
        type: Number,
        default: 0
    }
});



var Article = mongoose.model('Article', articleSchema);

exports = module.exports = Article;