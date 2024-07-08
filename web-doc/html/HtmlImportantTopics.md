# This document contains all the important topics comes under HTML

## Basic of HTML

### Structure

- `<!DOCTYPE html>` : This declaration specifies the document type and the version of HTML used.
- `<html>` : This is the root element of the file which contains all the other element.
- `<head>` : This section contains all the meta information about the document such as character encoding, viewport, link to external javascript and css files.
    - `<meta charset="utf-8">` : This specifies the character encoding for the dcoument here we are using UTF-8 which supports wide range of character.
    - `<title>` : Specifies the title of the document which will appears in browser tab or window title bar.
    - `<meta name="description" content="">` : It provides brief description of the document which will be used for search engine and social media sharing.
    - `<meta name="viewport" content="width=device-width, initial-scale=1">`:
        - The viewport is the visible area of a web page displayed in a web browser
        - Sets the viewport width to the device width and initial zoom level to 1
        - Ensuring the page is displayed correctly on different devices and screen sizes.
    - `<meta name="robots" content="noindex, nofollow">` : Instructs search engine crawlers not to index the page or follow its links.
    - `<meta http-equiv="refresh" content="5;url=https://example.com/">` : Automatically redirects the browser to another page after a specified time (5 seconds in this example).
    - `<link rel="stylesheet" href="">` : Specifies a link to an external stylesheet. The href attribute should contain the URL of the stylesheet.
- `<body>` : Contains the content of the document that is displayed in the browser window.
- `<script src="" async defer></script>` : Specifies a link to an external JavaScript file. The async and defer attributes are used to control when the script is executed.
- Comments: 
    - Single line comment: `<!-- This is a single-line comment -->`.
    - Multiline comment


### Elements and Tags

- Elements and Tags are the fundamental concepts of HTML, that defines the structure and content of the webpage.
- Element:
    - It consists of an opening tag, content, and a closing tag.
    - The opening tag indicates the start of the content.
    - The closing tag indicates the end of the content.
    - Elements can also be self-closing, means they don't have any content between opening and closing tags. For example: <img>
- Tag:
    - A tag is a keyword enclosed in angle brackets.
    - There are two types of tags: Open tag and closing tag.

### Attributes

- Attributes provides additional information about the element.
- They are written as name=value pairs, where name is attribute name and value is attribute value, seperated by an equal sign.
- Some of the common attributes are:
    - id
    - class
    - href
    - src
    - alt
    - title etc.,

### Semantic elements

- Semantic elements are the tags that clearly describes their meaning in the context of the webpage.
- The elements provides more information about the content than just presenting in a web page.
- By properly using the semantic  elements in a web page it can imporve accessibility, SEO and maintainability of the code.
- Some of the common semantic elements are:
    - `<header>`
    - `<nav>`
    - `<main>`
    - `<article>`
    - `<section>`
    - `<aside>`
    - `<footer>`
    - `<figure> and <figcaption>`

### Forms and Validations

- An HTML form is used to collect information from the user as an input and submit that information for processing.
- Forms are created using the `<form>` element, which contains various form controls.
- The most common form attributes are:
    - `action`: It has the URL to which the form data will be submitted. This attribute is required.
    - `method`: It contains the HTTP method to be used when submitting the form. The  default method is "GET".
    - `target`: It specifies where we need to display the response after submitting the form. Common values are `_self` (displays in the same window) and `_target` (dispalys in the new window or tab).
    - `name`: This attribute specifies the name of the form. It is used for referencing the form in the scripts.
    - `novalidate`: Specifies that the form should not be validated when submitted. Useful for testing or when using custom validation scripts.
    - `onsubmit`: Specifies a JavaScript function to be executed when the form is submitted.
- Form validation is the process of ensuring that user inputs meets certain requirements before it is submitted to the server.
- Different ways of performing form validation ares:
    - Using `required` attributte on the form element to make them required.
    - Using input types such as `email, text, url, number, ...` to ensure that the input matches the expected format.
    - Using `pattern` attribute to specify regular expression that the input must match.
    - Using `min & max` to specify minimum and maximum values for numeric inputs.
    - Using `custom validation`.

### Links and Images

#### Links

- Links are created using `<a>` element.
- Links are used to navigate between different web pages in a browser, sections within the same page, or external resource.
- Links can be added in the following ways:
    - Basic link
    - Relative link
    - Linking to sections within a page
    - Linking to email address using 'mailto:'
    - Linking to phone number using 'tel:'
