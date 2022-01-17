# Bumby Wool Builder
Helps Bumby Wool customers to visualize their custom wool clothing

## How to Use
### Adding/Removing Colors
The colors are controled by a JSON file called `colors.json` in the root folder of the project. In the `colors.json` file there is an array of color objects. Each color object looks like this:
```
{ "name": "Hops", "patternId": {"fill": "#007258"} }
```
> Each color object in the array will be followed by a `,` at the end of the line **except** for the very last color at the end of the array

#### Adding a color
1. Go to the (colors.json)[https://github.com/Bumby-Wool/builder/blob/main/colors.json] file.
2. Click on the `pencil icon` to edit the file
> If you don't have the edit button for the file be sure you have signed-in to github with an account that has edit persmission for theis repo

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
1. Go to the (colors.json)[https://github.com/Bumby-Wool/builder/blob/main/colors.json] file.
2. Click on the `pencil icon` to edit the file
> If you don't have the edit button for the file be sure you have signed-in to github with an account that has edit persmission for theis repo

![image](https://user-images.githubusercontent.com/2077589/126038193-e470d8dd-a43e-4a1e-bc63-12fcc7d4a604.png)


3. Select the whole line of the color you'd like to delete

![image](https://user-images.githubusercontent.com/2077589/126038486-830c9f83-ed86-4908-9072-a2c738fd6c64.png)


4. Then delete that line

![image](https://user-images.githubusercontent.com/2077589/126038525-5e0cd036-b557-49c6-bfa9-e988d34f534f.png)


5. Scroll to the bottom of the page and then click the `Commit Changes` button to save your changes. Optionally you can add a description with details of what changes you made.

![image](https://user-images.githubusercontent.com/2077589/126038403-211800c8-4abf-4d79-bd64-39c66cf5130a.png)

### Adding New Items
#### Overview
> While following the steps keeping `itemname` consistent, in all lowercase, and without spaces
> Across these sections I use the `<path>` element but these same instructions can be applied to `<polygon>`, `rect`, and other SVG elements
1. Define the item, see **Defining the Item properties** below
2. Place the item definition object you created into the array at `/services/itemDataService.js`
3. Add a new `itemname`-svg.html file to /components/item/item-templates
4. Open the SVG image file in a text editor and copy the svg element and everything inside of it `<svg>....</svg>`
5. Paste the copied SVG content into the `itemname`-svg.html file you created

#### Defining the Item properties
`title` - The name of the item which is displayed beneath the image on the item list page and also as the title on the item page. This can contain Uppercase letters, spaces, and special characters.
`link` - Should always follow the format /items/`itemname` and will form the direct URL to the item's page
`image` - This is a relative URL to for the image to display on the item list page
`options` - Defines the color selection options for the item. Each object in the array has a `label` propery which is displayed above the color selector on the item's page.
`extras` - Defines additional options which add/remove elements of the SVG by a checkbox next to the `label`

**Example Item**
```
{
    title: "Sweater",
    link: "/items/sweater",
    image: "resources/Zipper-Henley-adult.jpg",
    options: [
        { label: "Main Body" },
        { label: "Collar" },
        { label: "Sleeves" }
    ],
    extras: [
        { label: "Add Sleeve Cuffs" },
        { label: "Add Center Pocket" }
    ]
}
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
