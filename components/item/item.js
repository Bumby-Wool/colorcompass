angular.module('bumbyApp')
    .component('item', {
        templateUrl: 'components/item/item.html',
        bindings: {},
        controller: ['itemData','$routeParams',
            function ItemController(itemData, $routeParams) {
                var ctrl = this;
                ctrl.itemId = $routeParams.itemId;
                ctrl.svgUrl = "components/item/item-templates/"+ctrl.itemId+"-svg.html";
                ctrl.itemData = itemData;
                ctrl.item = itemData.find(i => i.link === ("/items/" + ctrl.itemId));
                ctrl.selectedVariant = ctrl.item.variants[0];

                ctrl.getSelectedOptionStyle = function(elementId) {
                    var hideStyle = {"display":"none"};
                    var option = ctrl.getOptionByElementId(ctrl.selectedVariant.options, elementId);
                    var extra = ctrl.getOptionByElementId(ctrl.selectedVariant.extras, elementId);
                    if (option) {
                        return option.color.patternId;
                    } else if (extra) {
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
                    return options.find(o => {
                        if (o.elements) {
                            return o.elements.indexOf(elementId) >= 0;
                        } else if (o.selectedType) {
                            return o.selectedType.elements.indexOf(elementId) >= 0;
                        }
                    });
                }
            }
        ]
    })