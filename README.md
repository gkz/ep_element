ep_element
=========
An Etherpad Lite plugin. Adds the ability to set output tag and attributes.

Use:
On an element, (say a `span`), add the class `elem` to enable the plugin on the element. Then, to set the output element (optional, defaults to `span`), add the class `elem:elemname` (eg. `elem:a`). For each attribute, add a class in the format `attr-attrname:attrvalue`, eg. `attr-contentedtiable:true`, `attr-data-code:x%20y`. Encode any attr values with `encodeURIComponent`.

Example:

    <span class="elem elem:a attr-href:http%3A%2F%2Fgithub.com">github</span>

will produce:

    <a href="http://github.com">github</span>

To set classes on an element, simply use `attr-class:cls`. You can set the style property by either creating a class as described previously, or setting the style property as per normal html development (it will be preserved).

Development:

    npm run prepublish

to compile JS and package.json
