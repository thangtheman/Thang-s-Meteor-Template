angular.module("rental").config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('/', {
                url: "/",
                templateUrl: 'client/views/home.ng.html'
            })
            .state('AboutUs', {
                url: "/AboutUs",
                templateUrl: 'client/views/aboutus.ng.html'
            })
            .state('Features', {
                url: "/Features",
                templateUrl: 'client/views/features.ng.html'
            })
            .state('page4', {
                url: "/page4",
                templateUrl: 'client/views/fourth.ng.html'
            })
//             .state('articles', {
//                 url: "/articles",
//                 templateUrl: 'client/articles/views/articles.ng.html',
//                 controller: 'ArticlesListCtrl',
//                 resolve: {
//                     'subscribe': [
//                         '$meteor', function($meteor) {
//                             return $meteor.subscribe('articles');
//                         }
//                     ]
//                 }
//             })
//             .state('articles-add', {
//                 url: "/article-add",
//                 templateUrl: 'client/articles/views/article-add.ng.html',
//                 controller: 'ArticlesListCtrl',
//                 resolve: {
//                     "currentUser": ["$meteor", function($meteor){
//                         return $meteor.requireUser();
//                     }
//                     ]
//                 }
//             })
//             .state('article-edit', {
//                 url: "/article/edit/:articleId",
//                 templateUrl: 'client/articles/views/article-edit.ng.html',
//                 controller: 'articleEdit'
//             })
;


    }]);
