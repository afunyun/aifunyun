1. Include the stylesheet on your document's `<head>`

```html
<head>
  <link rel="stylesheet" href="boxicons.min.css">
</head>
```

Instead of installing you may use the remote version

```html
<head>
  <link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
  <!-- or -->
  <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
</head>
```

2. To use an icon on your page, add a class 'bx' and separate class with the icons name with a prefix 'bx-' for regular icons , 'bxs-' for solid icons and 'bxl-' for logos:

```html
<i class="bx bx-hot"></i>
<i class="bx bxs-hot"></i>
<i class="bx bxl-facebook-square"></i>
```
### Using via Web Component

Boxicons includes a Custom Element that makes using icons easy and efficient. To use it, add the `box-icon-element.js` file to the page:

```html
<script src="https://unpkg.com/boxicons@2.1.3/dist/boxicons.js"></script>
```

To use an icon, add the `<box-icon>` element to the location where the icon should be displayed:

```html
<box-icon name="hot"></box-icon>
```
  To use solid icons or logos add attribute `type` as solid or logo before the name
 ```html
<box-icon type="solid" name="hot"></box-icon>
<box-icon type="logo" name="facebook-square"></box-icon>
```
The `<box-icon>` custom element supports the following attributes:

```html
<box-icon
    type = "regular|solid|logo"
    name="adjust|alarms|etc...."
    color="blue|red|etc..."
    size="xs|sm|md|lg|cssSize"
    rotate="90|180|270"
    flip="horizontal|vertical"
    border="square|circle"
    animation="spin|tada|etc..."
    pull = "left|right"
></box-icon>
```
-   `type`: Should always be first and be one of the following values: `regular`,`solid`, `logo`
-   `name` : (REQUIRED) the name of the icon to be displayed
-   `color`: A color for the icon.
-   `size`: The size for the icon. It supports one of two types of values:
    -   One of the following shortcuts: `xs`, `sm`, `md`, `lg`
    -   A css unit size (ex. `60px`)
-   `rotate`: one of the following values: `90`, `180`, `270`
-   `flip`:  one of the following values: `horizontal`, `vertical`
-   `border`: one of the following values: `square`, `circle`
-   `animation`: One of the following values: `spin`, `tada`, `flashing`, `burst`, `fade-left`, `fade-right`, `spin-hover`, `tada-hover`, `flashing-hover`, `burst-hover`, `fade-left-hover`, `fade-right-hover`
-   `pull`: one of the following values: `left`,`right`
The Custom Element class (`BoxIconElement`) exposes the following static members:

-   `tagName`: property that holds the HTML element tag name. Default: `box-icon`
-   `defined([tagName])`: Defines the Element in the custom element registry using either the tagName provided on input or the (default) the one defined on the Class.
-   `cdnUrl`: property that holds the URL that will be used to retrieve the images. URL should point to the folder that contains the images. example: `//unpkg.com/boxicons@1.5.2/svg` (no trailing forward slash)
-   `getIconSvg(iconName)`: method used to retrieve the SVG image. Should return a Promise that resolves with the SVG source (String).

[Check out all the icons here!](https://boxicons.com)
