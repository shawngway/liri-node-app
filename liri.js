require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require("axios");
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);

switch (process.argv[2]) {
    case "concert-this":
        // code block
        break;
    case "spotify-this-song":
        // code block
        songName = process.argv[3];
        spotify.search({ type: 'track', query: songName, limit: '1' }, function (err, data) {
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
        var movieName = process.argv[3];


        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

        axios.get(queryUrl).then(
            function (response) {
                console.log("Title: " + response.data.Title);
                console.log("Release: " + response.data.Year);
                console.log("IMDB Rating:  " + response.data.Rated);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("country where the movie was produced:  " + response.data.Country);

            })
            .catch(function (error) {
                if (error.response) {
                    console.log("---------------Data---------------");
                    console.log(error.response.data);
                    console.log("---------------Status---------------");
                    console.log(error.response.status);
                    console.log("---------------Status---------------");
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });

        break;
    case "do-what-it-says":
        //code block

        break;
    default:
    // code block
}