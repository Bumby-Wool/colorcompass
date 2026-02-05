angular.module('bumbyApp')
    .factory('colorService', ['$http', '$q', function ($http, $q) {
        var self = this;
        self.hexColors = null;
        self.patterns = null;

        /* Redundant
        self.getHexColors = function() {
            return self.loadColors("/colorcompass/color_patterns.json", self.hexColors);
        }
        */

        self.getPatterns = function() {
            var deferred = $q.defer();
            self.loadColors("/colorcompass/color_patterns.json", self.patterns)
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
                    "svgPatternId": original.name+"Zipper",
                    "patternId": { "fill": "url(#"+original.name+"Zipper)"},
                    "imageUrl": "/colorcompass/resources/patterns/zippers/"+original.name+"Zipper.png"
                };
            } else if (original.name) {
                return {
                    "type": "pattern",
                    "name": original.name,
                    "svgPatternId": original.name,
                    "patternId": { "fill": "url(#"+original.name+")"},
                    "imageUrl": "/colorcompass/resources/patterns/"+original.name+".jpg"
                };
            } else {
                console.error("Failed to properly load pattern", original);
                return {};
            }
        }

        return self;
    }])
