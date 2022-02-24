angular.module('bumbyApp')
    .factory('colorService', ['$http', '$q', function ($http, $q) {
        var self = this;
        self.hexColors = null;
        self.patterns = null;

        self.getHexColors = function() {
            return self.loadColors("/builder/colors.json", self.hexColors);
        }

        self.getPatterns = function() {
            return self.loadColors("/builder/color_patterns.json", self.patterns);
        }

        self.loadColors = function (resource, obj) {
            var deferred = $q.defer();
            if (obj == null) {
                $http.get(resource)
                .then((res) => {
                    obj = res.data;
                    deferred.resolve(obj);
                },(err) => { 
                    console.error("Failed to load " + resource, err);
                    deferred.reject(err);
                });
            } else {
                deferred.resolve(obj);
            }
            return deferred.promise;
        }

        return self;
    }])