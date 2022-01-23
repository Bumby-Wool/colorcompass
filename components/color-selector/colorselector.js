function colorSelectorCtrl($scope, $http) {
    var ctrl = this;
    ctrl.colors = [];
    $http.get("/builder/colors.json")
        .then((res) => {
            ctrl.colors = ctrl.colors.concat(res.data);
            ctrl.setColor(ctrl.colors[0]); //default color
        },(err) => { 
            console.error("Failed to load colors", err)
        });
    
    $http.get("/builder/color_patterns.json")
        .then((res) => {
            ctrl.colors = ctrl.colors.concat(res.data);
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
}

angular.module('bumbyApp')
    .component('colorSelector', {
        templateUrl: 'components/color-selector/colorselector.html',
        bindings: {
            onUpdate: '&'
        },
        controller: colorSelectorCtrl
    });
