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
                title: "Pants - Hemmed",
                link: "/items/pants",
                image: "resources/Baby-Standard-Pants-Mild-Tapered-Hemmed-Main.png",
                variants: [
                    {
                        label: "",
                        options: [
                            { label: "Waist" },
                            { label: "Legs" }
                        ],
                        extras: []
                    }
                ]
            },
            {
                title: "Pants - Joggers",
                link: "/items/pantsjoggers",
                image: "resources/joggers.png",
                variants: [
                    {
                        label: "",
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
                            { label: "Body" },
                            { label: "Hood" },
                            { label: "Sleeves" },
                            { label: "Pocket" }
                        ],
                        extras: [
                            { label: "Add Sleeve Cuffs" },
                            { label: "Cuffed Pocket", colorSelector:"none" }
                        ]
                    },
                    {
                        label: "Quarter Zip",
                        options: [
                            { label: "Body" },
                            { label: "Neck", types: [
                                "Hood",
                                "Tall Collar"
                            ]},
                            { label: "Sleeves" },
                            { label: "Zipper", colorSelector:"zipper" }
                        ],
                        extras: [
                            { label: "Add Sleeve Cuffs" },
                            { label: "Add Bottom Cuff" },
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