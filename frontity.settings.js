const settings = {
  "name": "final",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "book-theme",
      "state": {
        "theme": {
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "homepage": "home-page",
          "url": "http://rsawejka.bitlampsites.com/wpd/wordpress/wordpressfinal/",
          "postTypes": [
            {
              type: "books",
              endpoint: "books",
              archive: "/books"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
