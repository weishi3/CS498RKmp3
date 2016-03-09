var app = angular.module('mp3',[  'ngRoute','Controllers']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/list', {
            templateUrl : 'partials/list.html',
            controller: 'listController'
        })
        .when('/details/:rank', {
            templateUrl : 'partials/details.html',
            controller: 'detailsController'
        })
        .when('/gallery', {
            templateUrl : 'partials/gallery.html',
            controller: 'galleryController'
        })
        .otherwise({
            redirectTo: '/list'
        });


}]);