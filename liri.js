require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require("axios");
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);

switch (process.argv[2]) {
    case "concert-this":
        // code block
        console.log("concert-this working")
        break;
    case "spotify-this-song":
        // code block
        console.log("spotify-this-song working")
        songName = process.argv[3];
        spotify.search({ type: 'track', query: songName, limit: '1' }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            };
           
          console.log(data.tracks.items[0].album.artists[0].name);
          console.log(songName);
          console.log(data.tracks.items[0].album.external_urls);
          console.log(data.tracks.items[0].album.name);
          });
        break;
    case "movie-this":
        //code block
        console.log("movie-this working")

        break;
    case "do-what-it-says":
        //code block
        console.log("do-what-it-says working")

        break;
    default:
    // code block
}