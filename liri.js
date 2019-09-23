require("dotenv").config();
var keys = require("./keys");
var spotify = new spotify(keys.spotify);

switch (process.argv[2]) {
    case "concert-this":
        // code block
        console.log("concert-this working")
        break;
    case "spotify-this-song":
        // code block
        console.log("spotify-this-song working")

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