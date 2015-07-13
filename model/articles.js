Articles = new Mongo.Collection("articles");

Articles.allow({
    insert: function (userId, article) {
        return userId && article.owner === userId;
    },
    update: function (userId, article, fields, modifier) {
        return userId && article.owner === userId;
    },
    remove: function (userId, hacker) {
        return userId && article.owner === userId;
    }
});
