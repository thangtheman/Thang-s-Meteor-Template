angular.module("rental").controller("ArticlesListCtrl", ['$scope', '$meteor',
    function($scope, $meteor) {

        $scope.articles = $meteor.collection(Articles);
        $scope.removeArticle = function (article) {
          $scope.articles.remove(article);
        }
    }]);
