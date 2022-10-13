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
                        label: "Ruffled Shorts",
                        options: [
                            { label: "Waist", elements: ["RSWaist"] },
                            { label: "Body", elements: ["RSBody"] }
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
                        label: "Bloomers",
                        options: [
                            { label: "Waist", elements: ["BSWaist_00000111150194491071445110000009593294278546746796_"] },
                            { label: "Body", elements: ["BSBody_00000139274455867981567040000000121106883652003747_"] },
                            { label: "Cuffs", elements: ["BSLeftCuff", "BSRightCuff"] }
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
                        label: "Skirtie",
                        options: [
                            { label: "Waist", elements: ["SkWaist"] },
                            { label: "Body", elements: ["SkBody_00000013195378269940335980000002693956104079809924_"] }
                        ],
                        extras: [
                        ]}
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
                            { label: "Body", elements: ["SheepyhugSweaterBody"] },
                            { label: "Side Body", elements: ["SheepyhugSweaterLeftSidePanel", "SheepyhugSweaterRightSidePanel"] },
                            { label: "Hood", elements: ["SheepyhugHood", "SheepyhugHoodFill"] },
                            { label: "Sleeves", elements: ["SheepyhugRightSleeve", "SheepyhugLeftSleeve"] },
                            { label: "Sleeve Cuffs", elements: ["SheepyhugRightCuff", "SheepyhugLeftCuff"] },
                            { label: "Pocket", elements: ["SheepyhugPocket_00000021120025893808588770000001030535383966542526_"] }
                        ],
                        extras: [
                            { label: "Add Bottom Cuff", elements: ["SheepyhugBottomCuff"] },
                            { label: "Add Pocket Cuffs", types: [
                                {label: "Kangaroo CuffS", elements: [ "RPcktCuff", "LPcktCuff"] }
                            ]}
                        ]
                    },
                    {
                        label: "Cocoon Sweater",
                        options: [
                            { label: "Body", elements: ["CocoonBody"] },
                            { label: "Trim", elements: ["CocoonTrim"] },
                            { label: "Sleeves", elements: ["CocoonRSleeve", "CocoonLSleeve"] },
                            { label: "Sleeve Cuffs", elements: ["CocoonRightCuff", "CocoonLeftCuff"] } 
                        ],
                        extras: [
                            { label: "Add Pockets", types: [
                                {label: "Rounded Angled", elements: ["RndAnglePcktR", "RndAnglePcktL"] },
                                {label: "Rounded Angled Cuffed", elements: ["RPcktCuff", "LPcktCuff", "RndAnglePcktR", "RndAnglePcktL"] },
                                {label: "Square Angled", elements: ["SqrAnglePcktR", "SqrAnglePcktL"] },
                                {label: "Square Angled Cuffed", elements: ["RPcktCuff", "LPcktCuff", "SqrAnglePcktR", "SqrAnglePcktL"] },
                                {label: "Rounded flat", elements: ["RndFlatPcktR", "RndFlatPcktR_00000092445190267426784790000011558285010564762767_"] },
                                {label: "Heart", elements: ["HrtPcktR", "HrtPcktL"] },
                                {label: "Purse", elements: ["PrsPcktR", "PrsPcktL"] }
                            ]}
                        ]
                    },
                    {
                        label: "Quarter Zip",
                        options: [
                            { label: "Body", elements: ["QuarterSweaterBody"] },
                            { label: "Side Body", elements: ["QuarterSweaterLeftSidePanel", "QuarterSweaterRightSidePanel"] },
                            { label: "Neck", types: [
                                { label: "Tall Collar", elements: ["TallCollar_00000125573187673682285190000014496743265075223211_"] },
                                { label: "Short Collar", elements: ["ShortCollar_00000130639884938210770930000008669500092146933134_"] },
                                { label: "Hood", elements: ["Hood_00000083805946112308332890000002891442673746281346_", "HoodFill_00000003099604874630399990000015571489469321712034_"] },
                                { label: "Hood & Tall Collar", elements: ["TallCollar_00000125573187673682285190000014496743265075223211_", "Hood_00000083805946112308332890000002891442673746281346_", "HoodFill_00000003099604874630399990000015571489469321712034_"] },
                                { label: "Hood & Short Collar", elements: ["ShortCollar_00000130639884938210770930000008669500092146933134_", "Hood_00000083805946112308332890000002891442673746281346_", "HoodFill_00000003099604874630399990000015571489469321712034_"] }
                            ]},
                            { label: "Sleeves", elements: ["QuarterRightSleeve", "QuarterLeftSleeve"] },
                            { label: "Sleeve Cuffs", elements: ["QuarterRightCuff", "QuarterLeftCuff"] },
                            { label: "Zipper", elements: ["QuarterZip"], colorSelector:"zipper" },
                        ],
                        extras: [
                            { label: "Add Bottom Cuff", elements: ["QuarterBottomCuff"] },
                            { label: "Add Pocket Cuffs", types: [
                                {label: "Kangaroo Cuffed", elements: ["RPcktCuff", "LPcktCuff"] },
                                {label: "Rounded Angled Cuffed", elements: ["RPcktCuff", "LPcktCuff"] },
                                {label: "Square Angled Cuffed", elements: ["RPcktCuff", "LPcktCuff"] }
                            ]},
                            { label: "Add Pockets", types: [
                                {label: "Rounded Angled", elements: ["RndAnglePcktR", "RndAnglePcktL"] },
                                {label: "Square Angled", elements: ["SqrAnglePcktR", "SqrAnglePcktL"] },
                                {label: "Rounded flat", elements: ["RndFlatPcktR", "RndFlatPcktR_00000092445190267426784790000011558285010564762767_"] },
                                {label: "Kangaroo", elements: ["Kangaroo"] },
                                {label: "Heart", elements: ["HrtPcktR", "HrtPcktL"] },
                                {label: "Purse", elements: ["PrsPcktR", "PrsPcktL"] },
                            ]}
                        ]
                    },
                    {
                        label: "Half Zip",
                        options: [
                            { label: "Body", elements: ["HalfZipSweaterBody_00000119838947203410075020000000538395446201435053_"] },
                            { label: "Side Body", elements: ["HalfZipSweaterLeftSidePanel_00000134209921852998001010000016830497152334817684_", "HalfZipSweaterRightSidePanel_00000052785450975900319770000010404084037395891630_"] },
                            { label: "Neck", types: [
                                { label: "Tall Collar", elements: ["TallCollar_00000096781217521668280110000009125476678240014780_"] },
                                { label: "Short Collar", elements: ["ShortCollar_00000160882779433284900430000012505166826721756806_"] },
                                { label: "Hood", elements: ["Hood_00000087391407447128084680000002775155269104432317_", "HoodFill_00000044862054000031455020000009531068385004742056_"] },
                                { label: "Hood & Tall Collar", elements: ["TallCollar_00000096781217521668280110000009125476678240014780_", "Hood_00000087391407447128084680000002775155269104432317_", "HoodFill_00000044862054000031455020000009531068385004742056_"] },
                                { label: "Hood & Short Collar", elements: ["ShortCollar_00000160882779433284900430000012505166826721756806_", "Hood_00000087391407447128084680000002775155269104432317_", "HoodFill_00000044862054000031455020000009531068385004742056_"] }
                            ]},
                            { label: "Sleeves", elements: ["HalfZipRightSleeve_00000049187548496325933920000005524563299710993035_", "HalfZipLeftSleeve_00000050662224817599592150000003610810620995548597_"] },
                            { label: "Sleeve Cuffs", elements: ["HalfZipRightCuff_00000083792517775903090720000004203456499086822837_", "HalfZipLeftCuff_00000178179389664677894240000007980141533104802446_"] },
                            { label: "Zipper", elements: ["HalfZip_00000155147293554217136010000007043751664322959791_"], colorSelector:"zipper" }
                        ],
                        extras: [
                            { label: "Add Bottom Cuff", elements: ["HalfZipBottomCuff_00000098904105625684452270000006283531426859574463_"] },
                            { label: "Add Pockets", types: [
                                {label: "Rounded Angled", elements: ["RndAnglePcktR", "RndAnglePcktL"] },
                                {label: "Rounded Angled Cuffed", elements: ["RPcktCuff", "LPcktCuff", "RndAnglePcktR", "RndAnglePcktL"] },
                                {label: "Square Angled", elements: ["SqrAnglePcktR", "SqrAnglePcktL"] },
                                {label: "Square Angled Cuffed", elements: ["RPcktCuff", "LPcktCuff", "SqrAnglePcktR", "SqrAnglePcktL"] },
                                {label: "Rounded flat", elements: ["RndFlatPcktR", "RndFlatPcktR_00000092445190267426784790000011558285010564762767_"] },
                                {label: "Kangaroo", elements: ["Kangaroo"] },
                                {label: "Kangaroo Cuffed", elements: ["Kangaroo", "RPcktCuff", "LPcktCuff"] },
                                {label: "Heart", elements: ["HrtPcktR", "HrtPcktL"] },
                                {label: "Purse", elements: ["PrsPcktR", "PrsPcktL"] }
                            ]}
                        ]
                    },
                    {
                        label: "Henley",
                        options: [
                            { label: "Body", elements: ["HenleySweaterBody", , "henleyLine"] },
                            { label: "Pocket", elements: ["SheepyhugPocket_00000062874192161538280310000000253160929982706362_"] },
                            { label: "Neck", types: [
                                { label: "Hood", elements: ["Hood_00000157994250730694846200000005983678880421254802_", "HoodFill_00000142895482361448243120000008923250145134613120_"] },
                                { label: "Tall Collar", elements: ["TallCollar_00000170995999379726756140000011495366800018700452_"] },
                                { label: "Short Collar", elements: ["ShortCollar_00000063598696175291568490000011871263599672130994_"] },
                                { label: "Hood & Tall Collar", elements: ["TallCollar_00000170995999379726756140000011495366800018700452_", "Hood_00000157994250730694846200000005983678880421254802_", "HoodFill_00000142895482361448243120000008923250145134613120_"] },
                                { label: "Hood & Short Collar", elements: ["ShortCollar_00000063598696175291568490000011871263599672130994_", "Hood_00000157994250730694846200000005983678880421254802_", "HoodFill_00000142895482361448243120000008923250145134613120_"] },
                            ]},
                            { label: "Side Body", elements: ["HenleySweaterLeftSidePanel", "HenleySweaterRightSidePanel"], show: true },
                            { label: "Sleeves", elements: ["HenleyRightSleeve", "HenleyLeftSleeve"] },
                            { label: "Sleeve Cuffs", elements: ["HenleyRightCuff", "HenleyLeftCuff"] },
                            { label: "Center", types: [
                                { label: "Zipper", elements: ["HenleyZip"], colorSelector:"zipper" },
                                { label: "Button up", elements: ["HenleyButton"] }
                            ]}
                        ],
                        extras: [
                            { label: "Add Bottom Cuff", elements: ["HenleyBottomCuff"], show: true },
                            { label: "Add Pocket Cuffs", types: [
                                {label: "Kangaroo Cuffed", elements: ["RPcktCuff", "LPcktCuff"] }
                            ]}
                        ]
                    },
                    {
                        label: "Cardigan",
                        options: [
                            { label: "Body", elements: ["CardiganSweaterBody"] },
                            { label: "Side Body", elements: ["CardiganSweaterLeftSidePanel", "CardiganSweaterRightSidePanel"] },
                            { label: "Neck", types: [
                                { label: "Tall Collar", elements: ["TallCollar_00000096740233782976255870000008197843053209280184_"] },
                                { label: "Short Collar", elements: ["ShortCollar_00000147186300464306764600000012890538756985861268_"] },
                                { label: "Hood", elements: ["Hood_00000058552844475252033970000004537032376107617979_", "HoodFill_00000180350995394164302220000014849385863992442812_"] },
                                { label: "Hood & Tall Collar", elements: ["TallCollar_00000096740233782976255870000008197843053209280184_", "Hood_00000058552844475252033970000004537032376107617979_", "HoodFill_00000180350995394164302220000014849385863992442812_"] },
                                { label: "Hood & Short Collar", elements: ["ShortCollar_00000147186300464306764600000012890538756985861268_", "Hood_00000058552844475252033970000004537032376107617979_", "HoodFill_00000180350995394164302220000014849385863992442812_"] }
                            ]},
                            { label: "Sleeves", elements: ["CardiganRightSleeve", "CardiganLeftSleeve"] },
                            { label: "Sleeve Cuffs", elements: ["CardiganRightCuff", "CardiganLeftCuff"] },
                            { label: "Center", types: [
                                { label: "Zipper", elements: ["CardiganZipper"], colorSelector:"zipper" },
                                { label: "Button up", elements: ["CardiganButton"] }
                            ]}
                        ],
                        extras: [
                            { label: "Add Bottom Cuff", elements: ["VestBottomCuff"], show: true },

                            { label: "Add Pockets", types: [
                                {label: "Rounded Angled", elements: ["RndAnglePcktR", "RndAnglePcktL"] },
                                {label: "Rounded Angled Cuffed", elements: ["RPcktCuff", "LPcktCuff", "RndAnglePcktR", "RndAnglePcktL"] },
                                {label: "Square Angled", elements: ["SqrAnglePcktR", "SqrAnglePcktL"] },
                                {label: "Square Angled Cuffed", elements: ["RPcktCuff", "LPcktCuff", "SqrAnglePcktR", "SqrAnglePcktL"] },
                                {label: "Rounded flat", elements: ["RndFlatPcktR", "RndFlatPcktR_00000092445190267426784790000011558285010564762767_"] },
                                {label: "Heart", elements: ["HrtPcktR", "HrtPcktL"] },
                                {label: "Purse", elements: ["PrsPcktR", "PrsPcktL"] }
                            ]}
                        ]
                    },
                    {
                        label: "Crew",
                        options: [
                            { label: "Body", elements: ["CrewNeckSweaterBody"] },
                            { label: "Side Body", elements: ["CrewNeckSweaterLeftSidePanel", "CrewNeckSweaterRightSidePanel"] },
                            { label: "Neck", elements: ["CrewNeck"] },
                            { label: "Sleeves", elements: ["CrewNeckRightSleeve", "CrewNeckLeftSleeve"] },
                            { label: "Sleeve Cuffs", elements: ["CrewNeckRightCuff", "CrewNeckLeftCuff"] }
                        ],
                        extras: [
                            { label: "Add Bottom Cuff", elements: ["CrewNeckBottomCuff"] },
                            { label: "Add Pockets", types: [
                                {label: "Rounded Angled", elements: ["RndAnglePcktR", "RndAnglePcktL"] },
                                {label: "Rounded Angled Cuffed", elements: ["RPcktCuff", "LPcktCuff", "RndAnglePcktR", "RndAnglePcktL"] },
                                {label: "Square Angled", elements: ["SqrAnglePcktR", "SqrAnglePcktL"] },
                                {label: "Square Angled Cuffed", elements: ["RPcktCuff", "LPcktCuff", "SqrAnglePcktR", "SqrAnglePcktL"] },
                                {label: "Rounded flat", elements: ["RndFlatPcktR", "RndFlatPcktR_00000092445190267426784790000011558285010564762767_"] },
                                {label: "Kangaroo", elements: ["Kangaroo"] },
                                {label: "Kangaroo Cuffed", elements: ["Kangaroo", "RPcktCuff", "LPcktCuff"] },
                                {label: "Heart", elements: ["HrtPcktR", "HrtPcktL"] },
                                {label: "Purse", elements: ["PrsPcktR", "PrsPcktL"] }
                            ]}
                        ]
                    },
                    {
                        label: "Shawl Neck",
                        options: [
                            { label: "Body", elements: ["ShawlSweaterBody"] },
                            { label: "Side Body", elements: ["ShawlSweaterLeftSidePanel", "ShawlSweaterRightSidePanel"] },
                            { label: "Trim", elements: ["ShawlTrim"] },
                            { label: "Sleeves", elements: ["ShawlRightSleeve", "ShawlLeftSleeve"] },
                            { label: "Sleeve Cuffs", elements: ["ShawlRightCuff", "ShawlLeftCuff"] }
                        ],
                        extras: [
                            { label: "Add Bottom Cuff", elements: ["VestBottomCuff"], show: true },

                            { label: "Add Pockets", types: [
                                {label: "Rounded Angled", elements: ["RndAnglePcktR", "RndAnglePcktL"] },
                                {label: "Rounded Angled Cuffed", elements: ["RPcktCuff", "LPcktCuff", "RndAnglePcktR", "RndAnglePcktL"] },
                                {label: "Square Angled", elements: ["SqrAnglePcktR", "SqrAnglePcktL"] },
                                {label: "Square Angled Cuffed", elements: ["RPcktCuff", "LPcktCuff", "SqrAnglePcktR", "SqrAnglePcktL"] },
                                {label: "Rounded flat", elements: ["RndFlatPcktR", "RndFlatPcktR_00000092445190267426784790000011558285010564762767_"] },
                                {label: "Heart", elements: ["HrtPcktR", "HrtPcktL"] },
                                {label: "Purse", elements: ["PrsPcktR", "PrsPcktL"] }
                            ]}
                        ]
                    },
                    {
                        label: "CampFire",
                        options: [
                            { label: "Body", elements: ["CampfireBody_00000170244581396509663830000003427713814946487442_"] },
                            { label: "Side Body", elements: ["CampfireLeftSidePanel_00000093135057836102853010000012768035626530286759_", "CampfireRightSidePanel_00000040557372062079609460000016491289051611172284_"] },
                            { label: "Neck", elements: ["CampfireNeck_00000046310307428978349810000013612050494271288993_"] },
                            { label: "Sleeves", elements: ["CampfireRightSleeve_00000069371634321454252050000010406483489980602006_", "CampfireLeftSleeve_00000139252793523566518900000017786704464211590293_"] },
                            { label: "Sleeve Cuffs", elements: ["CampfireRightCuff_00000065760145665194582450000009654923043154304412_", "CampfireLeftCuff_00000041283872498375009410000018326987088179655595_"] }
                        ],
                        extras: [
                            { label: "Add Bottom Cuff", elements: ["VestBottomCuff"], show: true },

                            { label: "Add Pockets", types: [
                                {label: "Rounded Angled", elements: ["RndAnglePcktR", "RndAnglePcktL"] },
                                {label: "Rounded Angled Cuffed", elements: ["RPcktCuff", "LPcktCuff", "RndAnglePcktR", "RndAnglePcktL"] },
                                {label: "Square Angled", elements: ["SqrAnglePcktR", "SqrAnglePcktL"] },
                                {label: "Square Angled Cuffed", elements: ["RPcktCuff", "LPcktCuff", "SqrAnglePcktR", "SqrAnglePcktL"] },
                                {label: "Rounded flat", elements: ["RndFlatPcktR", "RndFlatPcktR_00000092445190267426784790000011558285010564762767_"] },
                                {label: "Kangaroo", elements: ["Kangaroo"] },
                                {label: "Kangaroo Cuffed", elements: ["Kangaroo", "RPcktCuff", "LPcktCuff"] },
                                {label: "Heart", elements: ["HrtPcktR", "HrtPcktL"] },
                                {label: "Purse", elements: ["PrsPcktR", "PrsPcktL"] }
                            ]}
                        ]
                    },
                    {
                        label: "Vest",
                        options: [
                            { label: "Body", elements: ["VestChest", "VestLowerTorso_00000182497226486756089930000010016587736277426567_"] },
                            { label: "Side Body", elements: ["VestRightSidePanel", "VestLeftSidePanel"] },
                            { label: "Neck", types: [
                                { label: "Tall Collar", elements: ["TallCollar_00000125573187673682285190000014496743265075223211_"] },
                                { label: "Short Collar", elements: ["ShortCollar_00000021085712356639165720000015774940922761103235_"] },
                                { label: "Hood", elements: ["Hood_00000047745864555876966430000014637321368015702681_", "HoodFill_00000181773798462086411590000000549933047917184922_"] },
                                { label: "Hood & Tall Collar", elements: ["TallCollar_00000125573187673682285190000014496743265075223211_", "Hood_00000047745864555876966430000014637321368015702681_", "HoodFill_00000181773798462086411590000000549933047917184922_"] },
                                { label: "Hood & Short Collar", elements: ["ShortCollar_00000021085712356639165720000015774940922761103235_", "Hood_00000047745864555876966430000014637321368015702681_", "HoodFill_00000181773798462086411590000000549933047917184922_"] }
                            ]},
                            { label: "Center", types: [
                                { label: "Zipper", elements: ["VestZipper"], colorSelector:"zipper" },
                                { label: "Button up", elements: ["VestButton"] }
                            ]}
                        ],
                        extras: [
                            { label: "Add Bottom Cuff", elements: ["VestBottomCuff"], show: true },

                            { label: "Add Pockets", types: [
                                {label: "Rounded Angled", elements: ["RndAnglePcktR", "RndAnglePcktL"] },
                                {label: "Rounded Angled Cuffed", elements: ["RPcktCuff", "LPcktCuff", "RndAnglePcktR", "RndAnglePcktL"] },
                                {label: "Square Angled", elements: ["SqrAnglePcktR", "SqrAnglePcktL"] },
                                {label: "Square Angled Cuffed", elements: ["RPcktCuff", "LPcktCuff", "SqrAnglePcktR", "SqrAnglePcktL"] },
                                {label: "Rounded flat", elements: ["RndFlatPcktR", "RndFlatPcktR_00000092445190267426784790000011558285010564762767_"] },
                                {label: "Heart", elements: ["HrtPcktR", "HrtPcktL"] },
                                {label: "Purse", elements: ["PrsPcktR", "PrsPcktL"] }
                            ]}
                        ]
                    },
                ]
            }
        ];
    })