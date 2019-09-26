require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require("axios");
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
var fs = require('fs')
var find = process.argv[2];
var skill = process.argv.slice(3).join(" ");

function jerb() {
    switch (find) {
        case "concert-this":
            // code block
            var artistName = skill;


            var queryUrl = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";

            axios.get(queryUrl).then(
                function (response) {
                    for (i = 0; i < response.data.length; i++) {
                        console.log("Name of the venue: " + response.data[i].venue.name);
                        console.log("Venue location: " + response.data[i].venue.city);
                        console.log("Date of the Event:  " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
                        console.log("---------------------------");
                    }
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
        case "spotify-this-song":
            // code block
            songName = skill;
            spotify.search({ type: 'track', query: songName, limit: '1' }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                };

                console.log(data.tracks.items[0].album.artists[0].name);
                console.log(songName);
                console.log(data.tracks.items[0].album.external_urls);
                console.log(data.tracks.items[0].album.name);
            });
            //The Sign default
            break;
        case "movie-this":
            //code block
            var movieName = skill;


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
            //default Mr. Nobody

            break;
        case "do-what-it-says":
            //code block
            fs.readFile("random.txt", "utf8", function (error, data) {
                if (error) {
                    return console.log(error)
                }
                var arr = data.split(",")
                find = arr[0];
                skill = arr[1];

                jerb();
            })
            break;
        default:
        // code block
    }
}
jerb();