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
                        label: "Hemmed Shorts",
                        options: [
                            { label: "Waist", elements: ["HSWaist"] },
                            { label: "Body", elements: ["HSBody"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                                {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft_00000090974600374340835350000000421229108712511901_", "SqCrgPcktRight_00000183948036079710681590000008296976022486105480_"] },
                                {label: "Purse Pockets", elements: ["PrsPcktLeft_00000057146265986560687120000000737081065595376299_", "PrsPcktRight_00000139293710192736616710000015868473601287855806_"] },
                                {label: "Circle Pockets", elements: ["LeftRndPocket_00000152963165625522652400000009080140183325640101_", "RightRndPocket_00000083058202902342236950000005102892317602836652_", "LeftRndPocketCuff_00000103230193605404299900000001955532516737887671_", "RightRndPocketCuff_00000155862688109118890200000015694904390342983088_"] },
                                {label: "Heart Pockets", elements: ["HrtPcktLeft_00000053511858347973327500000014189635792340543416_", "HrtPcktRight_00000011752062273117927150000014847718233158951607_"] },
                                {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft_00000179621803826058076970000013413824110984863364_", "RndCrgPcktRight_00000035530665404003504600000016711561037687271826_"] },
                                {label: "Pockets", elements: ["LeftPocket_00000091712150374883887260000010981178920471028864_", "RightPocket_00000124144153490674325130000008645752175170119564_"] },
                        ]}
                    ]
                    },
                    {
                        label: "Cuffed Shorts",
                        options: [
                            { label: "Waist", elements: ["CSWaist_00000152246142737357583530000012730373990241176721_"] },
                            { label: "Body", elements: ["CSBody_00000045586432770782226150000011250235037069231491_"] },
                            { label: "Cuffs", elements: ["CSLeftCuff", "CSRightCuff"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                                {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                                {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                                {label: "Circle Pockets", elements: ["LeftRndPocket", "RightRndPocket", "LeftRndPocketCuff", "RightRndPocketCuff"] },
                                {label: "Heart Pockets", elements: ["HrtPcktLeft_00000011010503668109617630000000868876679039764388_", "HrtPcktRight"] },
                                {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                                {label: "Pockets", elements: ["LeftPocket", "RightPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Ruffled Shorts",
                        options: [
                            { label: "Waist", elements: ["RSWaist"] },
                            { label: "Body", elements: ["RSBody"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                                {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                                {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                                {label: "Circle Pockets", elements: ["LeftRndPocket", "RightRndPocket", "LeftRndPocketCuff", "RightRndPocketCuff"] },
                                {label: "Heart Pockets", elements: ["HrtPcktLeft_00000011010503668109617630000000868876679039764388_", "HrtPcktRight"] },
                                {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                                {label: "Pockets", elements: ["LeftPocket", "RightPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Bloomers",
                        options: [
                            { label: "Waist", elements: ["BSWaist_00000111150194491071445110000009593294278546746796_"] },
                            { label: "Body", elements: ["BSBody_00000139274455867981567040000000121106883652003747_"] },
                            { label: "Cuffs", elements: ["BSLeftCuff", "BSRightCuff"] }
                        ],
                        extras: [ 
                            { label: "Add Pockets", types: [
                            {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                            {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                            {label: "Circle Pockets", elements: ["LeftRndPocket", "RightRndPocket", "LeftRndPocketCuff", "RightRndPocketCuff"] },
                            {label: "Heart Pockets", elements: ["HrtPcktLeft_00000011010503668109617630000000868876679039764388_", "HrtPcktRight"] },
                            {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                            {label: "Pockets", elements: ["LeftPocket", "RightPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Skirtie",
                        options: [
                            { label: "Waist", elements: ["SkWaist"] },
                            { label: "Body", elements: ["SkBody_00000013195378269940335980000002693956104079809924_"] }
                        ],
                        extras: [ 
                            { label: "Add Pockets", types: [
                            {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                            {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                            {label: "Circle Pockets", elements: ["LeftRndPocket", "RightRndPocket", "LeftRndPocketCuff", "RightRndPocketCuff"] },
                            {label: "Heart Pockets", elements: ["HrtPcktLeft_00000011010503668109617630000000868876679039764388_", "HrtPcktRight"] },
                            {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                            {label: "Pockets", elements: ["LeftPocket", "RightPocket"] },
                        ]}
                    ]
                    }
                ]
            },
            {
                title: "Pants",
                link: "/items/pants",
                image: "resources/Baby-Standard-Pants-Mild-Tapered-Hemmed-Main.png",
                variants: [
                    {
                        label: "Bootcut Pants",
                        options: [
                            { label: "Waist", elements: ["BCPWaist_00000117658510262588525340000014209897556714245007_"] },
                            { label: "Body", elements: ["BCPBody_00000178884225950833215290000013521628394383585454_"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                            {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                            {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                            {label: "Circle Pockets", elements: ["LeftRndPocket", "RightRndPocket", "LeftRndPocketCuff", "RightRndPocketCuff"] },
                            {label: "Heart Pockets", elements: ["HrtPcktLeft_00000011010503668109617630000000868876679039764388_", "HrtPcktRight"] },
                            {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                            {label: "Pockets", elements: ["LeftPocket", "RightPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Harem Pants",
                        options: [
                            { label: "Waist", elements: ["HPWaist"] },
                            { label: "Body", elements: ["HPBody"] },
                            { label: "Leg Cuffs", elements: ["HPRghtCuff", "HPLeftCuff"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                            {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                            {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                            {label: "Circle Pockets", elements: ["LeftRndPocket", "RightRndPocket", "LeftRndPocketCuff", "RightRndPocketCuff"] },
                            {label: "Heart Pockets", elements: ["HrtPcktLeft_00000011010503668109617630000000868876679039764388_", "HrtPcktRight"] },
                            {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                            {label: "Pockets", elements: ["LeftPocket", "RightPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Joggers Pants",
                        options: [
                            { label: "Waist", elements: ["JPWaist_00000122688901382537744830000001923557379072420778_"] },
                            { label: "Body", elements: ["JPBody_00000101805378233134778520000017316929125375769733_"] },
                            { label: "Leg Cuffs", elements: ["JPRightCuff_00000032641962985279224340000004127247677774557833_", "JPLeftCuff_00000131352480359154673870000016825018982183570593_"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                                {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                                {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                                {label: "Circle Pockets", elements: ["LeftRndPocket", "RightRndPocket", "LeftRndPocketCuff", "RightRndPocketCuff"] },
                                {label: "Heart Pockets", elements: ["HrtPcktLeft_00000011010503668109617630000000868876679039764388_", "HrtPcktRight"] },
                                {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                                {label: "Pockets", elements: ["LeftPocket", "RightPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Ruffle Pants",
                        options: [
                            { label: "Waist", elements: ["RPWaist"] },
                            { label: "Body", elements: ["RPBody"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                                {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                                {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                                {label: "Circle Pockets", elements: ["LeftRndPocket", "RightRndPocket", "LeftRndPocketCuff", "RightRndPocketCuff"] },
                                {label: "Heart Pockets", elements: ["HrtPcktLeft_00000011010503668109617630000000868876679039764388_", "HrtPcktRight"] },
                                {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                                {label: "Pockets", elements: ["LeftPocket", "RightPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Hemmed Pants",
                        options: [
                            { label: "Waist", elements: ["HPWaist_00000111169728634519360020000000348755208293561499_"] },
                            { label: "Body", elements: ["HPBody_00000024685168981568601360000017558009022093752499_"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                                {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                                {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                                {label: "Circle Pockets", elements: ["LeftRndPocket", "RightRndPocket", "LeftRndPocketCuff", "RightRndPocketCuff"] },
                                {label: "Heart Pockets", elements: ["HrtPcktLeft_00000011010503668109617630000000868876679039764388_", "HrtPcktRight"] },
                                {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                                {label: "Pockets", elements: ["LeftPocket", "RightPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Cuffed Pants",
                        options: [
                            { label: "Waist", elements: ["CPWaist"] },
                            { label: "Body", elements: ["CPBody"] },
                            { label: "Leg Cuffs", elements: ["CPRightCuff", "CPLeftCuff"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                                {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                                {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                                {label: "Circle Pockets", elements: ["LeftRndPocket", "RightRndPocket", "LeftRndPocketCuff", "RightRndPocketCuff"] },
                                {label: "Heart Pockets", elements: ["HrtPcktLeft_00000011010503668109617630000000868876679039764388_", "HrtPcktRight"] },
                                {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                                {label: "Pockets", elements: ["LeftPocket", "RightPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Euro Hemmed Pants",
                        options: [
                            { label: "Waist", elements: ["EHWaist_00000129197329597565189090000012934568809155040183_"] },
                            { label: "Body", elements: ["EHBody_00000062153245295829890110000011234558622828360102_"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                                {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                                {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                                {label: "Circle Pockets", elements: ["LeftRndPocket", "RightRndPocket", "LeftRndPocketCuff", "RightRndPocketCuff"] },
                                {label: "Heart Pockets", elements: ["HrtPcktLeft_00000011010503668109617630000000868876679039764388_", "HrtPcktRight"] },
                                {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                                {label: "Pockets", elements: ["LeftPocket", "RightPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Euro Cuffed Pants",
                        options: [
                            { label: "Waist", elements: ["ECWaist"] },
                            { label: "Body", elements: ["ECBody"] },
                            { label: "Leg Cuffs", elements: ["ECRightCuff", "ECLeftCuff"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                                {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                                {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                                {label: "Circle Pockets", elements: ["LeftRndPocket", "RightRndPocket", "LeftRndPocketCuff", "RightRndPocketCuff"] },
                                {label: "Heart Pockets", elements: ["HrtPcktLeft_00000011010503668109617630000000868876679039764388_", "HrtPcktRight"] },
                                {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                                {label: "Pockets", elements: ["LeftPocket", "RightPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Euro SweatPants",
                        options: [
                            { label: "Waist", elements: ["ESPWaist_00000077283938151704800080000008444017510037475217_"] },
                            { label: "Body", elements: ["ESPBody_00000133498749950570912600000017972602896135310015_"] },
                            { label: "Leg Cuffs", elements: ["ESPRightCuff_00000164477731841545748660000013149076215441253562_", "ESPLeftCuff_00000147936418990615227040000001645997826541013888_"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                                {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                                {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                                {label: "Circle Pockets", elements: ["LeftRndPocket", "RightRndPocket", "LeftRndPocketCuff", "RightRndPocketCuff"] },
                                {label: "Heart Pockets", elements: ["HrtPcktLeft_00000011010503668109617630000000868876679039764388_", "HrtPcktRight"] },
                                {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                                {label: "Pockets", elements: ["LeftPocket", "RightPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Britches Pants",
                        options: [
                            { label: "Waist", elements: ["BPWaist"] },
                            { label: "Legs", elements: ["BPRightLeg", "BPLeftLeg"] },
                            { label: "Body", elements: ["BPBody"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                                {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                                {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                                {label: "Circle Pockets", elements: ["LeftRndPocket", "RightRndPocket", "LeftRndPocketCuff", "RightRndPocketCuff"] },
                                {label: "Heart Pockets", elements: ["HrtPcktLeft_00000011010503668109617630000000868876679039764388_", "HrtPcktRight"] },
                                {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                                {label: "Pockets", elements: ["LeftPocket", "RightPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Footies Pants",
                        options: [
                            { label: "Waist", elements: ["FPWaist_00000155840126317534939610000007943338408952947378_"] },
                            { label: "Body", elements: ["FPBody_00000009549735439879242760000008182166266484979363_"] },
                            { label: "feet", elements: ["FPRightFoot_00000098180436191791874490000010773443282614185856_", "FPLeftFoot_00000143611989654149671010000017612352441603738782_"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                                {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                                {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                                {label: "Circle Pockets", elements: ["LeftRndPocket", "RightRndPocket", "LeftRndPocketCuff", "RightRndPocketCuff"] },
                                {label: "Heart Pockets", elements: ["HrtPcktLeft_00000011010503668109617630000000868876679039764388_", "HrtPcktRight"] },
                                {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                                {label: "Pockets", elements: ["LeftPocket", "RightPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Legging Pants",
                        options: [
                            { label: "Waist", elements: ["LPWaist"] },
                            { label: "Body", elements: ["LPBody"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                                {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                                {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                                {label: "Circle Pockets", elements: ["LeftRndPocket", "RightRndPocket", "LeftRndPocketCuff", "RightRndPocketCuff"] },
                                {label: "Heart Pockets", elements: ["HrtPcktLeft_00000011010503668109617630000000868876679039764388_", "HrtPcktRight"] },
                                {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                                {label: "Pockets", elements: ["LeftPocket", "RightPocket"] },
                        ]}
                    ]
                    }
                ]
            },
            {
                title: "crops",
                link: "/items/crops",
                image: "resources/CropsEuros.png",
                variants: [
                    {
                        label: "Crop - Hemmed",
                        options: [
                            { label: "Waistband", elements: ["HCWaist"] },
                            { label: "Body", elements: ["HCBody_00000125567742576380153460000002671796144486661534_"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                            {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                            {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                            {label: "Circle Pockets", elements: ["LeftCirPocket", "RightRndPocket", "LeftRndPocketCuff", "RightCirPocketCuff"] },
                            {label: "Heart Pockets", elements: ["HrtPcktLeft", "HrtPcktRight"] },
                            {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                            {label: "Hidden or Cargo Pockets", elements: ["LeftHidCovPocket", "RightHidCovPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Crop - Digs",
                        options: [
                            { label: "Waistband", elements: ["DigsWaist_00000005250936543746241200000000804603514933314467_"] },
                            { label: "DigLeftCuff", elements: ["DigsLeftCuff_00000142176999847187206770000014688065766103618997_"] },
                            { label: "DigRightCuff", elements: ["DigsRightCuff_00000117653865402338022560000001350464945375157653_"] },
                            { label: "Body", elements: ["DigsBody_00000059296815609998273430000002051081486484539535_"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                            {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                            {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                            {label: "Circle Pockets", elements: ["LeftCirPocket", "RightRndPocket", "LeftRndPocketCuff", "RightCirPocketCuff"] },
                            {label: "Heart Pockets", elements: ["HrtPcktLeft", "HrtPcktRight"] },
                            {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                            {label: "Hidden or Cargo Pockets", elements: ["LeftHidCovPocket", "RightHidCovPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Crop - Cuffed",
                        options: [
                            { label: "Waistband", elements: ["CCWaist_00000173868905665231555990000010122293800057754504_"] },
                            { label: "CuffLeft", elements: ["CCLeftCuff"] },
                            { label: "CuffRight", elements: ["CCRightCuff"] },
                            { label: "Body", elements: ["CCBody"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                            {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                            {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                            {label: "Circle Pockets", elements: ["LeftCirPocket", "RightRndPocket", "LeftRndPocketCuff", "RightCirPocketCuff"] },
                            {label: "Heart Pockets", elements: ["HrtPcktLeft", "HrtPcktRight"] },
                            {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                            {label: "Hidden or Cargo Pockets", elements: ["LeftHidCovPocket", "RightHidCovPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Crop - Cuffed Euro",
                        options: [
                            { label: "Waistband", elements: ["CECWaist_00000002374963185142003360000011353906822819844012_"] },
                            { label: "CuffedEuroLeft", elements: ["CECLeftCuff_00000033337839485162087750000010040116480601795738_"] },
                            { label: "CuffedEuroRight", elements: ["CECRightCuff_00000018231615366495583700000008791609602073274299_"] },
                            { label: "Body", elements: ["CECBody_00000065053002216826999080000006490409814529956537_"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                            {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                            {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                            {label: "Circle Pockets", elements: ["LeftCirPocket", "RightRndPocket", "LeftRndPocketCuff", "RightCirPocketCuff"] },
                            {label: "Heart Pockets", elements: ["HrtPcktLeft", "HrtPcktRight"] },
                            {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                            {label: "Hidden or Cargo Pockets", elements: ["LeftHidCovPocket", "RightHidCovPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Crop - Ruffled",
                        options: [
                            { label: "Waistband", elements: ["RCWaist"] },
                            { label: "Body", elements: ["RCBody"] }
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                            {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                            {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                            {label: "Circle Pockets", elements: ["LeftCirPocket", "RightRndPocket", "LeftRndPocketCuff", "RightCirPocketCuff"] },
                            {label: "Heart Pockets", elements: ["HrtPcktLeft", "HrtPcktRight"] },
                            {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                            {label: "Hidden or Cargo Pockets", elements: ["LeftHidCovPocket", "RightHidCovPocket"] },
                        ]}
                    ]
                    },
                    {
                        label: "Hemmed Euro Crop",
                        options: [
                            { label: "Waistband", elements: ["HECWaist"] },
                            { label: "Body", elements: ["HECBody_00000168111688436229216180000007335686330487872666_"] },
                        ],
                    extras: [
                        { label: "Add Pockets", types: [
                            {label: "Square Cargo Pockets", elements: ["SqCrgPcktLeft", "SqCrgPcktRight"] },
                            {label: "Purse Pockets", elements: ["PrsPcktLeft", "PrsPcktRight"] },
                            {label: "Circle Pockets", elements: ["LeftCirPocket", "RightRndPocket", "LeftRndPocketCuff", "RightCirPocketCuff"] },
                            {label: "Heart Pockets", elements: ["HrtPcktLeft", "HrtPcktRight"] },
                            {label: "Rounded Cargo Pockets", elements: ["RndCrgPcktLeft", "RndCrgPcktRight"] },
                            {label: "Hidden or Cargo Pockets", elements: ["LeftHidCovPocket", "RightHidCovPocket"] },
                        ]}
                    ] 
                    }
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