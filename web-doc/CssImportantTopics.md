# This document contains all the important topics comes under HTML

## CSS Selectors
- CSS selectors are used to find/select the HTML elements we want to style.
- CSS selector can be classified into following category:
    - Simple selector
    - Combinator selector
    - Pseudo-class selector
    - Pseudo-elements selector
    - Attribute selector

### Simple selector
- Selects the HTML element based on the element, id, class.
- Simple selector can be classified in to following:

    | Selector Name        | Symbol      | Example       | Definition                                                                 |
    |----------------------|-------------|---------------|----------------------------------------------------------------------------|
    | Element Selector     | `tag name`  | `p`           | Selects HTML elements based on the element name (e.g., paragraph `<p>`).   |
    | ID Selector          | `#`         | `#para1 {}`   | Selects HTML elements based on the unique id attribute of an element.      |
    | Class Selector       | `.`         | `.classname{}` or `p.center{}` | Selects HTML elements based on the class attribute of an element. Multiple elements can have the same class. |
    | Universal Selector   | `*`         | `* {}`        | Selects all HTML elements on a page for styling.                           |
    | Grouping Selector    | `,`         | `h1, h2, h3 {}` | Groups multiple selectors to apply the same style.                        |

### Combinator selector
- Combinator selector are used to select the element based on their relationship with the other HTML element.
- Two or more simple selector can be combined by using any of the combinator selector.
- Combinator selector can be classified into following:

    | Selector Name        | Symbol      | Example       | Definition                                                                 |
    |----------------------|-------------|---------------|----------------------------------------------------------------------------|
    | Descendent selector | `space selector` | .main p | &bull; The descendant selector matches all the element that are descendent of the specified element<br>&bull; Example: select all the `p` tag element under classname `main` |
    | Child selector | `>` | div > p |&bull; The child selector selects all the elements that are children of the specfied element<br>&bull; If there is a nested `p` tag element then they are descendent of `div` tag but not the child.<br>&bull; Example: It takes all the `p` tag element that are immediate child of the `div` tag|
    | Adjacent Sibling selector | `+` | div+p | &bull; The sibling selects the element that is directly after the specfied element<br>&bull; Sibbling element must have the same parent and immediately following<br>&bull; Example: It selects the first `p` element that is encounter immediately after the `div` |
    | General Sibling selector | `~` | div~p | &bull; The general sibling selector selects all the element that are siblings the specfied element<br>&bull; Example: It selects all the `p` tag element that comes after the `div` tag | 

### Pseudo-class selector
- A pseudo class element is used to select a special state of an element.
- It allows us to style the element based on the element state or position in the document.
- pseudo-class selector are defined using `:` and defined next to the simple selector.

    | Selector            | Example           | Description                                                   |
    |---------------------|-------------------|---------------------------------------------------------------|
    | :active             | a:active          | Selects the active link                                       |
    | :checked            | input:checked     | Selects every checked `<input>` element                       |
    | :disabled           | input:disabled    | Selects every disabled `<input>` element                      |
    | :empty              | p:empty           | Selects every `<p>` element that has no children              |
    | :enabled            | input:enabled     | Selects every enabled `<input>` element                       |
    | :first-child        | p:first-child     | Selects every `<p>` element that is the first child of its parent |
    | :first-of-type      | p:first-of-type   | Selects every `<p>` element that is the first `<p>` element of its parent |
    | :focus              | input:focus       | Selects the `<input>` element that has focus                  |
    | :hover              | a:hover           | Selects links on mouse over                                   |
    | :in-range           | input:in-range    | Selects `<input>` elements with a value within a specified range |
    | :invalid            | input:invalid     | Selects all `<input>` elements with an invalid value          |
    | :lang(language)     | p:lang(it)        | Selects every `<p>` element with a lang attribute value starting with "it" |
    | :last-child         | p:last-child      | Selects every `<p>` element that is the last child of its parent |
    | :last-of-type       | p:last-of-type    | Selects every `<p>` element that is the last `<p>` element of its parent |
    | :link               | a:link            | Selects all unvisited links                                   |
    | :not(selector)      | :not(p)           | Selects every element that is not a `<p>` element             |
    | :nth-child(n)       | p:nth-child(2)    | Selects every `<p>` element that is the second child of its parent |
    | :nth-last-child(n)  | p:nth-last-child(2) | Selects every `<p>` element that is the second child of its parent, counting from the last child |
    | :nth-last-of-type(n) | p:nth-last-of-type(2) | Selects every `<p>` element that is the second `<p>` element of its parent, counting from the last child |
    | :nth-of-type(n)     | p:nth-of-type(2)  | Selects every `<p>` element that is the second `<p>` element of its parent |
    | :only-of-type       | p:only-of-type    | Selects every `<p>` element that is the only `<p>` element of its parent |
    | :only-child         | p:only-child      | Selects every `<p>` element that is the only child of its parent |
    | :optional           | input:optional    | Selects `<input>` elements with no "required" attribute       |
    | :out-of-range       | input:out-of-range | Selects `<input>` elements with a value outside a specified range |
    | :read-only          | input:read-only   | Selects `<input>` elements with a "readonly" attribute specified |
    | :read-write         | input:read-write  | Selects `<input>` elements with no "readonly" attribute      |
    | :required           | input:required    | Selects `<input>` elements with a "required" attribute specified |
    | :root               | :root             | Selects the document's root element                           |
    | :target             | #news:target      | Selects the current active #news element (clicked on a URL containing that anchor name) |
    | :valid              | input:valid       | Selects all `<input>` elements with a valid value             |
    | :visited            | a:visited         | Selects all visited links                                     |

