const { Mongoose } = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
});

const Joke = mongoose.model('Joke', JokeSchema);

modules.exports = Joke;