angular.module("socially").controller("ArticlesListCtrl", ['$scope', '$meteor',
    function($scope, $meteor) {

        $scope.articles = $meteor.collection(Articles);
        $scope.removeArticle = function (article) {
          $scope.articles.remove(article);
        }
    }]);