### Pseudo-element selector
- The pseudo-element is used style the specific part the element
- The pseudo-class target special state of an element where as pseudo-element targets specific part of the element.
- The pseudo-element is denoted by `::`.

    | Selector          | Example        | Description                                                    |
    |-------------------|----------------|----------------------------------------------------------------|
    | ::after           | p::after       | Insert something after the content of each `<p>` element       |
    | ::before          | p::before      | Insert something before the content of each `<p>` element      |
    | ::first-letter    | p::first-letter| Selects the first letter of each `<p>` element                 |
    | ::first-line      | p::first-line  | Selects the first line of each `<p>` element                   |
    | ::marker          | ::marker       | Selects the markers of list items                              |
    | ::selection       | p::selection   | Selects the portion of an element that is selected by a user   |

### Attribute selector
- It is used to style the HTML elements that have a specific attributes or attribute value.

    | Selector              | Example                 | Example description                                                                         |
    |-----------------------|-------------------------|--------------------------------------------------------------------------------------------|
    | [attribute]           | [target]                | Selects all elements with a target attribute                                                |
    | [attribute=value]     | [target="\_blank"]      | Selects all elements with target="\_blank"                                                  |
    | [attribute~=value]    | [title~="flower"]       | Selects all elements with a title attribute that contains a space-separated list of words, one of which is "flower" |
    | [attribute\|=value]   | [lang|="en"]            | Selects all elements with a lang attribute value starting with "en"                        |
    | [attribute^=value]    | a[href^="https"]        | Selects all <a> elements with a href attribute value starting with "https"                 |
    | [attribute$=value]    | a[href$=".pdf"]         | Selects all <a> elements with a href attribute value ending with ".pdf"                     |
    | [attribute*=value]    | a[href*="w3schools"]    | Selects all <a> elements with a href attribute value containing the substring "w3schools"  |

## CSS Property: [W3Schools property demo](https://www.w3schools.com/cssref/playdemo.php?filename=playcss_display)

### CSS Display
- The display property is used to control the layout of the element.
- It is used to specify how the element needs to be displayed in a web page.
- The commonly used Display values are:

    | value              | Example                 | description                                                                        |
    |-----------------------|-------------------------|--------------------------------------------------------------------------------------------|
    | inline | `<span>, <a>, <em>, <b>,etc` |&bull; The inline element takes the required width only. <br>&bull;It doesn't force the line break<br>&bull; For inline element we cannot set the widht and height |
    | inline-block | -- | &bull; The inline-block is similar to inline itself.<br>&bull; The only difference is that we can set width, height, padding and margin like block element |
    | block | `div>, <p>, <h1> to <h6>, <ul>, <ol>, <li>` |&bull; The block element takes the entire width available in a web-page.<br>&bull; They force line breaks.<br>&bull; We can set width, height, padding and margin for the element |
    | none | -- | &bull;The none value totally removes the element from the page and it does not take any space |
    | flex | -- | &bull; The flexbox offers a one dimensional layout.<br>&bull; It gives more flexibility while working on either element (row or column wise).|
    | grid | -- | &bull; Grid box is a two-dimensional grid-based layout with rows and columns.<br>&bull; Grid can work on both rows and column at a time |

