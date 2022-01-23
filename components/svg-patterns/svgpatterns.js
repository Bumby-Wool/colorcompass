function svgPatternsCtrl($scope) {

}
angular.module('bumbyApp')
    .directive('svgPatterns', function() {
        return {
            templateUrl: 'components/svg-patterns/svgpatterns.html',
            scope: {},
            controller: ['$scope','$http', function($scope,$http) { 
                $http.get("/builder/color_patterns.json")
                .then((res) => {
                    $scope.patterns = res.data;
                },(err) => { 
                    console.error("Failed to load patterns", err)
                });
            }]
        }
    });