var gplay = require('google-play-scraper');
var linkId ="draw.and.collect"
var data = {};
gplay.app({appId: linkId})

  .then((value) => {
    data = value;
    data =     {
      "id": 1,
      "date": "12/06/2021",
      "title" : value.title,
      "icon": value.icon,
      "ratings": value.ratings,
      "installs": value.installs,
      "plateform":  0, 
      "link" : value.url
    },
    console.log(data);
    // expected output: "Success!"
  });