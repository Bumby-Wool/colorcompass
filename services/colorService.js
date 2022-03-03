angular.module('bumbyApp')
    .factory('colorService', ['$http', '$q', function ($http, $q) {
        var self = this;
        self.hexColors = null;
        self.patterns = null;

        self.getHexColors = function() {
            return self.loadColors("/builder/colors.json", self.hexColors);
        }

        self.getPatterns = function() {
            var deferred = $q.defer();
            self.loadColors("/builder/color_patterns.json", self.patterns)
                .then((res) => {
                    deferred.resolve(res.map(o => self.buildPattern(o)));
                });
            return deferred.promise;
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

        self.buildPattern = function(original) {
            if (original.type === 'pattern' && original.name && original.svgPatternId && original.patternId && original.imageUrl) {
                return original;
            } else if (original.type === 'zipper' && original.name) {
                return {
                    "type": "zipper",
                    "name": original.name,
                    "svgPatternId": "zipper_"+original.name,
                    "patternId": { "fill": "url(#"+"zipper_"+original.name+")"},
                    "imageUrl": "/builder/resources/patterns/zipper_"+original.name+".png"
                };
            } else if (original.name) {
                return {
                    "type": "pattern",
                    "name": original.name,
                    "svgPatternId": original.name,
                    "patternId": { "fill": "url(#"+original.name+")"},
                    "imageUrl": "/builder/resources/patterns/"+original.name+".jpg"
                };
            } else {
                console.error("Failed to properly load pattern", original);
            }
        }

        return self;
    }])