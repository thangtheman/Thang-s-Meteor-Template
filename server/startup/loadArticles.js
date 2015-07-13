Meteor.startup(function() {
    if (Articles.find().count() === 0) {
        var articles = [
            {   'title': 'Google',
                'description': 'Search Engine',
                'url': 'http://www.google.com'},
            {   'title': 'Yahoo',
                'description': 'Search Engine',
                'url': 'http://www.yahoo.com'}
        ];

        for (var i = 0; i < articles.length; i++)
            Articles.insert(articles[i]);

    }
});
