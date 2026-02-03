# Bumby Wool Builder
Helps Bumby Wool customers to visualize their custom wool clothing

## How to Use
You will find this documentation easier to understand if you have some foundational knowledge on these topics
* JSON - https://www.w3schools.com/js/js_json_intro.asp
* Git/GitHub - https://docs.github.com/en/get-started/quickstart/hello-world
* AngularJS - https://docs.angularjs.org/tutorial

### Adding/Removing Colors
The colors are controled by a JSON file called `color_patterns.json` in the root folder of the project. In the `color_patterns.json` file there is an array of color objects. Each color object looks like this:
```
{ "name": "Hops", "patternId": {"fill": "#007258"} }
```
> Each color object in the array will be followed by a `,` at the end of the line **except** for the very last color at the end of the array

#### Adding a color
1. Go to the [color_patterns.json](https://github.com/Bumby-Wool/builder/blob/main/color_patterns.json) file.
2. Click on the `pencil icon` to edit the file
> If you don't have the edit button for the file be sure you have signed-in to github with an account that has edit permission for this repo

![image](https://user-images.githubusercontent.com/2077589/126038193-e470d8dd-a43e-4a1e-bc63-12fcc7d4a604.png)


3. Now copy an existing color object and paste it into the array
> The colors in the website are displayed in the same order they are in this array. 
> Also the first color in the array is the default color display when viewing an item.

![image](https://user-images.githubusercontent.com/2077589/126038307-306805a0-30db-49db-8ded-06517124cc3b.png)


4. Next modify the pasted color object's name and hex code to be the new color

![image](https://user-images.githubusercontent.com/2077589/126038355-e1c8ff48-3406-4c4f-8cbf-862ed004c4ae.png)


5. Scroll to the bottom of the page and then click the `Commit Changes` button to save your changes. Optionally you can add a description with details of what changes you made.

![image](https://user-images.githubusercontent.com/2077589/126038403-211800c8-4abf-4d79-bd64-39c66cf5130a.png)


#### Removing a color
1. Go to the [color_patterns.json](https://github.com/Bumby-Wool/builder/blob/main/color_patterns.json) file.
2. Click on the `pencil icon` to edit the file
> If you don't have the edit button for the file be sure you have signed-in to github with an account that has edit permission for this repo

![image](https://user-images.githubusercontent.com/2077589/126038193-e470d8dd-a43e-4a1e-bc63-12fcc7d4a604.png)


3. Select the whole line of the color you'd like to delete

![image](https://user-images.githubusercontent.com/2077589/126038486-830c9f83-ed86-4908-9072-a2c738fd6c64.png)


4. Then delete that line

![image](https://user-images.githubusercontent.com/2077589/126038525-5e0cd036-b557-49c6-bfa9-e988d34f534f.png)


5. Scroll to the bottom of the page and then click the `Commit Changes` button to save your changes. Optionally you can add a description with details of what changes you made.

![image](https://user-images.githubusercontent.com/2077589/126038403-211800c8-4abf-4d79-bd64-39c66cf5130a.png)

#### Adding a Pattern (Tie Dyes & Other Image Based Fills)
This process is similar to adding a color but more complex. If you are not familar with adding and removing colors please read that documentation first.

##### Adding a pattern image with hosted image
1. Upload the image to the bumbywool.com site and copy the URL link to that image
    ex. https://bumbywool.com/wp-content/uploads/2017/08/Adult-Sheepy.png
2. Go to the [color_patterns.json](https://github.com/Bumby-Wool/builder/blob/main/color_patterns.json) file
3. Following the same steps as with the adding colors, except with the color_patterns.json file, copy an existing pattern object and paste it into the list as a new object.
4. Modify the new object properties as explained bellow in the `Pattern Properties Explained` section making sure to set the imageUrl to the URL link you copied from the bumbywool.com site

<details>
    <summary>Not Recommended - Adding a pattern image directly into project</summary>
    
    **This method is not recommended because the image's file sizes quickly use up the available bandwidth for this site's hosting**

    #### First Time Setup for Adding Patterns
    You need to add the image you are using for the pattern into the GitHub repository. For this you need to "clone" the repository.

    Click on the green `Code` button on GitHub and select `Open with GitHub Desktop`
    > If you do not already have GitHub Desktop installed it will prompt you to download and install it. You should also sign-in to you GitHub account when you open GitHub Desktop for the first time.

    1. Find the location on your laptop where you cloned the repo 
    > If you have no idea what that means please read the `First Time Setup for Adding Patterns` information just above

    > If you don't remember where the files were placed you can find this by opening GitHub Desktop and choosing the "Open in file explorer option"

    2. Add the image file into the `resources/patterns` folder
    3. Open GitHub Desktop and it should have detected the new file(s) in the folder showing the files listed in the "Files Changed" section
    4. Add a Summary, just a decription of what you added
    5. Click the `Commit` button
    6. Click `Push` button. If you miss this step the file(s) will not show up in GitHub.
    7. Go to the [color_patterns.json](https://github.com/Bumby-Wool/builder/blob/main/color_patterns.json) file
    8. Copy an existing pattern object and paste it into the list
    9. Modify the object properties as explained bellow in the `Pattern Properties Explained` section making sure to set the imageUrl to the image that you added
    10. Commit these changes
</details>


##### Pattern Properties Explained
In the [color_patterns.json](https://github.com/Bumby-Wool/builder/blob/main/color_patterns.json) file you will see that it is a list of objects like this one:
```
{
    "type": "pattern",
    "name": "Green Tie Dye",
    "svgPatternId": "green",
    "patternId": { "fill": "url(#green)"},
    "imageUrl": "/builder/resources/patterns/green_tie_dye_cropped.jpg"
}
```
`type` - This lets the color selector know to treat this differently than a typical color. **The value should always be "pattern"**
`name` - This is the display name that is shown when selecting the color. It can contain spaces
`svgPatternId` - This is an ID for the pattern. **Should not contain any spaces or special characters and must be unique.**
`patternId` - Tells the color selector how to display the color. Follows the same format replace `<svgPatternId>` in `{ "fill": "url(#<svgPatternId>)"}` with the value you chose for the svgPatternId. If these don't match your pattern won't display properly.
`imageUrl` - Relative path to the image which is displayed as the pattern.

##### Shorthand Pattern
For a condensed version defining patterns you can simply define the `name` property. When used this way the `name` value should not contain any spaces or special characters and must be unique. The image is assumed to be placed in the relative folder "/builder/resources/patterns/" with the image name as "`name`.jpg"
```
{ "name": "Cenotes" }
```
Using the shorthand version the other necessary properties are filled in using the `name` value. The example above will create the fully populated object below.
```
{
    "type": "pattern",
    "name": "Cenotes",
    "svgPatternId": "Cenotes",
    "patternId": { "fill": "url(#Cenotes)"},
    "imageUrl": "/builder/resources/patterns/Cenotes.jpg"
}
```

#### Removing patterns
Follow the same steps as with the removing colors except using the [color_patterns.json](https://github.com/Bumby-Wool/builder/blob/main/color_patterns.json) file instead of color_patterns.json

### Adding New Items
#### Overview
> While following the steps keep `itemname` consistent, in all lowercase, and without spaces

> Across these sections I use the `<path>` element but these same instructions can be applied to `<polygon>`, `rect`, and other SVG 

1. Define the item, see **Defining the Item properties** below
2. Place the item definition object you created into the array at `/services/itemDataService.js`
3. Add a new `itemname`-svg.html file to /components/item/item-templates
4. Open the SVG image file in a text editor and copy the svg element and everything inside of it `<svg>....</svg>`
5. Paste the copied SVG content into the `itemname`-svg.html file you created

> If you would like to test the item locally before pushing it into GitHub please see the [README_DEVELOPER.md](https://github.com/Bumby-Wool/builder/blob/main/README_DEVELOPER.md) page for more information on running the project on your laptop

#### Defining the Item properties
Each Item object has the following properties:
`title` - The name of the item which is displayed beneath the image on the item list page and also as the title on the item page. This can contain Uppercase letters, spaces, and special characters.
`link` - Should always follow the format /items/`itemname` and will form the direct URL to the item's page
`image` - This is a relative URL to for the image to display on the item list page
`variants` - This array holds all of the different item types the user is able to view on that item. Only if there is more than one variant will the user be shown a dropdown element to choose the variant they want to view. The first variant in the variants array is the default one displayed to the user.

**Example Item**
```
{
    title: "Pants",
    link: "/items/pants",
    image: "resources/Baby-Standard-Pants-Mild-Tapered-Hemmed-Main.png",
    variants: [
        ...Variant Objects...
    ]
}
```

#### Variant Object Properties
Each Variant object has the following properties:
`label` - The name of the variant which is displayed to the user in the dropdown selection for item type. Only displayed if there is more than one variant in the variants array for this item.
`options` - This array defines the standard color selection options for the variant. See **Option Object Properties** section below for details on the objects inside of this array.
`extras` - Defines additional options which have a checkbox next to the `label`. The checkbox determines if this extra is being added to the item. When checked it will prompt the the color selector to display and make the Option's elements appear in the Item SVG. Objects in this have the same properties as Options, see **Option Object Properties** section below for details on the objects inside of this array.

**Example Variant**
```
{
    label: "Hemmed",
    options: [
        ...Option Objects...
    ],
    extras: [
        ...Option Objects...
    ]
}
```

#### Option Object Properties
Each Option object has the following properties: 
`label` - Propery which is displayed above the color selector on the item's page.
`elements` - The elements property holds an array of string values. the string values are the IDs of the SVG elements that this Option's color selector controls. These IDs are created during the SVG import process and must match. ex. The **waistband** ID in the waist option `{ label: "Waist", elements: ["waistband"] }` controls the color of the SVG element `<path ng-style="$ctrl.getSelectedOptionStyle('waistband')" ..../>` because the ID **wasitband** matches.
**optional** `colorSelector` - Determines the type of color selector to be shown, only add this property to the object if you want to change the color selector away from its default. Valid values are `zipper` and `none`. 
    * Set the value to `zipper` in order to make the selection for this option draw from the zipper patterns. 
    * Set the value to `none` when having no color option is desired. This is mostly useful for Options in the `extras` array when the color for the extra is set by another element. ex. Sheepy hug kangaroo pocket can have pocket cuffs but the color of the cuffs always matches the pocket's color.
**optional** `show` - Only valid for Option objects inside of the `extras` array. Will default the checkbox to be checked if the value of this property is set to true. ex. `{ label: "Add Bottom Cuff", elements: ["bottomCuff"], show: true }`

**Example Options**
```
{ label: "Waist", elements: ["waistband"] }

{ label: "Leg Cuffs", elements: ["leftShortCuff", "rightShortCuff"] }

{ label: "Cuffed Pocket", elements: ["pocketKangarooLeftCuff", "pocketKangarooRightCuff"], colorSelector:"none" }

{ label: "Zipper", elements: ["quarterCenterTrimZipperShort", "quarterCenterTrimZipperTall"], colorSelector:"zipper" }
```

#### Adding Color Options to the SVG
1. Find the `<path>` elements within the SVG
2. Add `style="fill:red"` to the path element to help identify it
> Sometimes there are paths that do not show up when you fill them with red. These paths can just be ignored
3. Once you know what part of the item that path is for then give it an id to note what 
> These ids should be unique and not repeat within the same SVG
```
<path id="bottomCuff" style="fill:red" ....</path>
```

4. Now that you know what part of the item this path fills you need to tie it a particular option from the item definition you made in the earlier step
5. Replace `style="fill:red"` with the code below
```
ng-style="$ctrl.selectedOptions.colorOption1.patternId"
```
In the example code above it configures the `<path>` to be filled with the color selected for the first option in the options array. To tie the fill of this `<path>` to a different option simply change the number at the end of `colorOption1` to the number of the option in the list.

For example, using the **Example Item** above to tie a `<path>` to the "Collar" option use `colorOption2`
```
<path id="collar" ng-style="$ctrl.selectedOptions.colorOption2.patternId">....</path>
```
and for the "Sleeves" option you would use `colorOption3` because it is the third option in the options array. The sleeves elements may look like this
```
<path id="leftSleeve" ng-style="$ctrl.selectedOptions.colorOption3.patternId">....</path>
<path id="rightSleeve" ng-style="$ctrl.selectedOptions.colorOption3.patternId">....</path>
```
> Tying both left and right sleeves to the same option will control the color of both sleeves from the same color selector

#### Additional Options (Extras) to the SVG
Adding the extra options is similar to the process of adding a normal color option.
The main differences are that Extra options are:
* Given their fill color from the `extras` array
* Shown/hidden from the SVG based on a checkbox input from the user

Follow steps 1-4 of **Adding Color Options to the SVG** adn then 
5. Replace `style="fill:red"` with the code below
```
ng-if="$ctrl.selectedOptions.extras.option1.show" ng-style="$ctrl.selectedOptions.extras.option1.color.patternId"
```
> Notice that for extras instead of using `colorOption1` we use `extras.option1.color`. However the pattern of matching the option number with the list stays the same. `extras.option1` for the first extra, `extras.option2` for the second extra, etc.

> Do make sure that when you change options to change both spots it is used, `extras.option2.show` **and** `extras.option2.color.patternId`

Using the **Example Item** for instance, the SVG paths would look like this
```
<path id="leftSleeve" ng-if="$ctrl.selectedOptions.extras.option1.show" ng-style="$ctrl.selectedOptions.extras.option1.color.patternId">....</path>
<path id="rightSleeve" ng-if="$ctrl.selectedOptions.extras.option1.show" ng-style="$ctrl.selectedOptions.extras.option1.color.patternId">....</path>
<path id="centerPocket" ng-if="$ctrl.selectedOptions.extras.option2.show" ng-style="$ctrl.selectedOptions.extras.option2.color.patternId">....</path>
```

#### Creating a Shadowed Area
> An example of this is the inside of a hood on a sweater

1. Copy the `<path>....</path>` element
> There may not be an end tag like `</path>`. In this case copy all of `<path .... />`, the end of the element here is `/>`

2. After the `</path>` of the element you copied create a new line below
3. Paste the `<path>....</path>` element you copied on the new line
4. Add this attribute to the copied path element `style="fill:rgba(0,0,0,0.3);"`

#### Hiding an Element
When reusing an SVG for multiple items it may be useful to hide a specific element. For example, the sweater template there is a full zipper/button element and a quarter zip/button element.

To do this add `style="display:none;"` to the element you want to hide
```
<path style="display:none;" >....</path>
```

### Removing Items

## How to Contribute
See the `README_DEVELOPER.md` page for more technical details
