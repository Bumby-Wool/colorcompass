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
                            { label: "Waist", elements: ["waistband"] },
                            { label: "Body", elements: ["body"] },
                            { label: "Leg Cuffs", elements: ["leftCuff", "rightCuff"] }
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
                            { label: "Waist", elements: ["waistband"] },
                            { label: "Body", elements: ["leftLeg", "rightLegTop", "rightLegBottom"] },
                            { label: "Cuffs", elements: ["leftLegCuff", "rightLegCuff"] }
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
                                { label: "Tall Collar", elements: ["collarTall"] },
                                { label: "Short Collar", elements: ["collarShort"] },
                                { label: "Hood", elements: ["hood", "hoodInside"] },
                                { label: "Hood & Tall Collar", elements: ["collarTall", "hood", "hoodInside"] },
                                { label: "Hood & Short Collar", elements: ["collarShort", "hood", "hoodInside"] }
                            ]},
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] },
                            { label: "Zipper", elements: ["zipperQuarter"], colorSelector:"zipper" }
                        ],
                        extras: [
                            { label: "Add Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] },
                            { label: "Add Bottom Cuff", elements: ["bottomCuff"] },
                            { label: "Add Pockets", types: [
                                {label: "Rounded Angled", elements: ["pocketRoundedAngledLeft", "pocketRoundedAngledRight"] },
                                {label: "Squared Angled", elements: ["pocketSquaredAngledLeft", "pocketSquaredAngledRight"] },
                                {label: "Kangaroo", elements: ["pocketKangaroo"] },
                                {label: "Cuffed Kangaroo", elements: ["pocketKangaroo", "pocketKangarooLeftCuff", "pocketKangarooRightCuff"] }
                            ]}
                        ]
                    },
                    {
                        label: "Half Zip",
                        options: [
                            { label: "Body", elements: ["body"] },
                            { label: "Neck", types: [
                                { label: "Tall Collar", elements: ["collarTall"] },
                                { label: "Short Collar", elements: ["collarShort"] },
                                { label: "Hood", elements: ["hood", "hoodInside"] },
                                { label: "Hood & Tall Collar", elements: ["collarTall", "hood", "hoodInside"] },
                                { label: "Hood & Short Collar", elements: ["collarShort", "hood", "hoodInside"] }
                            ]},
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] },
                            { label: "Zipper", elements: ["zipperHalf"], colorSelector:"zipper" }
                        ],
                        extras: [
                            { label: "Add Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] },
                            { label: "Add Bottom Cuff", elements: ["bottomCuff"] },
                            { label: "Add Pockets", types: [
                                {label: "Rounded Angled", elements: ["pocketRoundedAngledLeft", "pocketRoundedAngledRight"] },
                                {label: "Squared Angled", elements: ["pocketSquaredAngledLeft", "pocketSquaredAngledRight"] },
                                {label: "Kangaroo", elements: ["pocketKangaroo"] },
                                {label: "Cuffed Kangaroo", elements: ["pocketKangaroo", "pocketKangarooLeftCuff", "pocketKangarooRightCuff"] }
                            ]}
                        ]
                    },
                    {
                        label: "Zippered Henley",
                        options: [
                            { label: "Body", elements: ["body"] },
                            { label: "Neck", types: [
                                { label: "Hood", elements: ["hood", "hoodInside"] },
                                { label: "Tall Collar", elements: ["collarTall"] },
                                { label: "Short Collar", elements: ["collarShort"] },
                                { label: "Hood & Tall Collar", elements: ["collarTall", "hood", "hoodInside"] },
                                { label: "Hood & Short Collar", elements: ["collarShort", "hood", "hoodInside"] }
                            ]},
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] },
                            { label: "Zipper", elements: ["zipperHalf"], colorSelector:"zipper" }
                        ],
                        extras: [
                            { label: "Add Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] },
                            { label: "Add Bottom Cuff", elements: ["bottomCuff"], show: true },
                            { label: "Add Pockets", types: [
                                {label: "Kangaroo", elements: ["pocketKangaroo"] },
                                {label: "Cuffed Kangaroo", elements: ["pocketKangaroo", "pocketKangarooLeftCuff", "pocketKangarooRightCuff"] }
                            ]}
                        ]
                    },
                    {
                        label: "Zippered Cardigan",
                        options: [
                            { label: "Body", elements: ["body"] },
                            { label: "Neck", types: [
                                { label: "Hood", elements: ["hood", "hoodInside"] },
                                { label: "Tall Collar", elements: ["collarTall"] },
                                { label: "Short Collar", elements: ["collarShort"] },
                                { label: "Hood & Tall Collar", elements: ["collarTall", "hood", "hoodInside"] },
                                { label: "Hood & Short Collar", elements: ["collarShort", "hood", "hoodInside"] }
                            ]},
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] },
                            { label: "Zipper", elements: ["centerTrim"], colorSelector:"zipper" }
                        ],
                        extras: [
                            { label: "Add Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] },
                            { label: "Add Bottom Cuff", elements: ["bottomCuff"] },
                            { label: "Add Pockets", types: [
                                {label: "Rounded Angled", elements: ["pocketRoundedAngledLeft", "pocketRoundedAngledRight"] },
                                {label: "Squared Angled", elements: ["pocketSquaredAngledLeft", "pocketSquaredAngledRight"] }
                            ]}
                        ]
                    },
                    {
                        label: "Button-up Henley",
                        options: [
                            { label: "Body", elements: ["body"] },
                            { label: "Neck", types: [
                                { label: "Hood", elements: ["hood", "hoodInside"] },
                                { label: "Tall Collar", elements: ["collarTall"] },
                                { label: "Short Collar", elements: ["collarShort"] },
                                { label: "Hood & Tall Collar", elements: ["collarTall", "hood", "hoodInside"] },
                                { label: "Hood & Short Collar", elements: ["collarShort", "hood", "hoodInside"] }
                            ]},
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] },
                            { label: "Center Trim", elements: ["centerTrim"] }
                        ],
                        extras: [
                            { label: "Add Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] },
                            { label: "Add Bottom Cuff", elements: ["bottomCuff"], show: true },
                            { label: "Add Pockets", types: [
                                {label: "Kangaroo", elements: ["pocketKangaroo"] },
                                {label: "Cuffed Kangaroo", elements: ["pocketKangaroo", "pocketKangarooLeftCuff", "pocketKangarooRightCuff"] }
                            ]}
                        ]
                    },
                    {
                        label: "Button-up Cardigan",
                        options: [
                            { label: "Body", elements: ["body"] },
                            { label: "Neck", types: [
                                { label: "Hood", elements: ["hood", "hoodInside"] },
                                { label: "Tall Collar", elements: ["collarTall"] },
                                { label: "Short Collar", elements: ["collarShort"] },
                                { label: "Hood & Tall Collar", elements: ["collarTall", "hood", "hoodInside"] },
                                { label: "Hood & Short Collar", elements: ["collarShort", "hood", "hoodInside"] }
                            ]},
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] },
                            { label: "Center Trim", elements: ["centerTrim"] }
                        ],
                        extras: [
                            { label: "Add Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] },
                            { label: "Add Bottom Cuff", elements: ["bottomCuff"] },
                            { label: "Add Pockets", types: [
                                {label: "Rounded Angled", elements: ["pocketRoundedAngledLeft", "pocketRoundedAngledRight"] },
                                {label: "Squared Angled", elements: ["pocketSquaredAngledLeft", "pocketSquaredAngledRight"] }
                            ]}
                        ]
                    },
                    {
                        label: "Crew",
                        options: [
                            { label: "Body", elements: ["body", "crewNeckInside"] },
                            { label: "Collar", elements: ["crewNeck"] },
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] }
                        ],
                        extras: [
                            { label: "Add Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] },
                            { label: "Add Bottom Cuff", elements: ["bottomCuff"] },
                            { label: "Add Pockets", types: [
                                {label: "Kangaroo", elements: ["pocketKangaroo"] },
                                {label: "Cuffed Kangaroo", elements: ["pocketKangaroo", "pocketKangarooLeftCuff", "pocketKangarooRightCuff"] },
                                {label: "Rounded Angled", elements: ["pocketRoundedAngledLeft", "pocketRoundedAngledRight"] },
                                {label: "Squared Angled", elements: ["pocketSquaredAngledLeft", "pocketSquaredAngledRight"] }
                            ]}
                        ]
                    },
                    {
                        label: "Shawl Neck",
                        options: [
                            { label: "Body", elements: ["body"] },
                            { label: "Neck", elements: ["shawlLeft", "shawlRight", "shawlMiddle"] },
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] }
                        ],
                        extras: [
                            { label: "Add Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] },
                            { label: "Add Bottom Cuff", elements: ["bottomCuff"], show: true },
                            { label: "Add Pockets", types: [
                                {label: "Kangaroo", elements: ["pocketKangaroo"] },
                                {label: "Cuffed Kangaroo", elements: ["pocketKangaroo", "pocketKangarooLeftCuff", "pocketKangarooRightCuff"] },
                                {label: "Rounded Angled", elements: ["pocketRoundedAngledLeft", "pocketRoundedAngledRight"] },
                                {label: "Squared Angled", elements: ["pocketSquaredAngledLeft", "pocketSquaredAngledRight"] }
                            ]}
                        ]
                    }
                ]
            }
        ];
    })