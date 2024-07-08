# This file contains HTML Interview questions, their corresponding answers

1. What are the main differences between HTML4 and HTML5?
    || HTML 4|HTML 5|
    |------------------|-----------------|------------------|
    | **DOCTYPE** | It is complex | It is simpler and easier to remember|
    | **Character encoding** | Complex: `charset=ISO-8859-1` | Simplified way to declare charset: `charset="UTF-8"`|
    | **New element** | - | several new semantic elements like `<article>, <section>, <nav>, <header>, <footer>, <aside>, and <main>`. |
    | **Deprecated elements** | HTML 4 deprecated: `<font>, <center>, and <big>` | It encourages usage of CSS for stylling |
    | **Multimedia support** | need external plugins like flash | Provides native support with <audio> and <video> tags |
    | **API** | Requires additional plugins | It includes several new apis such as geolocation api, web storage( local and session storage ) apis, web workers and canvas element for drawing the graphics |

2. What are semantic HTML tags? Can you give examples and explain their significance?
    - Semantic HTML tags are the HTML elements that provides meaning and structure about the content they contain.
    - They provide a clear description about the content both to the browser and the developer.
    - By using semantic tag properly in the webpage we can improve the accessibility, SEO and maintainability of the code.
    - Some of the common semantic elements are:
    - `<header>`
    - `<nav>`
    - `<main>`
    - `<article>`
    - `<section>`
    - `<aside>`
    - `<footer>`
    - `<figure> and <figcaption>`

3. How do you create a form in HTML? What are some of the different input types available?
    - Form in HTML can be created using `<form>` tag.
    - Inside `<form>` we will be encapsulating:
        - `<label>`: It provides a text label with a form element.
        - `<input>`: Represents an input field where user can create a data.
        - `<input type="submit">`: Creates a submit button that send the form data into the server.
    - Different input types are:
        | **Category**            | **Input Types**                                                         |
        |-------------------------|-------------------------------------------------------------------------|
        | **Text input types**    | `text`, `password`, `email`, `tel`, `search`, `url`                     |
        | **Date and Time types** | `date`, `time`, `datetime-local`, `month`, `week`                       |
        | **Numeric input types** | `number`, `range`                                                       |
        | **Selection types**     | `checkbox`, `radio`, `select`                                           |
        | **Button types**        | `submit`, `reset`, `button`                                             |
        | **Other types**         | `image`, `hidden`                                                       |

4. How do you handle form validation in HTML5?
    - HTML5 provides a built-in features to ensure that the user input is correct before the form is submitted.
    - Some of the key aspects of form validation are:
        - Using `required` attribute to ensure the form has value for the necesary elements.
        - Using appropriate `input` types.
        - Using `pattern` attribute which uses regular expression to match the user input value.
        - Using `minlength and maxlength` attribute to ensure that the value has minimum and maximum length of chaarcters.
        - Using `min and max` attribute to specify minimum range and maximum range for the number input type.
        - Using `title` attribute to specifythe error message to display when the validation criteria not met.
        - Usin `novalidate` attribute in the form tag allows us to write custom validation and disables the in-built validations.
    
5. Explain the difference between a block-level element and an inline element.
    | **Category** | **Block level element** | **Inline element** |
    |-------------------------|------------------------|----------------------|
    | **Display characteristic** | The elements starts on the new line and takes up the entire width available by default | Inline element doesn't start on the new line and they only take up as much width as necessary |
    | **Content flow** | Block element push the content down to the next line and they can contain other block and line elements | Inline element allow content to flow around them and they contain only text or other inline element |
    | **Size control** | Width and Height can be set | we cannot control the height and width of the element |
    | **Example** | `<div>, <p>, <h1> to <h6>, <ul>, <ol>, <li>, <table>, <section>, <article>, <header>, <footer>, and <nav>` | `<span>, <a>, <em>, <strong>, <img>, <br>, <code>, <input>, <label>, and <button>` |

6. What is the purpose of the alt attribute in the <img> tag?
    - The purpose of alt attribute in the <img> tag is to display the alternative text or the textual description for the image when the image has not loaded properly.

7. How do you create a hyperlink in HTML? What is the difference between an absolute and a relative URL?
    - Hyperlink can be created using <a> anchor tag along with `href` attribute which specifies the url.
    - An `absolute url` contains the full address of a web resource including the protocol, domain name and path. It is a complete url that can be used to link to a resource anywhere on the web.
    - A `relative url` dosen't include the domain name and it is used to link to the resource within same website. 

8. What is the purpose of the target="_blank" attribute in an anchor tag?
    - The purpose of target="_blank attribute to open the url in the new tab.

9. How do you create a table in HTML? What are the essential elements of a table?
    - Essential elements to create a table in the HTML are:
        - `<table>`: The container for the entire table.
        - `<tr>`: Table row - Defines row in a table.
        - `<th>`: Table header - Defines a header cell in a table, usually bold and centered.
        - `<td>`: Table data - Defines a standard data cell in a table.
        - `<thead>`: Groups the header content in the table.
        - `<tbody>`: Groups the body content in the table.
        - `<tfoot>`: Groups the footer content in the table.

10. What are the different types of lists in HTML, and how do you create them?
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

11. How do you ensure accessibility in your HTML markup?
    - Using semantic HTML elements
    - Provide text equivalents wherever possible like alt for image tarnscripts and captions for audio and video etc.
    - Ensuring keyboard accessibilty
    - provide proper label and instructions.
    - Make the link descriptive as much as possible
    - Test with assisstive technologies.

12. Can you describe the structure and purpose of the <head> and <body> sections in an HTML document?
    - `<head>`:
        - The head is where we provide meta information about the HTML document.
        - The information provided in the head section is not visible in the browser but it is necessary for browser, SEO and other web services.
        - It is use to link the external resources like CSSstyles and Javascript file.
    - `<body>`: 
        - The body section contains the actual content of the webpage, which is visible to the user in the web browser.
13. What is the role of the <meta> tag in HTML?
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

14. What is the purpose of the doctype declaration in HTML?
    - The docttype is not a HTML tag but it is a declaration.
    - It instructs the web browser about the version of the HTML dcoument is written in.
15. How do you embed multimedia content like audio and video in HTML5?
    - Audio: `<audio>`
    - Video: `<video>`

16. What are data attributes in HTML5, and how are they used?
    - Data attributes in HTML5 allow you to store extra information directly on HTML elements without affecting their presentation or behavior. 
    - These attributes are useful for storing custom data that can be easily accessed and manipulated using JavaScript.