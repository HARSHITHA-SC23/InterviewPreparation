# This document contains all the important topics comes under HTML

### Basic HTML Structure

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