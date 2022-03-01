angular.module('bumbyApp')
    .factory('itemData', function () {
        return [
            {
                title: "Diaper Cover",
                link: "/items/diapercover",
                image: "resources/diapercover.png",
                variants: [
                    {
                        label: "",
                        options: [
                            { label: "Waist" },
                            { label: "Body" },
                            { label: "Leg Cuffs" }
                        ],
                        extras: []
                    }
                ]
            },
            {
                title: "Shorts - Bloomers",
                link: "/items/bloomers",
                image: "resources/Bloomers-laying-down-500x500.jpg",
                variants: [
                    {
                        label: "",
                        options: [
                            { label: "Waist" },
                            { label: "Body" },
                            { label: "Cuffs" }
                        ],
                        extras: []
                    }
                ]
            },
            {
                title: "Pants",
                link: "/items/pants",
                image: "resources/Baby-Standard-Pants-Mild-Tapered-Hemmed-Main.png",
                variants: [
                    {
                        label: "Hemmed",
                        options: [
                            { label: "Waist" },
                            { label: "Legs" }
                        ],
                        extras: []
                    },
                    {
                        label: "Joggers",
                        options: [
                            { label: "Waist" },
                            { label: "Legs" },
                            { label: "Leg Cuffs" }
                        ],
                        extras: []
                    },
                    {
                        label: "Cuffed",
                        options: [
                            { label: "Waist" },
                            { label: "Legs" },
                            { label: "Leg Cuffs" }
                        ],
                        extras: []
                    }
                ]
            },
            {
                title: "Adult Sweater",
                link: "/items/sweater",
                image: "resources/Adult-Sheepy.png",
                variants: [
                    {
                        label: "Sheepy Hug",
                        options: [
                            { label: "Body", elements: ["bottomCuff", "body"] },
                            { label: "Hood", elements: ["hood", "hoodInside"] },
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] },
                            { label: "Pocket", elements: ["pocketKangaroo"] }
                        ],
                        extras: [
                            { label: "Add Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] },
                            { label: "Cuffed Pocket", elements: ["pocketKangarooLeftCuff", "pocketKangarooRightCuff"], colorSelector:"none" }
                        ]
                    },
                    {
                        label: "Quarter Zip",
                        options: [
                            { label: "Body", elements: ["body"] },
                            { label: "Neck", types: [
                                "Hood",
                                "Tall Collar"
                            ]},
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] },
                            { label: "Zipper", colorSelector:"zipper" }
                        ],
                        extras: [
                            { label: "Add Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] },
                            { label: "Add Bottom Cuff", elements: ["bottomCuff"] },
                            { label: "Add Pockets", types: [
                                "Rounded Angled",
                                "Squared Angled",
                                "Kangaroo",
                                "Cuffed Kangaroo"
                            ]}
                        ]
                    }
                ]
            }
        ];
    })