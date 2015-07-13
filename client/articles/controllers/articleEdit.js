angular.module("socially").controller("articleEdit", ['$scope', '$stateParams', '$meteor', '$location',
    function($scope, $stateParams, $meteor, $location){
        $scope.article = $meteor.object(Articles, $stateParams.articleId, false);

        $scope.save = function(){
          $scope.article.save();
          $location.path('/articles')
        };
        $scope.reset = function (){
          $scope.article.reset();
        }
}]);
