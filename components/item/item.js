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
            }
        ]
    })