### CSS Position
- The position property is used to control the position of an element relative to its normal position in the document flow.
- Once elements are positioned using position property, we then use top, bottom, left, and right properties to position.
- Statis position element is not effected by top, bottom, left, right.
- The position property has following values:

    | Value    | Description                                                                                                                                                                                                                                 |
    |----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Static   | &bull; HTML elements are by default positioned to `static`<br>&bull; Static elements are not affected by any other properties (top, bottom, left, right)<br>&bull; The static positioned element is always positioned according to the normal flow of the webpage |
    | Relative | &bull; The relative positioned elements are positioned relative to their normal flow in the document flow.<br>&bull; This means the properties TBLR help to move the element from its original position without affecting the other elements on a page.<br>&bull; Other content will not be adjusted to fit into any gap left by the element |
    | Fixed    | &bull; Elements with a fixed position property are removed from the normal document flow and positioned relative to the viewport.<br>&bull; The fixed element always stays in the same place even if the page is scrolled.<br>&bull; The properties TBLR are used to position the element.<br>&bull; Since it is removed from the normal flow of the document, it does not occupy space in the layout and hence does not leave a gap in the page where it was located. |
    | Absolute | &bull; The absolutely positioned elements are positioned relative to the nearest positioned ancestor.<br>&bull; If there is no near positioned ancestor, it uses the document body/viewport and moves along with the page scrolling.<br>&bull; It is removed from the normal flow of the document and can overlap with other elements.<br>&bull; It is useful for creating overlays. |
    | Sticky   | &bull; The sticky positioned element is used to make it stick to a position on the page when the user scrolls.<br>&bull; It is a hybrid of `relative` and `fixed`.                                                                                                                                               |
 
## Measuring Units
- The measuring units are used to define the size or length of element.
- The most commonly used measuring units are:
    - Absolute length units
    - Relative length units
    - Percentage
    - Others

### Absolute length units
- The absolute units of measurements are fixed and do not change absed on the viewport or the user preference.
- They are used when we need to define a specific size that doesn't change.
- The absolute length units are:

    | Unit   | Unit Name | Explanation                                                                                   |
    |--------|-----------|-----------------------------------------------------------------------------------------------|
    | px     | Pixels    | &bull; One pixel is equal to one dot on the screen.<br>&bull; It is commonly used for defining precise measurements in web design. |
    | in     | Inches    | Equal to 96 pixels. This unit is more commonly used in print stylesheets where physical dimensions are important. |
    | cm     | Centimeters| Equal to 37.8 pixels. Like inches, centimeters are a physical unit of measurement used in print stylesheets. |
    | mm     | Millimeters| Equal to 3.78 pixels. Millimeters are another physical unit of measurement used in print stylesheets. |
    | pt     | Points    | Equal to 1/72 of an inch. Points are commonly used in print stylesheets for font sizes. |
    | pc     | Picas     | Equal to 12 points. Picas are also used in print stylesheets for specifying lengths. |

### Relative length units
- The relative units of measurement are based on other properties of the element or the environment.
- The other properties or elements such as:
    - size of the font
    - viewport size
    - size of the parent element
- Relative units are useful for creating responsive and more flexible on different screen sizes.
- The relative length units are:

    | Unit   | Explanation                                                                                           |
    |--------|-------------------------------------------------------------------------------------------------------|
    | em     | &bull; Equal to the computed font size of the element.<br>&bull; For example, if the font size is 16px, 1em is 16px.   |
    | rem    | &bull; Equal to the computed font size of the root element (<html>). <br>&bull; Unlike em, rem is always relative to the root element's font size. |
    | vw     | &bull; Equal to 1% of the width of the viewport.<br>&bull; For example, 10vw is 10% of the viewport width.            |
    | vh     | &bull; Equal to 1% of the height of the viewport.<br>&bull; For example, 10vh is 10% of the viewport height.          |
    | vmin   | Equal to the smaller of vw or vh. Useful for ensuring that an element fits within the viewport regardless of its aspect ratio. |
    | vmax   | Equal to the larger of vw or vh. Useful for ensuring that an element fills the viewport, but does not overflow it. |

### Percentage length units
- Percetange units are relative to another value, typically depends on the size of the parents element or viewport.
- Percentage units are commonly used for creating responsive website.
- Percentage units are represented using `%`.
- Percentage units are used to create a layout that adjust dynamically based on the size of the viewport.