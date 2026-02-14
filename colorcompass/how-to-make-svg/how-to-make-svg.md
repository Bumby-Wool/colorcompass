# How To Make an SVG for the Bumby Builder
This is a guide on how to make an svg for use with the Bumby Builder code

## Example 1 - SVG Basics
Take a look at the `example1.html` file which has an SVG that draws a blue square with a purple border
Here's the SVG code
```
<svg viewBox="0 0 375 500" style="width: 375px;">
    <polygon id="square" points="10,10 365,10 365,490 10,490" style="fill:blue;stroke:purple;stroke-width:10;"></polygon>
</svg>
```
This SVG has a width of 375 pixels and a heigh of 500 pixels. That is the default width and height we will use for all of the SVGs in the Bumby Builder.
> 375px X 500px aligns to a standard picture frame ratio of 18:24

Nested inside the `<svg>` element is a `<polygon>` element that defines the square which was drawn. The polygon has a `points` attribute which defines the lines to draw for that polygon. Each point is written as X,Y with a space in between each point. 
> Think of the SVG as a grid where the point 0,0 is top left corner and the point 375,500 is the bottom right corner

The `<polygon>` in example 1 has 4 points so the SVG will draw a line, called a `stroke`, between each point. the properties of the `stroke` are defined in the `style` attribute of the `<polygon>`. Additionally, the `fill` property determines the color to paint the interior space of the `<polygon>`.

## Example 2 - Multiple Polygons
In `example2.html` you can see that we have the same SVG but now with two polygons defined. One polygon fills the top half of the SVG with blue and the other polygon fills the bottom half with red.
```
<svg viewBox="0 0 375 500" style="width: 375px;">
    <polygon id="topSquare" points="10,10 365,10 365,240 10,240" style="fill:blue;stroke:purple;stroke-width:10;"></polygon>
    <polygon id="bottomSquare" points="10,240 365,240 365,490 10,490" style="fill:red;stroke:purple;stroke-width:10;"></polygon>
</svg>
```
This is how in the Bumby Builder we can show clothing items with different colored sections. To make an SVG that draws a sweater you could use one polygon with all the points to draw the sweater's shape; however, for the Bumby Builder any section of a sweater which the customer can choose a color for has to be its own polygon.
> In the finished SVGs the strokes of polygon also show a more realistic image of the sweater as they represent some of the seams in the clothing.

## Example 3 - Tips for making SVGs for the Bumby Builder
The `example3.html` file shows a full example of what a sweater SVG might be like. The following sections contain tips on specific parts of `example3.html` for how to construct an SVG for use in the Bumby Builder.

### Picking Points Over an Existing Image
One way to make drawing the sections easier by tracing an existing image. On line 23 of the `example3.html` file you can see an example image that is commented out. Replace that line with the line below to see what this can look like.
```
<img src="Cardi.jpg" width="375" style="position:absolute;z-index: -9999;" />
```
Now you can the image shows up behind the SVG which is an effective way to help you find the right points to use for the different sections

### Strokes
With the finished SVG you'll want the strokes to appear as clothing seams by using the following style attribute on the polygon.
```
style="stroke:#000;stroke-width:2;stroke-opacity: 0.3;"
```
That style looks nice but isn't very helpful while you are trying to create the SVG so I recommend using a much clearer stroke like the following while you are creating the SVG. Once you have the strokes and fills working the way you want switch them to the one above for the finished look.
```
style="stroke:purple;stroke-width:3;"
```

### Shadows for added realism
In example 3 I created a darkened portion of the hood to create the illusion of shadow.
These lines are 71-76 in `example3.html` showing the inner hood section
```
<polygon id="innerHood" points="85,138 95,115 125,110 180,115 235,105 268,110 185,145 175,160 158,142"
    ng-class="selectedOptions.hoodColor.patternId" style="stroke:#000;stroke-width:2;stroke-opacity: 0.3;" />
<polygon id="innerHoodDarkener" points="85,138 95,115 125,110 180,115 235,105 268,110 185,145 175,160 158,142"
    style="fill:rgba(0,0,0,0.3);" />
```
Both of these polygons use the exact same points. The first polygon is set to the same color as the rest of the hood. The second polygon is set to a semi-transparent black to create the darkened effect.
> The order here matters, the second polygon is drawn on top of the first

### Additional Clothing Options
For clothing that has optional features such as sleeve cuffs or different necklines you won't need to create separate SVGs for each option. Instead you we can hide and show the polygons based on the user's choices. Let's take a look at the sleeve cuffs option for in `example3.html`

Here is one of the sleeve cuff polygons

**Lines 44-46**
```
<polygon id="leftCuff" points="8,385 50,385 45,420 8,420" ng-if="selectedOptions.extras.option1.show"
    ng-class="selectedOptions.extras.option1.color.patternId"
    style="stroke:#000;stroke-width:2;stroke-opacity: 0.3;" />
```
The `ng-if` attribute of the polygon determines whether it is shown or hidden. 

> Attributes like `ng-if` are part of the [angular js](https://docs.angularjs.org/tutorial) framework. You don't really need to understand angular js to build these SVGs

If `selectedOptions.extras.option1.show` is set to `true` the polygon is shown. If it is set to `false` then it isn't. 

The value `true` or `false` comes from the input element below. If the checkbox is checked then the value is `true` otherwise it is `false`.

**Line 112**
```
<label><input type="checkbox" ng-model="selectedOptions.extras.option1.show"> Add cuffs</label>
```
> Like the shadow effect, order here matters. make sure to place the polygon below other polygons that it needs to be placed over top of

The main thing to know is that if there are optional features of an item you can hide or show the polygons by tying them to one of the extras options by adding `ng-if="selectedOptions.extras.option1.show"` to the polygon element.

In the next section about using the SVG template we'll see a little more about the use of these extra options.

## Using the SVG Template file
The `svg-template.html` file is designed to help you build the SVGs for the Bumby Builder. 
### Make a copy
Start by copying the file and rename it for the specific item you are making

### Start Drawing
Next start to modify it by adding polygons at **line 25** after where it says `<!-- ADD POLYGONS HERE -->`. 
If you want to use a tracing image put it in the same folder as the svg-template file you created and the modify **line 22** by uncommenting it (remove the `<!-- -->`) and changing the `src="myTracingImage.jpg"` to match the name of your image.

### Adding Configurable Colors
Add `ng-class="selectedOptions.colorOption1.patternId"` to your polygons To get a better idea of how the polygons will look with configurable colors you can add them to your polygons.
**Before**
```
<polygon id="square" points="10,10 365,10 365,490 10,490" style="stroke:#000;stroke-width:2;stroke-opacity: 0.3;"></polygon>
```
**After**
```
<polygon id="square" points="10,10 365,10 365,490 10,490" 
    ng-class="selectedOptions.colorOption1.patternId" style="stroke:#000;stroke-width:2;stroke-opacity: 0.3;"></polygon>
```

### Adding Optional Features
> **Note:** you can tie the same option to multiple polygon elements