- By default when a link is clicked the target page is opened in the same browser window or tab, if we want open in a new window/tab we can use target.

#### Images

- Images are inserted into a webpage using the `<img>` element.
- src: This attribute specifies the URL of the image file.
- alt: This attribute is used to mention alternative text for the image. This text is displayed if the image is failed to load
- The URL to src attribute can be relative or absolute.
- To add caption to an image we can use `<figure> & <figcaption>`. These elements helps us to semantically specify the caption with the image, which can be beneficial for accessibilioty and SEO.
- Images can also be used to link to other resource or webpage by simply wrapping `<img>` element with `<a>` element.

### Lists

- Lists are used to group related items together, It is a common way of organizing content on a webpage.
- Lists are categorized into three types:
    - Ordered lists (`<ol>`):
        - An ordered lists in HTML is used to create a list of items that need to be displayed in a specific order.
        - Each item in a list is represented using `<li> (list item abbreviated as li)`.
        - Ordered lists is typically displayed with numbers by default or letters by using css.
        - The different types of attributes we can use with `<ol>` are:
            - type: 
                - It specifies the type of representing the list item, by default it is decimal numbers, 
                - Other representation are 'A' (capital letter) or 'a' (small letter).
            - start:
                - Specifies the starting number for the lists, by default it is 1.
            - reversed:
                - It specifies whether the numbering should be displayed in reverse order.
                - The numbering starts at a specified start value and counts down to 1.
    - Unordered lists (`<ul>`):
        - An unordered lists is used to create a list of items that do not have a specific order or sequence.
        - Each item in a list is represented using `<li> (list item abbreviated as li)`.
        -  Unordered lists are typically displayed with bullets or other markers before each items.
        - The different types of attributes we can use with `<ul>` are:
            - type: 
                - It is not commonly used for `<ul>` as it is more relevant for `<ol>`.
                - It specifies the type of the marker we need to use such as circle, square or disc.            
    - Definition lists (`<dl>`):
        - A definition list in HTML is used to define a list of terms and their corresponding definitions.
        - It is structured using `<dt> (defintion term)` for the terms and `<dd> (definition description)` for the definition.
        - It is often used for glossaries, dictionaries or where a term is followed by its definition.

### Meta Tags

- Meta tags in HTML are used to provide the metadata about the HTML document.
- Metadata is a information about the HTML document which is not displayed in the webpage but essential for search engines and other web services.
- Meta tags are placed in `<head>` section of an HTML document.
- Meta tags do not have closing tags.
- Some of the commonly used Meta tags are:
    - charset: specifies the character encoding for the document. 
    - viewport
    - description
    - keywords: Provides a list of keywords or phrases taht are relevant to the document content. 
    - author
    - http-equiv="refresh"

## Intermediate

### Tables

- Tables in HTML are used to display data in rows and columns.
- The table structure is as follows:
    - `<table>`: This element defines the entire table, all the other elements related to table comes inside this element.
    - `<tr>`: This element defines a row in the table.
    - `<th>`: This elements defines a header cell in the table. Header cells are typically displayed in bold and centered by default.
    - `<td>`: This elements defines the data cell in the table. Data cells contain the actual content of the table.
- The different attributes related to table are:
    - colspan
    - rowspan
    - border
    - align
    - bgcolor
    - width & height
    - scope: mentioned in Header cell to specify whether they apply to a row or column.

### Inline vs Block elements

- In HTML elements are categorized as either block-level elements or inline elements.
- Block-level elements:
    - It starts on a new line and take up the full width available(by default).
    - We can set the width, height, margins, and padding of block-level elements.
    - Examples: `<div>, <p>, <h1> to <h6>, <ul>, <ol>, <li>, <table>, <form>, and <header>`
- Inline elements:
    - It does not starts on the new line and it takes up the width as much as it is necessary.
    - Inline elements cannot have width, height, margins, or padding set. These properties will not affect the layout of inline elements.
    - Examples: `<span>, <a>, <strong>, <em>, <img>, <b>, <i>, and <input>`.
- Differences:
    - Block level element can contain other block-level and inline element, whereas inline element can contain other inline elements only.
    - Block-level elements will stack on top of each other vertically, while inline elements will flow horizontally in the same line.
    - Block-level elements can have margins and padding applied on all sides, while inline elements only respect left and right margins/padding, not top and bottom.