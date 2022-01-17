angular.module('bumbyApp')
    .factory('itemData', function () {
        return [
            {
                title: "Pants - Hemmed",
                link: "/items/pants",
                image: "resources/Baby-Standard-Pants-Mild-Tapered-Hemmed-Main.png",
                options: [
                    { label: "Waistband" },
                    { label: "Legs" }
                ],
                extras: []
            },
            {
                title: "Pants - Cuffed",
                link: "/items/pantscuffed",
                image: "resources/Baby-Standard-Pants-Cuffed-Main.png",
                options: [
                    { label: "Waistband" },
                    { label: "Legs" },
                    { label: "Cuffs" }
                ],
                extras: []
            },
            {
                title: "Sweater",
                link: "/items/sweater",
                image: "resources/Adult-Sheepy.png",
                options: [
                    { label: "Main Body" },
                    { label: "Hood" },
                    { label: "Sleeves" }
                ],
                extras: [
                    { label: "Add Sleeve Cuffs" },
                    { label: "Add Pocket" }
                ]
            },
            {
                title: "Sweater - Cardigan",
                link: "/items/sweatercardigan",
                image: "resources/Contoured-Zipper-Cardigan.png",
                options: [
                    { label: "Main Body" },
                    { label: "Hood" },
                    { label: "Sleeves" }
                ],
                extras: [
                    { label: "Add Sleeve Cuffs" },
                    { label: "Add Pockets" }
                ]
            },
            {
                title: "Sweater - Quarter Zip",
                link: "/items/sweaterquarterzip",
                image: "resources/Quarter-Zip-Open.png",
                options: [
                    { label: "Main Body" },
                    { label: "Hood" },
                    { label: "Sleeves" }
                ],
                extras: [
                    { label: "Add Sleeve Cuffs" },
                    { label: "Add Pocket" }
                ]
            }
        ];
    })