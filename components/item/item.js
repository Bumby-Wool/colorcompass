angular.module('bumbyApp')
    .component('item', {
        templateUrl: 'components/item/item.html',
        bindings: {},
        controller: ['itemData','$routeParams',
            function ItemController(itemData, $routeParams) {
                var ctrl = this;
                ctrl.selectedOptions = {
                    'colorOption1': {},
                    'colorOption2': {},
                    'colorOption3': {},
                    'colorOption4': {},
                    'colorOption5': {},
                    'extras': {
                        'option1': {
                            'show': false,
                            'color': {}
                        },
                        'option2': {
                            'show': false,
                            'color': {}
                        },
                        'option3': {
                            'show': false,
                            'color': {}
                        },
                        'option4': {
                            'show': false,
                            'color': {}
                        },
                        'option5': {
                            'show': false,
                            'color': {}
                        }
                    }
                };
                ctrl.itemId = $routeParams.itemId;
                ctrl.svgUrl = "components/item/item-templates/"+ctrl.itemId+"-svg.html";
                ctrl.itemData = itemData;
                ctrl.item = itemData.find(i => i.link === ("/items/" + ctrl.itemId));
                ctrl.selectedVariant = ctrl.item.variants[0];

                ctrl.updateOptionColor = function (index, color){
                    ctrl.selectedOptions["colorOption"+(index + 1)] = color;
                }

                ctrl.toggleExtraColorShow = function(index, extra) {
                    extra.show = !extra.show;
                    ctrl.selectedOptions.extras["option"+(index + 1)].show = extra.show;
                };

                ctrl.updateExtraColor = function (index, color){
                    ctrl.selectedOptions.extras["option"+(index + 1)].color = color;
                }

                ctrl.getSelectedOptionStyle = function(elementId) {
                    var hideStyle = {"display":"none"};
                    var option = ctrl.getOptionByElementId(ctrl.selectedVariant.options, elementId);
                    var extra = ctrl.getOptionByElementId(ctrl.selectedVariant.extras, elementId);
                    if (option) {
                        var index = ctrl.selectedVariant.options.indexOf(option);
                        return ctrl.selectedOptions["colorOption"+(index + 1)].patternId;
                    } else if (extra) {
                        var selectedExtra = ctrl.lookupSelectedExtra(extra)
                        return (selectedExtra && selectedExtra.show) ? selectedExtra.color.patternId : hideStyle;
                    } else {
                        return hideStyle;
                    }
                }

                ctrl.showElement = function(elementId) {
                    var option = ctrl.getOptionByElementId(ctrl.selectedVariant.options, elementId);
                    var extra = ctrl.getOptionByElementId(ctrl.selectedVariant.extras, elementId);
                    return option || (extra && ctrl.lookupSelectedExtra(extra).show);
                }

                ctrl.getOptionByElementId = function(options, elementId) {
                    return options.find(o => o.elements && (o.elements.indexOf(elementId) >= 0));
                }

                ctrl.lookupSelectedExtra = function(extra) {
                    var index = ctrl.selectedVariant.extras.indexOf(extra);
                    return selectedExtra = ctrl.selectedOptions.extras["option"+(index + 1)];
                }
            }
        ]
    })