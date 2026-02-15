function svgPatternsCtrl($scope) {

}
angular.module('bumbyApp')
    .directive('svgPatterns', function() {
        return {
            templateUrl: 'components/svg-patterns/svgpatterns.html',
            scope: {},
            controller: ['$scope','colorService', function($scope,colorService) { 
                colorService.getPatterns()
                .then((res) => {
                    $scope.patterns = res.filter(p => p.type === 'pattern');
                    $scope.zippers = res.filter(p => p.type === 'zipper');
                },(err) => { 
                    console.error("Failed to load patterns", err)
                });
            }]
        }
    });