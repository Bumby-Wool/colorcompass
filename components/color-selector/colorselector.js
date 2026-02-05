angular.module('bumbyApp')
    .component('colorSelector', {
        templateUrl: 'components/color-selector/colorselector.html',
        bindings: {
            onUpdate: '&',
            colors: '<',
            selectedColor: '<'
        },
        controller: ['$scope', 'colorService', function($scope, colorService) {
            var ctrl = this;

            ctrl.$onChanges = function(changes) {
                if (changes.selectedColor && changes.selectedColor.currentValue) {
                    ctrl.selectedColor = changes.selectedColor.currentValue;
                    return;
                }

                if (!ctrl.selectedColor && ctrl.colors && ctrl.colors.length > 0) {
                    ctrl.setColor(ctrl.colors[0]);
                }
            }

            ctrl.setColor = function(color){
                ctrl.selectedColor = color;
                console.log("Color selected:", color);
                ctrl.onUpdate({color: ctrl.selectedColor});
            }
        
            ctrl.getColorBackground = function(color) {
                if (color && typeof color !== 'undefined') {
                    if (color.type === 'pattern' || color.type === 'zipper') {
                        return 'center/cover url(' + color.imageUrl + ')';
                    }

                    if (color.patternId && color.patternId.fill) {
                        return color.patternId.fill;
                    }
                }
                return "#fff";
            }
        }]
    });
