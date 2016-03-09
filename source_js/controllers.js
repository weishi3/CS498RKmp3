/* Sample Controller */
var Controllers = angular.module('Controllers', []);

Controllers.controller('listController', ['$scope','$http', function($scope,$http) {
    $http.get('data/imdb250.json')
        .success(function(data){
            $scope.movies = data;
            console.log(data);
        })
        .error(function (err){
            console.log(err);
        });

    $scope.order='rank';
    //set the default order


}]);


Controllers.controller('detailsController', ['$scope','$routeParams', '$http',function($scope,$routeParams,$http) {
    $http.get('data/imdb250.json')
        .success(function(data){
            $scope.movies = data;
            $scope.movie=data[($routeParams.rank)-1];
            console.log(data);
        })
        .error(function (err){
            console.log(err);
        });
    $scope.order='rank';


}]);

Controllers.controller('galleryController',['$scope','$http',function($scope,$http){
    $http.get('data/imdb250.json')
        .success(function(data){
            $scope.movies = data;
            console.log(data);
        })
        .error(function (err){
            console.log(err);
        });


}]);