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
                    //console.log("initializing Item");
                    ctrl.colors = [];
                    ctrl.zippers = [];

                    /* Redundant
                    colorService.getHexColors()
                        .then((res) => {
                            ctrl.colors = ctrl.colors.concat(res);
                        },(err) => { 
                            console.error("Failed to load colors", err)
                        });
                    */
                   
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
                    return options.find(o => {
                        if (o.elements) {
                            return o.elements.indexOf(elementId) >= 0;
                        } else if (o.selectedType && o.selectedType.elements) {
                            return o.selectedType.elements.indexOf(elementId) >= 0;
                        }
                    });
                }

                /** Download Design as Image function - incomplete
                ctrl.downloadDesign = function() {
                    var designElement = document.querySelector('.svg-background');
                    if (!designElement || typeof html2canvas !== 'function') {
                        console.error('Unable to download design image.');
                        return;
                    }

                    var fileName = 'bumby-' + ctrl.itemId + '-design.png';
                    html2canvas(designElement, {
                        useCORS: true,
                        backgroundColor: null,
                        scale: 2
                    }).then(function(canvas) {
                        var link = document.createElement('a');
                        link.download = fileName;
                        link.href = canvas.toDataURL('image/png');
                        link.click();
                    }).catch(function(error) {
                        console.error('Download failed', error);
                    });
                }
                */
            }
        ]
    })