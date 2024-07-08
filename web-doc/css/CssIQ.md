# This file contains HTML Interview questions, their corresponding answers

1. What is the difference between an ID selector and a class selector in CSS?
    - ID slecetor select the element based on the id name where as class selector selects the element based on the class name.
    - ID selectors is defined using `#` where as class selector defined using `.`.
    - ID selectors have higher specificity than class selectors, which neans id selctor styles has higher priority than class selectors.

2. How do you include CSS in an HTML document?
    - CSS can be include in HTML document in many ways they are:
        - Inline styling: Allows to add styling directly within the element using style attribute.
        - Internal styling: Allows us to seperate the styles from element and place inside <head> section using <style> tag.
        - External styling: Involves placing css styles in a seperate file  with `.css` extension. Use the <link> element in the <head> section of your HTML document to link to the external CSS file: `<link rel="stylesheet" href="styles.css">`. 

3. Can you explain the differences between Flexbox and CSS Grid? When would you use each?
    | Feature            | CSS Flexbox                                                | CSS Grid                                                    |
    |--------------------|------------------------------------------------------------|-------------------------------------------------------------|
    | Layout Model       | One-dimensional layout model, used for laying out items in a single direction (row or column). | Two-dimensional layout model, used for creating grid-based layouts with rows and columns. |
    | Axis               | Has a main axis and a cross axis. Items are laid out along the main axis and can be aligned along the cross axis. | Has both row and column axes, allowing for more complex layouts with rows and columns. Items can be aligned along both axes. |
    | Alignment          | Uses properties like `justify-content` and `align-items` to align items along the main and cross axes respectively. | Uses properties like `justify-items`, `align-items`, `justify-content`, and `align-content` for alignment, providing more control over both axes. |
    | Spacing            | Provides limited control over spacing between items. You can use properties like `justify-content: space-between` or `margin` for spacing. | Provides more control over spacing between rows and columns using properties like `grid-gap`, `row-gap`, and `column-gap`, allowing for precise spacing in grid layouts. |
    | Use Cases          | Best suited for simpler layouts where items need to be flexibly sized and aligned along a single axis, such as navigation menus or card layouts. | Ideal for more complex layouts with multiple rows and columns, such as website layouts, forms, or dashboard designs. Provides greater flexibility and control over the layout. |

4. How do you center a div horizontally and vertically in CSS?
    - div can be centered horizontally and vertically in various ways they are:
        - using flex
        - using grid
        - absolute positioning with transform
        - using margin auto for horizontal centering

5. What is responsive design, and why is it important?
    - Responsive design is an approach to the web design that ensures website looks and functions well on variety of screen sizes.
    - Responsive design is important because:
        - Improved user experience
        - Increased reach
        - Cost effective
        - SEO benefits
        - Future-proofing

6. How do media queries work in CSS? Can you provide an example?
    - media queries in css allows us to apply different styles to a web page based on the characteristics of the device such as screen size, orientation and more.
    - The key concepts of media query are:
        - media-type: Type of device (mobile, desktop etc)
        - media feature: characteristics of the device (height, width, orientation, resolution)
        - Logical operators: combine multiple media queries using and, nor and only.
    - Basic syntax: @media [media-type] ([media-feature]) {}.

7. What are pseudo-classes and pseudo-elements? Can you provide examples?
    - A pseudo class element is used to select a special state of an element.
    - The pseudo-element is used style the specific part the element

8. How do you handle specificity in CSS? What are some ways to avoid specificity issues?
    - Specificity helps us to understand which rules or stling need =s to be applied when multiple rules/styling been applied on an element.
    - It is calculated based on the selector used:
        - inline styles has higher priority
        - id selectors higher than class and attribute selectors.
        - class and pseud-class selectors higher than element selectors.
        - element selector has lowest specificity.
    - The ways to avoid specificity issues are:
        - Using class over ids
        - minimize the use of inline styling
        - Less use of !important
    
9. Can you explain the CSS box model and how it affects layout?
10. What are the different positioning schemes in CSS (static, relative, absolute, fixed, sticky)?
11. What is a CSS preprocessor (e.g., SASS/SCSS) and what are its benefits?
    - CSS preprocessor is scripting language that extend CSS by allowing the developers write code in one language(SASS/SCSS) and then compile it to regular CSS.
    - These processors introduces features that are not available in regualr CSS such as variables,nested rules, functions, and mixins which helps in writing more efficient and maintainable code.
    - The benefits of preprocessors are:
        - Variable: allows us store a value in a single variable, making it easier to maintain and update styles.
        - Nesting: allows nested syntax, similar to the html structure and making css more readable and maintainable.
        - mixins: allows us to create a block of code that can be included in the multiple selectors. 
        - functions and operations: lets us to define function and allows us to perform operations which will be useful for calculation and logic in the stylesheet.

12. How do CSS animations and transitions work? Can you provide an example of each?
13. How do you optimize a website’s performance using CSS?
14. What are some common CSS pitfalls, and how can you avoid them?
15. How would you implement a responsive navigation menu using CSS?
16. What are CSS variables, and how do you use them?
    - CSS variables, also known as custom properties, allow you to store values that can be reused throughout your stylesheet.
    - CSS variables are defined using the -- prefix and are typically placed within a :root selector to make them global, but they can also be scoped to specific elements.
    - CSS variable can be accessed using var().

17. Can you explain the concept of mobile-first design and how you implement it in CSS?
    - Mobile-first design is an approach in web development where the design process starts with the smallest screen size (mobile devices) and then progressively enhances the design for larger screens (tablets, desktops).
    - This approach ensures that the core content and functionality are accessible on mobile devices and then improved upon for larger screens.

18. What is the difference between inline, inline-block, and block elements in CSS?
19. How do you use CSS to create a grid layout?
20. What are CSS sprites, and how do you use them?
    - CSS sprites are a technique used in web development to reduce the number of HTTP requests made for image resources on a webpage. 
    - By combining multiple images into a single image file (a sprite sheet), you can load all the images in one request and then use CSS to display individual parts of the sprite as needed
    - How to use them:
        - Create a Sprite Sheet: Combine all your images into a single image file. Tools like Photoshop, GIMP, or online sprite generators can help with this.
        - Determine the Positions: Note the position of each individual image within the sprite sheet.
        - Use CSS to Display Images: Use the background-image, background-position, and width/height properties to display the desired part of the sprite sheet.
21. How do you use the @import rule in CSS?

22. What is the difference between display: none and visibility: hidden in CSS?
    | Property            | `display: none`                                  | `visibility: hidden`                              |
    |---------------------|--------------------------------------------------|--------------------------------------------------|
    | **Element Presence**| Removed from the document flow                   | Remains in the document flow                      |
    | **Layout Effect**   | Does not occupy any space on the page            | Occupies space on the page                        |
    | **Interactivity**   | Not interactable                                 | Not interactable                                  |
    | **Common Use Case** | Completely hide elements without affecting layout| Hide elements but keep space for layout consistency|


23. How do you create a CSS transition effect on hover?
24. What are web fonts, and how do you use them in your CSS?