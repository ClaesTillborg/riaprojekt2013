(function(){
    window.App = {
        Models: {},
        Views: {},
        Collections: {},
        Helpers: {},
        Routes: {},
        Resourses: {},
        Templates: {}
    };

})();

define([
    'backbone',
    'underscore',
    'jquery',
    'userResources',
    'user',
    'users',
    'usersView',
    'slideShow',
    'slideShows',
    'slideShowsView'
], function(
    Backbone, _, $, routes, User, Users, UsersView, SlideShow, SlideShows, SlideShowsView) {

    /**
     * Starts Backbone router
     */
    new routes;
    Backbone.history.start();

    var user = new User({ name: 'Claes Tillborg' });
    var slideShow = new SlideShow({ owner: user })

    var slideShows = new SlideShows([
        slideShow
    ]);

    // Creates a collection of models
    var users = new Users([
        new User(),
        new User({ name: 'John Doe' }),
        new User({ name: 'Jane Doe' }),
        new User({ name: 'Claes Tillborg' }),
        new User({ name: 'Tord Bob' })
    ]);

    // Create a usersView
    var usersView = new UsersView({ collection: users });
    var slideShowsView = new SlideShowsView({ collection: slideShows });

    console.log(slideShow);
    $('.main').append(usersView.render().el);
    $('.main').append(slideShowsView.render().el);


});