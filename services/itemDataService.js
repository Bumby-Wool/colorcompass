angular.module('bumbyApp')
    .factory('itemData', function () {
        return [
            {
                title: "Diaper Cover",
                link: "/items/diapercover",
                image: "resources/diapercover.png",
                variants: [
                    {
                        label: "Traditional",
                        options: [
                            { label: "Waist", elements: ["TDCWaistband_00000105413168391474860840000009616179835936444858_"] },
                            { label: "Body", elements: ["TDCBody_00000091728544352029154250000003918608914771493567_"] },
                            { label: "Leg Cuffs", elements: ["TDCLeftCuff_00000183235140444635553040000002557799785209837215_", "TDCRightCuff_00000128460512440843210380000002816660742991847597_"] }
                        ],
                        extras: []
                    },
                    {
                        label: "Briefs",
                        options: [
                            { label: "Waist", elements: ["BriefWaistband"] },
                            { label: "Body", elements: ["BriefBody"] },
                            { label: "Leg Cuffs", elements: ["BriefLeftCuff", "BriefRightCuff"] }
                        ],
                        extras: []
                    },
                    {
                        label: "Abrazo",
                        options: [
                            { label: "Waist", elements: ["AZLeftTab", "AZRightTab"] },
                            { label: "Body", elements: ["AZMiddle"] },
                            { label: "Leg Cuffs", elements: ["AZLeftCuff", "AZRightCuff"] }
                        ],
                        extras: []
                    },
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
                            { label: "Waist", elements: ["waistband"] },
                            { label: "Legs", elements: ["leftLeg", "rightLeg"] }
                        ],
                        extras: []
                    },
                    {
                        label: "Joggers",
                        options: [
                            { label: "Waist", elements: ["waistband"] },
                            { label: "Legs", elements: ["leftLeg", "rightLeg"] },
                            { label: "Leg Cuffs", elements: ["leftShortCuff", "rightShortCuff"] }
                        ],
                        extras: []
                    },
                    {
                        label: "Cuffed",
                        options: [
                            { label: "Waist", elements: ["waistband"] },
                            { label: "Legs", elements: ["leftLeg", "rightLeg"] },
                            { label: "Leg Cuffs", elements: ["rightLongCuff", "leftLongCuff"] }
                        ],
                        extras: []
                    }
                ]
            },
            {
                title: "crops",
                link: "/items/crops",
                image: "resources/CropsEuros.png",
                variants: [
                    {
                        label: "Hemmed Crop",
                        options: [
                            { label: "Waistband", elements: ["HCWaist"] },
                            { label: "Body", elements: ["HCBody"] }
                        ],
                        extras: []
                    },
                    {
                        label: "Hemmed Euro Crop",
                        options: [
                            { label: "Waistband", elements: ["HECWaist"] },
                            { label: "Body", elements: ["HECBody"] },
                        ]}
                    ],
                    extras: [
                        { label: "Add Pocket", elements: ["HCLeftPocket"], show: true },
                        { label: "Add Pockets", types: [
                            {label: "Kangaroo", elements: ["pocketKangaroo"] },
                            {label: "Cuffed Kangaroo", elements: ["pocketKangaroo", "pocketKangarooLeftCuff", "pocketKangarooRightCuff"] },
                            {label: "Rounded Angled", elements: ["pocketRoundedAngledLeft", "pocketRoundedAngledRight"] },
                            {label: "Squared Angled", elements: ["pocketSquaredAngledLeft", "pocketSquaredAngledRight"] }
                        ]}
                ]
            },
            {
                title: "Sweater",
                link: "/items/sweater",
                image: "resources/Adult-Sheepy.png",
                variants: [
                    {
                        label: "Sheepy Hug",
                        options: [
                            { label: "Body", elements: ["bottomCuff", "body"] },
                            { label: "Hood", elements: ["hood", "hoodInside"] },
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] },
                            { label: "Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] },
                            { label: "Pocket", elements: ["pocketKangaroo"] }
                        ],
                        extras: [
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
                                { label: "Hood & Tall Collar", elements: ["HoodedCollarTall", "hood", "hoodInside"] },
                                { label: "Hood & Short Collar", elements: ["HoodedCollarShort", "hood", "hoodInside"] }
                            ]},
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] },
                            { label: "Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] },
                            { label: "Zipper", elements: ["quarterCenterTrimZipperShort", "quarterCenterTrimZipperTall"], colorSelector:"zipper" }
                        ],
                        extras: [
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
                                { label: "Hood & Tall Collar", elements: ["HoodedCollarTall", "hood", "hoodInside"] },
                                { label: "Hood & Short Collar", elements: ["HoodedCollarShort", "hood", "hoodInside"] }
                            ]},
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] },
                            { label: "Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] },
                            { label: "Zipper", elements: ["halfCenterTrimZipperShort", "halfCenterTrimZipperTall"], colorSelector:"zipper" }
                        ],
                        extras: [
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
                            { label: "Body", elements: ["body", , "henleyLine"] },
                            { label: "Neck", types: [
                                { label: "Hood", elements: ["hood", "hoodInside"] },
                                { label: "Tall Collar", elements: ["collarTall"] },
                                { label: "Short Collar", elements: ["collarShort"] },
                                { label: "Hood & Tall Collar", elements: ["HoodedCollarTall", "hood", "hoodInside"] },
                                { label: "Hood & Short Collar", elements: ["HoodedCollarShort", "hood", "hoodInside"] }
                            ]},
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] },
                            { label: "Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] },
                            { label: "Zipper", elements: ["halfCenterTrimZipperShort", "halfCenterTrimZipperTall"], colorSelector:"zipper" }
                        ],
                        extras: [
                            { label: "Add Bottom Cuff", elements: ["bottomCuff"], show: true },
                            { label: "Add Pockets", show: true, types: [
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
                                { label: "Tall Collar", elements: ["collarTall"] },
                                { label: "Short Collar", elements: ["collarShort"] },
                                { label: "Hood", elements: ["hood", "hoodInside"] },
                                { label: "Hood & Tall Collar", elements: ["HoodedCollarTall", "hood", "hoodInside"] },
                                { label: "Hood & Short Collar", elements: ["HoodedCollarShort", "hood", "hoodInside"] }
                            ]},
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] },
                            { label: "Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] },
                            { label: "Zipper", elements: ["fullCenterTrimButtonTall", "fullCenterTrimButtonShort"], colorSelector:"zipper" }
                        ],
                        extras: [
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
                            { label: "Body", elements: ["body", "henleyLine"] },
                            { label: "Neck", types: [
                                { label: "Hood", elements: ["hood", "hoodInside"] },
                                { label: "Tall Collar", elements: ["collarTall"] },
                                { label: "Short Collar", elements: ["collarShort"] },
                                { label: "Hood & Tall Collar", elements: ["HoodedCollarTall", "hood", "hoodInside"] },
                                { label: "Hood & Short Collar", elements: ["HoodedCollarShort", "hood", "hoodInside"] }
                            ]},
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] },
                            { label: "Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] },
                            { label: "Center Trim", elements: ["halfCenterTrimButton"] }
                        ],
                        extras: [
                            { label: "Add Bottom Cuff", elements: ["bottomCuff"], show: true },
                            { label: "Add Pockets", show: true, types: [
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
                                { label: "Tall Collar", elements: ["collarTall"] },
                                { label: "Short Collar", elements: ["collarShort"] },
                                { label: "Hood", elements: ["hood", "hoodInside"] },
                                { label: "Hood & Tall Collar", elements: ["HoodedCollarTall", "hood", "hoodInside"] },
                                { label: "Hood & Short Collar", elements: ["HoodedCollarShort", "hood", "hoodInside"] }
                            ]},
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] },
                            { label: "Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] },
                            { label: "Center Trim", elements: ["fullCenterTrimButtonTall", "fullCenterTrimButtonShort"] }
                        ],
                        extras: [
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
                            { label: "Neck", elements: ["crewNeck"] },
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] },
                            { label: "Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] }
                        ],
                        extras: [
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
                            { label: "Sleeves", elements: ["rightSleeve", "leftSleeve"] },
                            { label: "Sleeve Cuffs", elements: ["rightSleeveCuff", "leftSleeveCuff"] }
                        ],
                        extras: [
                            { label: "Add Bottom Cuff", elements: ["bottomCuff"], show: true },
                            { label: "Add Pockets", types: [
                                {label: "Rounded Angled", elements: ["pocketRoundedAngledLeft", "pocketRoundedAngledRight"] },
                                {label: "Squared Angled", elements: ["pocketSquaredAngledLeft", "pocketSquaredAngledRight"] }
                            ]}
                        ]
                    },
                    {
                        label: "Vest",
                        options: [
                            { label: "Body", elements: ["bottomCuff", "body"] },
                            { label: "Neck", types: [
                                { label: "Tall Collar", elements: ["collarTall"] },
                                { label: "Short Collar", elements: ["collarShort"] },
                                { label: "Hood", elements: ["hood", "hoodInside"] },
                                { label: "Hood & Tall Collar", elements: ["HoodedCollarTall", "hood", "hoodInside"] },
                                { label: "Hood & Short Collar", elements: ["HoodedCollarShort", "hood", "hoodInside"] }
                            ]},
                            { label: "Center", types: [
                                { label: "Zipper", elements: ["fullCenterTrimButtonTall", "fullCenterTrimButtonShort"], colorSelector:"zipper" },
                                { label: "Button up", elements: ["fullCenterTrimButtonTall", "fullCenterTrimButtonShort"] }
                            ]}
                        ],
                        extras: [
                            { label: "Add Bottom Cuff", elements: ["bottomCuff"], show: true },
                            { label: "Add Pockets", types: [
                                {label: "Kangaroo", elements: ["pocketKangaroo"] },
                                {label: "Cuffed Kangaroo", elements: ["pocketKangaroo", "pocketKangarooLeftCuff", "pocketKangarooRightCuff"] },
                                {label: "Rounded Angled", elements: ["pocketRoundedAngledLeft", "pocketRoundedAngledRight"] },
                                {label: "Squared Angled", elements: ["pocketSquaredAngledLeft", "pocketSquaredAngledRight"] }
                            ]}
                        ]
                    },
                ]
            }
        ];
    })