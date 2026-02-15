angular.module('bumbyApp')
    .component('itemList', {
        templateUrl: 'components/itemlist/itemlist.html',
        bindings: {},
        controller: ['itemData',
        function ItemListController(itemData) {
            var ctrl = this;
            ctrl.items = itemData;
        }]
    })