angular.module('bumbyApp')
    .factory('itemData', function () {
        return [
            {
                title: "Diaper Cover",
                link: "/items/diapercover",
                image: "resources/diapercover.png",
                options: [
                    { label: "Waist" },
                    { label: "Body" },
                    { label: "Leg Cuffs" }
                ],
                extras: []
            },
            {
                title: "Shorts - Bloomers",
                link: "/items/bloomers",
                image: "resources/Bloomers-laying-down-500x500.jpg",
                options: [
                    { label: "Waist" },
                    { label: "Body" },
                    { label: "Cuffs" }
                ],
                extras: []
            },
            {
                title: "Pants - Hemmed",
                link: "/items/pants",
                image: "resources/Baby-Standard-Pants-Mild-Tapered-Hemmed-Main.png",
                options: [
                    { label: "Waist" },
                    { label: "Legs" }
                ],
                extras: []
            },
            {
                title: "Pants - Joggers",
                link: "/items/pantsjoggers",
                image: "resources/joggers.png",
                options: [
                    { label: "Waist" },
                    { label: "Legs" },
                    { label: "Leg Cuffs" }
                ],
                extras: []
            },
            {
                title: "Sheepy Hug",
                link: "/items/sweater",
                image: "resources/Adult-Sheepy.png",
                options: [
                    { label: "Body" },
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
                    { label: "Body" },
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