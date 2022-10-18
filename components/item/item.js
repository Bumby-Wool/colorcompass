angular.module('bumbyApp')
    .component('item', {
        templateUrl: 'components/item/item.html',
        bindings: {},
        controller: ['itemData','$routeParams','colorService',
            function ItemController(itemData, $routeParams, colorService) {
                var ctrl = this;
                ctrl.itemId = $routeParams.itemId;
                ctrl.svgUrl = "components/item/item-templates/"+ctrl.itemId+"-svg.html";
                ctrl.itemData = itemData;
                ctrl.item = itemData.find(i => i.link === ("/items/" + ctrl.itemId));
                ctrl.selectedVariant = ctrl.item.variants[0];

                ctrl.$onInit = function() {
                    console.log("initializing Item");
                    ctrl.colors = [];
                    ctrl.zippers = [];
                    colorService.getHexColors()
                        .then((res) => {
                            ctrl.colors = ctrl.colors.concat(res);
                        },(err) => { 
                            console.error("Failed to load colors", err)
                        });
                
                    colorService.getPatterns()
                        .then((res) => {
                            ctrl.colors = ctrl.colors.concat(res.filter(c => c.type === 'pattern'));
                            ctrl.zippers = ctrl.zippers.concat(res.filter(c => c.type === 'zipper'));
                        },(err) => { 
                            console.error("Failed to load patterns", err)
                        });
                }

                ctrl.getSelectedOptionStyle = function(elementId) {
                    var hideStyle = {"display":"none"};
                    var option = ctrl.getOptionByElementId(ctrl.selectedVariant.options, elementId);
                    var extra = ctrl.getOptionByElementId(ctrl.selectedVariant.extras, elementId);
                    if (option && option.color) {
                        return option.color.patternId;
                    } else if (extra && extra.color) {
                        return (extra && extra.show) ? extra.color.patternId : hideStyle;
                    } else {
                        return hideStyle;
                    }
                }

                ctrl.showElement = function(elementId) {
                    var option = ctrl.getOptionByElementId(ctrl.selectedVariant.options, elementId);
                    var extra = ctrl.getOptionByElementId(ctrl.selectedVariant.extras, elementId);
                    return option || (extra && extra.show);
                }

                ctrl.getOptionByElementId = function(options, elementId) {
                    if (!options) { return null; } //Don't do find on null or undefined objects
                    return options.find(o => {
                        if (o.elements) {
                            return o.elements.indexOf(elementId) >= 0;
                        } else if (o.selectedType && o.selectedType.elements) {
                            return o.selectedType.elements.indexOf(elementId) >= 0;
                        }
                    });
                }
            }
        ]
    })