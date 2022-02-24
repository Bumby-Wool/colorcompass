angular.module('bumbyApp')
    .component('colorSelector', {
        templateUrl: 'components/color-selector/colorselector.html',
        bindings: {
            onUpdate: '&'
        },
        controller: ['$scope', 'colorService', function($scope, colorService) {
            var ctrl = this;
            ctrl.colors = [];
            colorService.getHexColors()
                .then((res) => {
                    console.log("hex colors", res);
                    ctrl.colors = ctrl.colors.concat(res);
                    ctrl.setColor(ctrl.colors[0]); //default color
                },(err) => { 
                    console.error("Failed to load colors", err)
                });
            
            colorService.getPatterns()
                .then((res) => {
                    console.log("patterns", res);
                    ctrl.colors = ctrl.colors.concat(res);
                },(err) => { 
                    console.error("Failed to load patterns", err)
                });
        
            ctrl.setColor = function(color){
                ctrl.selectedColor = color;
                ctrl.onUpdate({color: ctrl.selectedColor});
            }
        
            ctrl.getColorBackground = function(color) {
                if (color && typeof color != undefined) {
                    return (color && color.type && color.type==='pattern') ? 'center/cover url('+color.imageUrl+')' : color.patternId.fill;
                }
                return "#fff";
            }
        }]
    });
