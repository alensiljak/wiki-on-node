wiki-on-node
============

Wiki implemented with Node.js

Files:

- app.js = main application file
- search.js = contains the code for handling search requests

# Installation

To run the wiki

- Install harp with ```npm install -g harp```
- Run ```harp server``` from the wiki directory.

## Dependencies

- [marked](https://github.com/chjj/marked) - Markdown processor.
- express, a web site framework 
- [harp](http://harpjs.com/) - static web server.

## Check out

[Search-Index](https://github.com/fergiemcdowall/search-index) - full-text search. Can be used to implement full-text search on the wiki content.

# References

## Markdown

http://daringfireball.net/projects/markdown/

## Harp

### EJS Templates

- [EJS Layouts](http://harpjs.com/docs/development/layout)
- See http://www.codersgrid.com/2013/10/14/make-a-blog-with-harp/.
- [EJS reference](http://embeddedjs.com/)

## Search

This is a template for server-side search for Harp.js.

Harp is used as middleware. The skeleton site runs on Express. There is only one specific route for search,
that runs the indexer and any other server-side code.
It could be made to run as REST-ful service so that the results are retrieved from the client-side JavaScript code for something like typeahead, etc.

search.js will contain the implementation of the search. See how to utilize
https://github.com/fergiemcdowall/search-index
